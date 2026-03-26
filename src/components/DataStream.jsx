/**
 * Shared DataStream background effect component.
 * Eliminates repeated code across Hero, About, Contact, Experience, Projects, Skills, Footer.
 *
 * Usage:
 *   import DataStream from "@/components/DataStream";
 *   <DataStream count={6} opacity="opacity-5" direction="down" />
 *
 * Props:
 *   count     - number of streams (default: 5)
 *   opacity   - Tailwind opacity class (default: "opacity-5")
 *   direction - "down" (default) or "up" (for footer)
 *   fixed     - use fixed positioning instead of absolute (default: false)
 */
import { useState } from "react";

const CHARS = "01アイウエオカキクケコ";

export default function DataStream({
    count = 5,
    opacity = "opacity-5",
    direction = "down",
    fixed = false,
}) {
    const [streams] = useState(() =>
        Array.from({ length: count }, (_, i) => ({
            left: `${10 + i * (80 / count)}%`,
            delay: `${(i * 0.7).toFixed(1)}s`,
            chars: Array.from({ length: 30 }, () =>
                CHARS[Math.floor(Math.random() * CHARS.length)]
            ).join(""),
        }))
    );

    const posClass = fixed ? "fixed" : "absolute";
    const animClass =
        direction === "up" ? "animate-data-stream-up" : "animate-data-stream";
    const startPos = direction === "up" ? "bottom-0" : "top-0";

    return (
        <div
            className={`${posClass} inset-0 pointer-events-none overflow-hidden ${opacity} z-[5]`}
        >
            {streams.map((stream, i) => (
                <div
                    key={i}
                    className={`absolute ${startPos} text-green-400 text-xs font-mono ${animClass}`}
                    style={{ left: stream.left, animationDelay: stream.delay }}
                >
                    {stream.chars}
                </div>
            ))}
        </div>
    );
}