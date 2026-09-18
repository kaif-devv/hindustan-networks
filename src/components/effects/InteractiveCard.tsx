import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useCardPointer } from "@/lib/useCardPointer";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import "./interactive-card.css";

/** Children provide the surface and semantic action; this layer only handles depth and light. */
export function InteractiveCard({ children, disabled = false }: { children: ReactNode; disabled?: boolean }) {
  const { pointer } = useMotionPreferences();
  const card = useCardPointer(pointer && !disabled);

  return (
    <motion.div
      ref={card.ref}
      className="interactive-card"
      data-pointer-active={card.active && pointer && !disabled}
      style={card.spotlightStyle}
      onPointerEnter={card.onPointerEnter}
      onPointerMove={card.onPointerMove}
      onPointerLeave={() => card.reset()}
      onPointerCancel={() => card.reset()}
      onClickCapture={() => card.reset(true)}
    >
      <motion.div className="interactive-card-motion" style={card.transformStyle}>
        {children}
      </motion.div>
    </motion.div>
  );
}
