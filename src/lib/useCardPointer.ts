import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useMotionTemplate, useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";

const spring = { stiffness: 230, damping: 30, mass: 0.65 };
const clamp = (value: number) => Math.max(-1, Math.min(1, value));

/** A stationary hit area prevents tilt feedback. Pointer frames never set React state. */
export function useCardPointer(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const lift = useSpring(0, spring);
  const iconX = useTransform(rotateY, [-1.75, 1.75], [-1.5, 1.5]);
  const iconY = useTransform(rotateX, [-1.75, 1.75], [-1.5, 1.5]);
  const spotlightStyle = {
    "--card-pointer-x": useMotionTemplate`${x}px`,
    "--card-pointer-y": useMotionTemplate`${y}px`,
    "--card-icon-x": useMotionTemplate`${iconX}px`,
    "--card-icon-y": useMotionTemplate`${iconY}px`,
  } as MotionStyle;

  const reset = (instant = false) => {
    setActive(false);
    for (const value of [rotateX, rotateY, lift]) {
      if (instant) value.jump(0);
      else value.set(0);
    }
  };

  useEffect(() => {
    if (!enabled) {
      setActive(false);
      rotateX.jump(0);
      rotateY.jump(0);
      lift.jump(0);
    }
  }, [enabled, rotateX, rotateY, lift]);

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled || event.pointerType !== "mouse") return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds?.width || !bounds.height) return;
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    x.set(localX);
    y.set(localY);
    rotateX.set(-clamp(localY / bounds.height * 2 - 1) * 1.75);
    rotateY.set(clamp(localX / bounds.width * 2 - 1) * 1.75);
  };

  return {
    ref, active, spotlightStyle,
    transformStyle: { rotateX, rotateY, y: lift },
    reset,
    onPointerMove: move,
    onPointerEnter: (event: PointerEvent<HTMLDivElement>) => {
      if (!enabled || event.pointerType !== "mouse") return;
      move(event);
      setActive(true);
      lift.set(-5);
    },
  };
}
