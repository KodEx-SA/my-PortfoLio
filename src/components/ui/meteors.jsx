"use client";;
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { cn } from "@/lib/utils";

export const Meteors = ({ number = 20 }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 200) - 200 + "px",
      left: Math.floor(Math.random() * window.innerWidth || 1200) + "px",
      animationDelay: (Math.random() * 1.5 + 0.2).toFixed(2) + "s",
      animationDuration: (Math.floor(Math.random() * 6) + 4) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        className={cn(
          "pointer-events-none absolute size-1.5 rounded-full bg-gray-900",
          "shadow-[0_0_8px_2px_#34d39980] animate-meteor",
          "rotate-[215deg]"
        )}
        style={style}>
        {/* Meteor Tail */}
        <div
          className="absolute top-1/2 left-0 h-0.5 w-20 -translate-y-1/2 -translate-x-full" />
      </span>)
    ))}
  </>);
};
Meteors.propTypes = {
  number: PropTypes.number
};

export default Meteors;
