import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Animates a number counting up from 0 to `value` once it scrolls into view.
 * `suffix` renders after the number (e.g. "+").
 */
export function CountUp({ value, suffix = "", duration = 1.2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest) + suffix;
    });
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

CountUp.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};
