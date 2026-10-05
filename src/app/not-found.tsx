import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-4 text-7xl font-bold text-navy">404</p>
      <h1 className="mb-3 text-2xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mb-8 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-navy px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
