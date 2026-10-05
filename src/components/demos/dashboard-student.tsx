export function DashboardStudent() {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 h-3 w-28 rounded bg-slate-300" />
        <div className="h-7 w-40 rounded bg-navy" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Growth", value: "+12%", color: "bg-status-green" },
          { label: "Weak concepts", value: "3", color: "bg-status-orange" },
        ].map((s) => (
          <div key={s.label} className="rounded bg-slate-50 p-3">
            <div className="h-1.5 w-14 rounded bg-slate-200" />
            <div className={`mt-2 h-5 w-12 rounded ${s.color}`} />
          </div>
        ))}
      </div>
      <div className="rounded bg-slate-50 p-3">
        <div className="mb-2 h-1.5 w-24 rounded bg-slate-200" />
        <div className="space-y-1.5">
          {["Weak topics", "Strong topics", "Planner", "Upcoming tests"].map((l, i) => (
            <div key={l} className="flex items-center gap-2">
              <div className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-status-orange" : "bg-navy"}`} />
              <div className="h-1.5 flex-1 rounded bg-slate-200" />
              <span className="text-[10px] text-slate-400">{i * 25 + 55}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
