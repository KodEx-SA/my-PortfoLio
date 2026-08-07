import PropTypes from "prop-types";

/**
 * Lightweight placeholder shown while a below-the-fold section's code
 * chunk is still loading. Mirrors the eyebrow + heading + card-grid
 * shape most sections share, so there's minimal layout shift on swap.
 */
export function SectionSkeleton({ minHeight = "60vh" }) {
  return (
    <div className="py-20 md:py-28 px-5 md:px-8 animate-pulse" style={{ minHeight }}>
      <div className="max-w-6xl mx-auto">
        <div className="h-3 w-20 rounded bg-[var(--surface-2)]" />
        <div className="mt-4 h-9 w-64 rounded bg-[var(--surface-2)]" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-2xl bg-[var(--surface)] border border-[var(--border)]" />
          ))}
        </div>
      </div>
    </div>
  );
}

SectionSkeleton.propTypes = {
  minHeight: PropTypes.string,
};
