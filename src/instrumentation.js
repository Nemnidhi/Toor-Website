// Runs once when the server starts: a timer that sends any enquiry the CRM has not confirmed yet.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.LEADS_SENDER === "off") return;
  const { deliverPending } = await import("./lib/leads");
  const everyMs = Math.max(15, Number(process.env.LEADS_RETRY_SECONDS) || 60) * 1000;
  const tick = () => deliverPending().catch((error) => console.error("[leads] sender failed", error));
  setTimeout(tick, 5_000);
  setInterval(tick, everyMs).unref?.();
}
