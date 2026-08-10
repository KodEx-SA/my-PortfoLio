import { Children } from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

/**
 * Arranges its children evenly around a circular orbit path and
 * spins them continuously. Used to frame something central (a
 * photo, a logo) with a curated set of icons.
 */
export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  const childArray = Children.toArray(children);

  return (
    <>
      {path && (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 size-full">
          <circle className="stroke-[var(--border)] stroke-1" cx="50%" cy="50%" r={radius} fill="none" />
        </svg>
      )}
      {childArray.map((child, index) => {
        const angle = (360 / childArray.length) * index;
        return (
          <div
            key={index}
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={cn(
              "animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full",
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

OrbitingCircles.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
  duration: PropTypes.number,
  delay: PropTypes.number,
  radius: PropTypes.number,
  path: PropTypes.bool,
  iconSize: PropTypes.number,
  speed: PropTypes.number,
};
