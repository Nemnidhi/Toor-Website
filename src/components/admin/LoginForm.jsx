"use client";
import { useActionState } from "react";
import { loginAction } from "@/app/admin/actions";

export default function LoginForm({ next }) {
  const [state, action, pending] = useActionState(loginAction, null);
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <label className="block">
        <span className="mb-1 block text-sm font-bold text-slate-700">Username</span>
        <input name="username" defaultValue={state?.username || ""} autoComplete="username" required autoFocus className="admin-input" />
      </label>
      <label className="block">
        <span className="mb-1 block text-sm font-bold text-slate-700">Password</span>
        <input name="password" type="password" autoComplete="current-password" required className="admin-input" />
      </label>
      {state?.error ? <p className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">{state.error}</p> : null}
      <button type="submit" disabled={pending} className="admin-btn-primary w-full">
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
