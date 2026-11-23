export default function Flash({ message, tone = "info" }) {
  if (!message || typeof message !== "string") return null;
  const colors = tone === "error" ? "border-red-200 bg-red-50 text-red-800" : "border-emerald-200 bg-emerald-50 text-emerald-800";
  return <p className={`rounded-lg border px-4 py-2 text-sm font-semibold ${colors}`}>{message.slice(0, 200)}</p>;
}
