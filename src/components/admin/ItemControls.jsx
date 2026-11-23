"use client";
import { ArrowDownIcon, ArrowUpIcon, EyeIcon, EyeOffIcon, Trash2Icon } from "lucide-react";
import { itemAction } from "@/app/admin/actions";

function Op({ kind, id, op, back, title, disabled, className = "admin-icon-btn", confirmText, children }) {
  return (
    <form
      action={itemAction}
      onSubmit={(event) => {
        if (confirmText && !window.confirm(confirmText)) event.preventDefault();
      }}
    >
      <input type="hidden" name="kind" value={kind} />
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="op" value={op} />
      <input type="hidden" name="back" value={back} />
      <button type="submit" title={title} aria-label={title} disabled={disabled} className={className}>
        {children}
      </button>
    </form>
  );
}

/** Up / down, show / hide and delete for one row of a list. */
export default function ItemControls({ kind, item, back, first, last }) {
  return (
    <div className="flex items-center gap-1">
      <Op kind={kind} id={item.id} op="up" back={back} title="Move up" disabled={first}>
        <ArrowUpIcon className="h-4 w-4" />
      </Op>
      <Op kind={kind} id={item.id} op="down" back={back} title="Move down" disabled={last}>
        <ArrowDownIcon className="h-4 w-4" />
      </Op>
      <Op kind={kind} id={item.id} op={item.published ? "hide" : "show"} back={back} title={item.published ? "Hide from the website" : "Show on the website"}>
        {item.published ? <EyeIcon className="h-4 w-4" /> : <EyeOffIcon className="h-4 w-4 text-amber-600" />}
      </Op>
      <Op
        kind={kind}
        id={item.id}
        op="delete"
        back={back}
        title="Delete"
        className="admin-icon-btn hover:border-red-200 hover:bg-red-50 hover:text-red-700"
        confirmText={`Delete "${item.name}" for good? To take it off the website for now, use Hide instead.`}
      >
        <Trash2Icon className="h-4 w-4" />
      </Op>
    </div>
  );
}
