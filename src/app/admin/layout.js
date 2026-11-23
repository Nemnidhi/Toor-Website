export const metadata = {
  title: { default: "Admin | TheOfficeOnRent", template: "%s | Admin | TheOfficeOnRent" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }) {
  return <div className="min-h-screen bg-slate-100 text-slate-900">{children}</div>;
}
