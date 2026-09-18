import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { motion, type Transition } from "framer-motion";
import { useMotionPreferences } from "@/lib/MotionPreferences";
import "./morph-dialog.css";

interface MorphDialogProps {
  id: string;
  layoutId: string;
  titleId: string;
  descriptionId?: string;
  returnFocusRef: RefObject<HTMLElement | null>;
  onClose: () => void;
  transition: Transition;
  className?: string;
  children: ReactNode;
}

// This dialog remains mounted through its exit animation, keeping focus and scroll locked.
function DialogLayer({ host, ...props }: MorphDialogProps & { host: HTMLDivElement }) {
  const { reduced } = useMotionPreferences();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef(props.onClose);
  const outsidePointer = useRef(false);
  closeRef.current = props.onClose;

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const trigger = props.returnFocusRef.current ?? document.activeElement as HTMLElement | null;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const inertState = new Map<HTMLElement, boolean>();

    const isolate = () => {
      for (const sibling of Array.from(body.children)) {
        if (!(sibling instanceof HTMLElement) || sibling === host || inertState.has(sibling)) continue;
        inertState.set(sibling, sibling.inert);
        sibling.inert = true;
      }
    };
    // Move focus out of the application before making it inert.
    panel.focus({ preventScroll: true });
    isolate();
    const observer = new MutationObserver(isolate);
    observer.observe(body, { childList: true });
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";

    const focusable = () => Array.from(panel.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )).filter((element) => !element.matches(":disabled") && element.tabIndex >= 0 &&
      !element.closest("[inert]") && element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeRef.current();
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      const current = document.activeElement;
      if (!first) { event.preventDefault(); panel.focus({ preventScroll: true }); }
      else if (event.shiftKey && (current === first || current === panel || !panel.contains(current))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (current === last || current === panel || !panel.contains(current))) {
        event.preventDefault(); first.focus();
      }
    };
    const onFocusIn = (event: FocusEvent) => {
      if (event.target instanceof Node && !panel.contains(event.target)) panel.focus({ preventScroll: true });
    };
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("focusin", onFocusIn, true);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", onKeyDown, true);
      document.removeEventListener("focusin", onFocusIn, true);
      inertState.forEach((inert, element) => { element.inert = inert; });
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
      if (trigger?.isConnected && !trigger.closest("[inert]")) trigger.focus({ preventScroll: true });
    };
  }, [host, props.returnFocusRef]);

  return (
    <motion.div className={`morph-dialog-layer ${props.className ?? ""}`} layoutRoot>
      <motion.div
        className="morph-dialog-backdrop"
        aria-hidden="true"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.24 }}
      />
      <div
        className="morph-dialog-positioner"
        onPointerDown={(event) => { outsidePointer.current = event.target === event.currentTarget; }}
        onClick={(event) => {
          if (outsidePointer.current && event.target === event.currentTarget) closeRef.current();
          outsidePointer.current = false;
        }}
      >
        <motion.div
          ref={panelRef}
          id={props.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby={props.titleId}
          aria-describedby={props.descriptionId}
          tabIndex={-1}
          className="morph-dialog-panel"
          layoutId={reduced ? undefined : props.layoutId}
          layoutScroll
          style={{ borderRadius: 12 }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={props.transition}
        >{props.children}</motion.div>
      </div>
    </motion.div>
  );
}

export function MorphDialog(props: MorphDialogProps) {
  const [host, setHost] = useState<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const element = document.createElement("div");
    element.dataset.morphDialogPortal = "";
    document.body.appendChild(element);
    setHost(element);
    return () => { element.remove(); };
  }, []);
  return host ? createPortal(<DialogLayer {...props} host={host} />, host) : null;
}
