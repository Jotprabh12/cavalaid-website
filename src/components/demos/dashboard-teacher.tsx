export function DashboardTeacher() {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 h-3 w-32 rounded bg-slate-300" />
        <div className="h-7 w-44 rounded bg-navy" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Common mistakes", value: "12", color: "bg-status-red" },
          { label: "Weak topics", value: "5", color: "bg-status-orange" },
          { label: "Avg confidence", value: "72%", color: "bg-status-green" },
        ].map((s) => (
          <div key={s.label} className="rounded bg-slate-50 p-3">
            <div className="h-1.5 w-14 rounded bg-slate-200" />
            <div className={`mt-2 h-5 w-10 rounded ${s.color}`} />
            <div className="mt-1 h-1.5 w-16 rounded bg-slate-200" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded bg-slate-50 p-3">
          <div className="mb-2 h-1.5 w-24 rounded bg-slate-200" />
          <div className="flex items-end gap-0.5">
            {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-navy/20" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded bg-slate-50 p-3">
          <div className="mb-2 h-1.5 w-20 rounded bg-slate-200" />
          <div className="space-y-1.5">
            {["Calculus", "Electrostatics", "Organic Chem"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded bg-slate-200" />
                <div className={`h-1.5 w-12 rounded ${i === 0 ? "bg-status-red" : i === 1 ? "bg-status-orange" : "bg-status-green"}`} style={{ width: `${55 + i * 20}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
