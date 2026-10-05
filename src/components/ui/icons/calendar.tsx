import type { SVGProps } from "react";

export function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2v4M16 2v4M3 10h18M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10" />
    </svg>
  );
}