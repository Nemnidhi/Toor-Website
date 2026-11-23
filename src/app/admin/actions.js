"use server";
// Everything the admin changes goes through these server actions. Each one checks the session
// first (Next also refuses actions posted from another site).
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { endSession, requireAdmin, startSession } from "@/lib/auth";
import { AdminError, burnTime, findAdmin, setPassword, verifyPassword } from "@/lib/adminStore.mjs";
import { ContentError, deleteItem, moveItem, saveBuilding, saveOption, setPublished } from "@/lib/content";
import { deliverPending } from "@/lib/leads";
import { clientIp, rateLimit } from "@/lib/rateLimit";

const safeNext = (value) => {
  const next = String(value || "");
  return next.startsWith("/admin") && !next.startsWith("/admin/login") && !next.includes("//") ? next : "/admin";
};

export async function loginAction(_previous, formData) {
  const username = String(formData.get("username") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const ip = clientIp(await headers());
  const byIp = rateLimit(`login-ip:${ip}`, { limit: 10, windowMs: 15 * 60 * 1000 });
  const byUser = rateLimit(`login-user:${username}`, { limit: 6, windowMs: 15 * 60 * 1000 });
  if (!byIp.ok || !byUser.ok) return { error: "Too many tries. Wait 15 minutes and try again.", username };
  if (!username || !password) return { error: "Enter your username and password.", username };
  const user = await findAdmin(username);
  const ok = user ? await verifyPassword(password, user.hash) : (await burnTime(password), false);
  if (!ok) {
    console.warn(`[admin] failed sign-in for "${username.slice(0, 40)}" from ${ip}`);
    return { error: "Wrong username or password.", username };
  }
  await startSession(user);
  console.log(`[admin] ${user.username} signed in from ${ip}`);
  redirect(safeNext(formData.get("next")));
}

export async function logoutAction() {
  await endSession();
  redirect("/admin/login");
}

function refreshSite() {
  revalidatePath("/", "layout");
}

const failure = (error) => {
  if (error instanceof ContentError || error instanceof AdminError) return { ok: false, error: error.message };
  console.error("[admin] save failed", error);
  return { ok: false, error: "Could not save. Try again; if it keeps failing, tell the developer." };
};

export async function saveBuildingAction(input) {
  const admin = await requireAdmin();
  try {
    const { building } = await saveBuilding(input, admin.username);
    refreshSite();
    return { ok: true, id: building.id, category: building.category, slug: building.slug, published: building.published };
  } catch (error) {
    return failure(error);
  }
}

export async function saveOptionAction(input) {
  const admin = await requireAdmin();
  try {
    const { option } = await saveOption(input, admin.username);
    refreshSite();
    return { ok: true, id: option.id, category: option.category };
  } catch (error) {
    return failure(error);
  }
}

/** Show / hide / move / delete from the lists. Goes back to the list it came from. */
export async function itemAction(formData) {
  const admin = await requireAdmin();
  const kind = String(formData.get("kind"));
  const id = String(formData.get("id"));
  const op = String(formData.get("op"));
  const back = safeNext(formData.get("back"));
  let message = "";
  try {
    if (op === "show" || op === "hide") await setPublished(kind, id, op === "show", admin.username);
    else if (op === "up" || op === "down") await moveItem(kind, id, op === "up" ? -1 : 1, admin.username);
    else if (op === "delete") {
      const { removed } = await deleteItem(kind, id, admin.username);
      message = `Deleted ${removed.name}`;
    }
    refreshSite();
  } catch (error) {
    message = error instanceof ContentError ? error.message : "Could not change that";
    if (!(error instanceof ContentError)) console.error("[admin] item action failed", error);
  }
  const url = new URL(back, "http://x");
  if (message) url.searchParams.set("msg", message);
  redirect(`${url.pathname}${url.search}`);
}

export async function changePasswordAction(_previous, formData) {
  const admin = await requireAdmin();
  const current = String(formData.get("current") || "");
  const next = String(formData.get("next") || "");
  const again = String(formData.get("again") || "");
  if (!rateLimit(`pw:${admin.username}`, { limit: 6, windowMs: 15 * 60 * 1000 }).ok) return { error: "Too many tries. Wait 15 minutes." };
  const user = await findAdmin(admin.username);
  if (!user || !(await verifyPassword(current, user.hash))) return { error: "Your current password is not right." };
  if (next !== again) return { error: "The two new passwords differ." };
  if (next === current) return { error: "Choose a password different from the current one." };
  try {
    await setPassword(admin.username, next);
  } catch (error) {
    return failure(error);
  }
  // The new hash signs out every session, this one included: start a fresh one here.
  await startSession(await findAdmin(admin.username));
  console.log(`[admin] ${admin.username} changed their password`);
  return { ok: true };
}

export async function sendNowAction() {
  await requireAdmin();
  const result = await deliverPending();
  redirect(`/admin/enquiries?msg=${encodeURIComponent(`Sent ${result.sent}, still waiting ${result.failed}`)}`);
}
