export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="h-8 w-8 animate-pulse rounded-lg bg-navy" />
      <p className="mt-4 text-sm text-slate-400">Loading Cavalaid...</p>
    </div>
  );
}
