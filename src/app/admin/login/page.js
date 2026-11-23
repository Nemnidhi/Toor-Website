import Image from "next/image";
import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import LoginForm from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";
export const metadata = { title: "Sign in" };

export default async function LoginPage({ searchParams }) {
  if (await currentAdmin()) redirect("/admin");
  const { next } = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <Image src="/assets/logo.png" alt="TheOfficeOnRent" width={240} height={80} className="h-20 w-auto scale-150" />
          <h1 className="text-xl font-black">Website admin</h1>
          <p className="text-sm text-slate-500">Add and update properties on the website.</p>
        </div>
        <LoginForm next={typeof next === "string" ? next : ""} />
      </div>
    </div>
  );
}
