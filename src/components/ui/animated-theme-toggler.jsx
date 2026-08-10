"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";

/**
 * Theme toggle with a circular "reveal" transition expanding from the
 * button itself (View Transitions API, with a plain instant fallback
 * for browsers that don't support it). Delegates the actual theme
 * state to next-themes rather than touching the `dark` class directly,
 * so it stays in sync with system-preference detection and persistence.
 */
export function AnimatedThemeToggler({ className, duration = 400 }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const toggleTheme = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const button = buttonRef.current;

    if (!button || typeof document.startViewTransition !== "function") {
      setTheme(next);
      return;
    }

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
        },
        { duration, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
      );
    });
  }, [resolvedTheme, setTheme, duration]);

  return (
    <button type="button" ref={buttonRef} onClick={toggleTheme} className={className} aria-label="Toggle theme">
      {mounted && resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
