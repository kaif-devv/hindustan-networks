import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useMotionPreferences } from "@/lib/MotionPreferences";

export function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const visible = useInView(ref, { once: true, amount: 0.5 });
  const { reduced } = useMotionPreferences();
  useEffect(() => {
    const match = value.match(/^(\d+(?:\.\d+)?)([+%]?)$/);
    if (!visible || reduced || started.current || !match || !ref.current) return;
    started.current = true;
    const precision = match[1].split(".")[1]?.length ?? 0;
    const controls = animate(0, Number(match[1]), {
      duration: 1.05, ease: [0.22, 1, 0.36, 1],
      onUpdate: (current) => { if (ref.current) ref.current.textContent = current.toFixed(precision) + match[2]; },
      onComplete: () => { if (ref.current) ref.current.textContent = value; },
    });
    return () => { controls.stop(); if (ref.current) ref.current.textContent = value; };
  }, [visible, reduced, value]);
  return <span className="animated-stat"><span className="animated-stat-size" aria-hidden="true">{value}</span><span ref={ref} className="animated-stat-value" aria-hidden="true">{value}</span><span className="sr-only">{value}</span></span>;
}
