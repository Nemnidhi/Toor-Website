import { requireAdmin } from "@/lib/auth";
import { listEnquiries } from "@/lib/leads";
import { sendNowAction } from "../../actions";
import Flash from "@/components/admin/Flash";

export const dynamic = "force-dynamic";
export const metadata = { title: "Website enquiries" };

const when = (iso) => (iso ? new Date(iso).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "");

function Row({ record, pending }) {
  const e = record.enquiry || {};
  return (
    <tr className="align-top">
      <td className="whitespace-nowrap px-3 py-2 text-xs text-slate-500">{when(record.receivedAt)}</td>
      <td className="px-3 py-2">
        <div className="font-bold">{e.name}</div>
        <div className="text-xs text-slate-500">{e.phone}</div>
      </td>
      <td className="px-3 py-2 text-sm">
        {e.workspaceType || "-"}
        {e.property ? <div className="text-xs text-slate-500">{e.property}</div> : null}
      </td>
      <td className="px-3 py-2 text-xs text-slate-500">{e.page || ""}</td>
      <td className="px-3 py-2 text-xs">
        {pending ? (
          <span className="font-bold text-amber-700">
            Waiting (try {record.attempts || 0}){record.lastError ? <span className="block font-normal text-slate-500">{record.lastError}</span> : null}
          </span>
        ) : (
          <span className="text-emerald-700">
            In the CRM{record.crm?.duplicate ? " (repeat)" : record.crm?.created ? " (new lead)" : " (added to existing lead)"}
            {record.crm?.brokerBlocked ? <span className="block font-bold text-red-700">broker number: blocked</span> : null}
            {record.crm?.assignee ? <span className="block text-slate-500">to {record.crm.assignee}</span> : null}
          </span>
        )}
      </td>
    </tr>
  );
}

export default async function EnquiriesPage({ searchParams }) {
  await requireAdmin();
  const { msg } = await searchParams;
  const { pending, sent, sentTotal, crmConfigured } = await listEnquiries({ sentLimit: 100 });
  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div>
        <h1 className="text-2xl font-black">Website enquiries</h1>
        <p className="text-sm text-slate-500">Every form on the website goes to the CRM as a lead. This page only shows whether each one arrived; work the leads in the CRM.</p>
      </div>
      <Flash message={msg} />
      {!crmConfigured ? <Flash tone="error" message="The CRM link is not set up on this server yet, so enquiries are kept here and will be sent once it is." /> : null}
      {pending.length ? (
        <div className="admin-card space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-base font-black text-amber-800">{pending.length} waiting to reach the CRM</h2>
            <form action={sendNowAction}>
              <button type="submit" className="admin-btn">
                Try sending now
              </button>
            </form>
          </div>
          <p className="text-xs text-slate-500">They are retried every minute by themselves. If they keep waiting, tell the developer.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-100">
                {pending.map((record) => (
                  <Row key={record.id} record={record} pending />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      <div className="admin-card p-0">
        <h2 className="px-5 pt-5 text-base font-black">
          Sent to the CRM <span className="text-sm font-semibold text-slate-500">({sentTotal} in all{sentTotal > sent.length ? `, latest ${sent.length} shown` : ""})</span>
        </h2>
        {sent.length ? (
          <div className="overflow-x-auto p-2">
            <table className="w-full text-left">
              <tbody className="divide-y divide-slate-100">
                {sent.map((record) => (
                  <Row key={record.id} record={record} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="p-5 text-sm text-slate-500">None yet.</p>
        )}
      </div>
    </div>
  );
}
