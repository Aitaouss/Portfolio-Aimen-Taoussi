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
  const spotlightPositionRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
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

    root.classList.add("custom-cursor-enabled");

    const setCursorVisible = (visible: boolean): void => {
      visibleRef.current = visible;
      if (cursorDot) cursorDot.style.opacity = visible ? "1" : "0";
      if (cursorRing) cursorRing.style.opacity = visible ? "1" : "0";
    };

    const handleMouseMove = (event: MouseEvent): void => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      const target = event.target;
      const element = target instanceof Element ? target : null;
      const usesNativeCursor = Boolean(
        element?.closest(NATIVE_CURSOR_SELECTOR)
      );
      const isInteractive = Boolean(
        !usesNativeCursor && element?.closest(INTERACTIVE_SELECTOR)
      );

      if (!visibleRef.current && !usesNativeCursor) {
        spotlightPositionRef.current = targetRef.current;
        ringPositionRef.current = targetRef.current;
      }

      setCursorVisible(!usesNativeCursor);
      cursorDot?.classList.toggle("is-interactive", isInteractive);
      cursorRing?.classList.toggle("is-interactive", isInteractive);

      if (spotlight) spotlight.style.opacity = "1";
    };

    const handleMouseLeave = (): void => {
      visibleRef.current = false;
      setCursorVisible(false);
      if (spotlight) spotlight.style.opacity = "0";
    };

    const handleMouseDown = (): void => {
      if (!visibleRef.current) return;
      cursorDot?.classList.add("is-pressed");
      cursorRing?.classList.add("is-pressed");
    };

    const handleMouseUp = (): void => {
      cursorDot?.classList.remove("is-pressed");
      cursorRing?.classList.remove("is-pressed");
    };

    const animate = (): void => {
      const target = targetRef.current;
      const spotlightPosition = spotlightPositionRef.current;
      const ringPosition = ringPositionRef.current;

      spotlightPositionRef.current = {
        x: spotlightPosition.x + (target.x - spotlightPosition.x) * 0.1,
        y: spotlightPosition.y + (target.y - spotlightPosition.y) * 0.1,
      };
      ringPositionRef.current = {
        x: ringPosition.x + (target.x - ringPosition.x) * 0.2,
        y: ringPosition.y + (target.y - ringPosition.y) * 0.2,
      };

      if (spotlight && visibleRef.current) {
        const { x, y } = spotlightPositionRef.current;
        spotlight.style.setProperty("--mouse-x", `${x}px`);
        spotlight.style.setProperty("--mouse-y", `${y}px`);
      }

      if (cursorDot) {
        cursorDot.style.transform = `translate3d(${target.x - 3}px, ${
          target.y - 3
        }px, 0)`;
      }

      if (cursorRing) {
        const { x, y } = ringPositionRef.current;
        cursorRing.style.transform = `translate3d(${x - 15}px, ${
          y - 15
        }px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleMouseLeave);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      root.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
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
