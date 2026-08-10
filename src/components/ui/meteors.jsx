"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * A handful of streaking "meteors" for ambient background motion.
 * Deliberately kept sparse (see usage) — this is a texture, not
 * the focal point of the section it sits behind.
 */
export const Meteors = ({
  number = 12,
  minDelay = 0.3,
  maxDelay = 1.5,
  minDuration = 4,
  maxDuration = 9,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time randomized layout computed from window size, not a render-driven update
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-[var(--ink-faint)] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-[var(--accent)]/50 to-transparent" />
        </span>
      ))}
    </>
  );
};

Meteors.propTypes = {
  number: PropTypes.number,
  minDelay: PropTypes.number,
  maxDelay: PropTypes.number,
  minDuration: PropTypes.number,
  maxDuration: PropTypes.number,
  angle: PropTypes.number,
  className: PropTypes.string,
};
