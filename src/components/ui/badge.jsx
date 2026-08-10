import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Small status/tag chip. `success` is reserved for genuine status
 * semantics (current role, available for work) — not decoration.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        neutral: "bg-[var(--surface-2)] text-[var(--ink-muted)]",
        accent: "bg-[var(--accent-soft)] text-[var(--accent)]",
        success: "bg-[var(--success-soft)] text-[var(--success)]",
        outline: "border border-[var(--border)] text-[var(--ink-muted)]",
        mono: "font-mono bg-[var(--surface-2)] text-[var(--ink-muted)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

function Badge({ className, variant, dot = false, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {props.children}
    </span>
  );
}

export { Badge, badgeVariants };
