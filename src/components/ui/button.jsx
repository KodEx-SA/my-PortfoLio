import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Shared CTA button. Every variant is built from our design-system
 * CSS variables (never a raw Tailwind colour), so it re-themes for
 * free in dark mode along with everything else on the site.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Solid neutral — inverts automatically between light/dark mode
        // (dark button on light bg; light button on dark bg).
        primary:
          "bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent-ink)] hover:scale-[1.03] active:scale-[0.98]",
        // Brand gradient — reserved for the one primary action per section.
        gradient: "btn-gradient",
        outline:
          "border border-[var(--border)] text-[var(--ink)] hover:border-[var(--ink-faint)] hover:scale-[1.03] active:scale-[0.98]",
        ghost: "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)]",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        icon: "w-9 h-9 !p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
