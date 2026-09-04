"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, JSX } from "react";

export default function MouseSpotlight(): JSX.Element | null {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      visibleRef.current = true;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    const animate = () => {
      const current = positionRef.current;
      const target = targetRef.current;

      positionRef.current = {
        x: current.x + (target.x - current.x) * 0.1,
        y: current.y + (target.y - current.y) * 0.1,
      };

      if (spotlightRef.current && visibleRef.current) {
        const { x, y } = positionRef.current;
        spotlightRef.current.style.setProperty("--mouse-x", `${x}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${y}px`);
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
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
  );
}
