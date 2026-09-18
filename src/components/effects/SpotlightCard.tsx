import { forwardRef, type PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, type HTMLMotionProps, type MotionStyle } from "framer-motion";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import { premiumSpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = HTMLMotionProps<"div"> & { lift?: number; spotlight?: boolean };

export function useSpotlight() {
  const { pointer } = useMotionPreferences();
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const pointerX = useMotionTemplate`${x}px`;
  const pointerY = useMotionTemplate`${y}px`;
  return {
    style: { "--pointer-x": pointerX, "--pointer-y": pointerY } as MotionStyle,
    onPointerMove: (event: PointerEvent<HTMLElement>) => {
      if (!pointer || event.pointerType !== "mouse") return;
      const bounds = event.currentTarget.getBoundingClientRect();
      x.set(event.clientX - bounds.left); y.set(event.clientY - bounds.top);
    },
  };
}

export const SpotlightCard = forwardRef<HTMLDivElement, Props>(function SpotlightCard({
  children, className, style, lift = 3, spotlight = true, onPointerMove, onPointerLeave, ...props
}, ref) {
  const { pointer, reduced } = useMotionPreferences();
  const light = useSpotlight();
  return (
    <motion.div ref={ref} {...props}
      className={cn("network-surface", spotlight && "spotlight-card", className)}
      style={{ ...style, ...light.style }}
      whileHover={pointer && lift ? { y: -lift, transition: premiumSpring } : undefined}
      whileTap={!reduced && props.onClick ? { scale: 0.99 } : undefined}
      onPointerMove={(event) => {
        if (spotlight) light.onPointerMove(event);
        onPointerMove?.(event);
      }} onPointerLeave={onPointerLeave}>
      {children}
    </motion.div>
  );
});
