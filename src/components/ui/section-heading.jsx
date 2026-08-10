import PropTypes from "prop-types";

/**
 * Shared "// eyebrow" + heading (+ optional description) block used at
 * the top of every section and sub-section on the page. Centralising it
 * here keeps the visual language consistent and means a single change
 * (spacing, sizing, the eyebrow style) updates every section at once.
 */
export function SectionHeading({ eyebrow, title, icon: Icon, description, level = 1, className = "" }) {
  const Tag = level === 1 ? "h1" : "h2";
  const titleSize = level === 1 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";
  const iconSize = level === 1 ? "w-7 h-7" : "w-6 h-6";

  return (
    <div className={className}>
      <span className="eyebrow">{eyebrow}</span>
      <Tag className={`mt-3 ${titleSize} font-bold tracking-tight flex items-center gap-3`}>
        {Icon && <Icon className={`${iconSize} text-[var(--accent)]`} />}
        {title}
      </Tag>
      {description && (
        <p className="mt-2 text-[var(--ink-muted)] max-w-xl">{description}</p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  description: PropTypes.node,
  level: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
};
