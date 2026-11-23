import { requireAdmin } from "@/lib/auth";
import PasswordForm from "@/components/admin/PasswordForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "My password" };

export default async function AccountPage() {
  const admin = await requireAdmin();
  return (
    <div className="mx-auto max-w-md space-y-5">
      <div>
        <h1 className="text-2xl font-black">My password</h1>
        <p className="text-sm text-slate-500">
          Signed in as <span className="font-bold">{admin.username}</span>. Changing it signs you out on every other device.
        </p>
      </div>
      <div className="admin-card">
        <PasswordForm />
      </div>
    </div>
  );
}
