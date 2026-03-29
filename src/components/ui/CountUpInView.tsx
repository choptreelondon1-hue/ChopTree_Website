"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CountUpInViewProps = {
  value: string;
  durationMs?: number;
};

function parseValue(value: string): { target: number; prefix: string; suffix: string } | null {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return null;

  return {
    prefix: match[1] ?? "",
    target: Number(match[2]),
    suffix: match[3] ?? "",
  };
}

export default function CountUpInView({ value, durationMs = 900 }: CountUpInViewProps) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [display, setDisplay] = useState(() => (parsed ? `0${parsed.suffix}` : value));

  useEffect(() => {
    if (!parsed || !inView || reduceMotion) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const next = Math.round(parsed.target * progress);
      setDisplay(`${parsed.prefix}${next}${parsed.suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, reduceMotion, value, durationMs]);

  return <span ref={ref}>{display}</span>;
}
