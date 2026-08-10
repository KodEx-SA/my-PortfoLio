"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * A typing-terminal widget: a window chrome around a sequence of
 * `$ command` / output lines that type themselves in one after another.
 * Three primitives compose it:
 *   <Terminal>          the window + sequencing context
 *   <TypingAnimation>    a line that types itself out character by character
 *   <AnimatedSpan>        a line that just fades/slides in (for output)
 */
const SequenceContext = createContext(null);
const useSequence = () => useContext(SequenceContext);
const ItemIndexContext = createContext(null);
const useItemIndex = () => useContext(ItemIndexContext);

export const AnimatedSpan = ({ children, delay = 0, className, startOnView = false, ...props }) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!sequence || itemIndex === null) return;
    if (!sequence.sequenceStarted) return;
    if (hasStarted) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- driven by the Terminal sequencer's activeIndex, not a render loop
    if (sequence.activeIndex === itemIndex) setHasStarted(true);
  }, [sequence, hasStarted, itemIndex]);

  const shouldAnimate = sequence ? hasStarted : startOnView ? isInView : true;

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: -5 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
      transition={{ duration: 0.3, delay: sequence ? 0 : delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      onAnimationComplete={() => {
        if (!sequence || itemIndex === null) return;
        sequence.completeItem(itemIndex);
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = motion.span,
  startOnView = true,
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error(`TypingAnimation: children must be a string. Received: ${typeof children}`);
  }

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.3, once: true });

  const sequence = useSequence();
  const itemIndex = useItemIndex();
  const hasSequence = sequence !== null;
  const sequenceStarted = sequence?.sequenceStarted ?? false;
  const sequenceActiveIndex = sequence?.activeIndex ?? null;
  const sequenceCompleteItemRef = useRef(null);
  const sequenceItemIndexRef = useRef(null);

  useEffect(() => {
    sequenceCompleteItemRef.current = sequence?.completeItem ?? null;
    sequenceItemIndexRef.current = itemIndex;
  }, [sequence?.completeItem, itemIndex]);

  useEffect(() => {
    let startTimeout = null;
    if (hasSequence && itemIndex !== null) {
      if (sequenceStarted && !started && sequenceActiveIndex === itemIndex) setStarted(true);
    } else if (!startOnView || isInView) {
      startTimeout = setTimeout(() => setStarted(true), delay);
    }
    return () => {
      if (startTimeout !== null) clearTimeout(startTimeout);
    };
  }, [delay, startOnView, isInView, started, hasSequence, sequenceActiveIndex, sequenceStarted, itemIndex]);

  useEffect(() => {
    let typingEffect = null;
    if (started) {
      let i = 0;
      typingEffect = setInterval(() => {
        if (i < children.length) {
          setDisplayedText(children.substring(0, i + 1));
          i++;
        } else {
          if (typingEffect !== null) clearInterval(typingEffect);
          const completeItem = sequenceCompleteItemRef.current;
          const currentItemIndex = sequenceItemIndexRef.current;
          if (completeItem && currentItemIndex !== null) completeItem(currentItemIndex);
        }
      }, duration);
    }
    return () => {
      if (typingEffect !== null) clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  const MotionComponent = Component;

  return (
    <MotionComponent ref={elementRef} className={cn("text-sm font-normal tracking-tight", className)} {...props}>
      {displayedText}
    </MotionComponent>
  );
};

export const Terminal = ({ children, className, sequence = true, startOnView = true }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const sequenceHasStarted = sequence ? !startOnView || isInView : false;

  const contextValue = useMemo(() => {
    if (!sequence) return null;
    return {
      completeItem: (index) => setActiveIndex((current) => (index === current ? current + 1 : current)),
      activeIndex,
      sequenceStarted: sequenceHasStarted,
    };
  }, [sequence, activeIndex, sequenceHasStarted]);

  const wrappedChildren = useMemo(() => {
    if (!sequence) return children;
    const array = Children.toArray(children);
    return array.map((child, index) => (
      <ItemIndexContext.Provider key={index} value={index}>
        {child}
      </ItemIndexContext.Provider>
    ));
  }, [children, sequence]);

  const content = (
    <div
      ref={containerRef}
      className={cn("bg-[var(--chrome)] z-0 h-full w-full rounded-2xl border border-white/10 shadow-xl overflow-hidden", className)}
    >
      <div className="flex items-center gap-3 px-4 py-3 bg-black/20 border-b border-white/10 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-[12px] font-mono text-white/40">ashley@kodex-sa: ~/portfolio</span>
      </div>
      <pre className="p-5 overflow-auto" style={{ minHeight: "320px", maxHeight: "380px" }}>
        <code className="grid gap-y-2 font-mono">{wrappedChildren}</code>
      </pre>
    </div>
  );

  if (!sequence) return content;

  return <SequenceContext.Provider value={contextValue}>{content}</SequenceContext.Provider>;
};
