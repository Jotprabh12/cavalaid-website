export function DashboardMentor() {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 h-3 w-24 rounded bg-slate-300" />
        <div className="h-7 w-32 rounded bg-navy" />
      </div>
      <div className="rounded bg-slate-50 p-3">
        <div className="mb-2 h-1.5 w-28 rounded bg-slate-200" />
        <div className="space-y-2">
          {[
            { name: "Rahul", flag: "High", color: "bg-status-red" },
            { name: "Priya", flag: "Medium", color: "bg-status-orange" },
            { name: "Amit", flag: "Low", color: "bg-status-green" },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700">{s.name}</span>
              <span className={`rounded px-2 py-0.5 text-[10px] font-medium text-white ${s.color}`}>{s.flag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded bg-slate-50 p-3">
        <div className="mb-2 h-1.5 w-20 rounded bg-slate-200" />
        <div className="h-1.5 w-full rounded bg-slate-200">
          <div className="h-1.5 rounded bg-navy" style={{ width: "78%" }} />
        </div>
        <div className="mt-1 text-[10px] text-slate-400">78% reflection completion</div>
      </div>
    </div>
  );
}
