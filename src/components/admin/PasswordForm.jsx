"use client";
import { useActionState } from "react";
import { changePasswordAction } from "@/app/admin/actions";

export default function PasswordForm() {
  const [state, action, pending] = useActionState(changePasswordAction, null);
  return (
    <form action={action} className="space-y-4" key={state?.ok ? "done" : "form"}>
      <label className="block">
        <span className="admin-label">Current password</span>
        <input name="current" type="password" autoComplete="current-password" required className="admin-input" />
      </label>
      <label className="block">
        <span className="admin-label">New password (at least 10 characters)</span>
        <input name="next" type="password" autoComplete="new-password" minLength={10} required className="admin-input" />
      </label>
      <label className="block">
        <span className="admin-label">New password again</span>
        <input name="again" type="password" autoComplete="new-password" minLength={10} required className="admin-input" />
      </label>
      {state?.error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{state.error}</p> : null}
      {state?.ok ? <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">Password changed.</p> : null}
      <button type="submit" disabled={pending} className="admin-btn-primary">
        {pending ? "Saving..." : "Change password"}
      </button>
    </form>
  );
}
