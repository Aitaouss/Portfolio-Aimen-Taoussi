"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, JSX } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, summary, label, [role='button'], [data-cursor='interactive']";
const NATIVE_CURSOR_SELECTOR =
  "input, textarea, select, [contenteditable='true'], [data-native-cursor='true']";

export default function MouseSpotlight(): JSX.Element {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !supportsFinePointer) return;

    const root = document.documentElement;
    const spotlight = spotlightRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    let rafId = 0;
    let pointerX = 0;
    let pointerY = 0;

    root.classList.add("custom-cursor-enabled");

    const setCursorVisible = (visible: boolean): void => {
      visibleRef.current = visible;
      if (cursorDot) cursorDot.style.opacity = visible ? "1" : "0";
      if (cursorRing) cursorRing.style.opacity = visible ? "1" : "0";
    };

    const renderPointer = (): void => {
      rafId = 0;

      cursorDot?.style.setProperty(
        "transform",
        `translate3d(${pointerX - 2}px, ${pointerY - 2}px, 0)`
      );
      cursorRing?.style.setProperty(
        "transform",
        `translate3d(${pointerX - 12}px, ${pointerY - 12}px, 0)`
      );

      if (spotlight) {
        spotlight.style.setProperty("--mouse-x", `${pointerX}px`);
        spotlight.style.setProperty("--mouse-y", `${pointerY}px`);
      }
    };

    const handlePointerMove = (event: PointerEvent): void => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      const target = event.target;
      const element = target instanceof Element ? target : null;
      const usesNativeCursor = Boolean(
        element?.closest(NATIVE_CURSOR_SELECTOR)
      );
      const isInteractive = Boolean(
        !usesNativeCursor && element?.closest(INTERACTIVE_SELECTOR)
      );

      setCursorVisible(!usesNativeCursor);
      cursorDot?.classList.toggle("is-interactive", isInteractive);
      cursorRing?.classList.toggle("is-interactive", isInteractive);

      if (spotlight) spotlight.style.opacity = "1";

      // Coalesce pointer events into one paint per frame without adding a
      // trailing animation. This keeps the cursor locked to the real pointer.
      if (!rafId) rafId = requestAnimationFrame(renderPointer);
    };

    const handleMouseLeave = (): void => {
      visibleRef.current = false;
      setCursorVisible(false);
      if (spotlight) spotlight.style.opacity = "0";
    };

    const handlePointerDown = (): void => {
      if (!visibleRef.current) return;
      cursorDot?.classList.add("is-pressed");
      cursorRing?.classList.add("is-pressed");
    };

    const handlePointerUp = (): void => {
      cursorDot?.classList.remove("is-pressed");
      cursorRing?.classList.remove("is-pressed");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("blur", handleMouseLeave);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      root.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("blur", handleMouseLeave);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] opacity-0 transition-opacity duration-500 hidden md:block"
        style={
          {
            "--mouse-x": "50%",
            "--mouse-y": "50%",
            background: `
              radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 45%),
              radial-gradient(280px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.04), transparent 40%)
            `,
          } as CSSProperties
        }
      />
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className="custom-cursor-ring"
      >
        <span />
      </div>
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className="custom-cursor-dot"
      >
        <span />
      </div>
    </>
  );
}
