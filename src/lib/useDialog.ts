import { useEffect, useRef, type RefObject } from "react";

export function useDialog(ref: RefObject<HTMLElement>, onClose: () => void) {
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(ref.current?.querySelectorAll<HTMLElement>('button, a[href], input, textarea, select, [tabindex="0"]') ?? []);
    const frame = requestAnimationFrame(() => (focusable()[0] ?? ref.current)?.focus());
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close.current(); }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0]; const last = items[items.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("keydown", handleKey); document.body.style.overflow = overflow; previous?.focus(); };
  }, [ref]);
}
