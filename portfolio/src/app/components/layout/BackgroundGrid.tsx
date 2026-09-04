"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, JSX } from "react";

export default function BackgroundGrid(): JSX.Element | null {
  const gridRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      const current = positionRef.current;
      const target = targetRef.current;

      positionRef.current = {
        x: current.x + (target.x - current.x) * 0.1,
        y: current.y + (target.y - current.y) * 0.1,
      };

      if (gridRef.current) {
        const { x, y } = positionRef.current;
        gridRef.current.style.setProperty("--mouse-x", `${x}px`);
        gridRef.current.style.setProperty("--mouse-y", `${y}px`);
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block bg-dot-subtle opacity-30"
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          WebkitMaskImage: `
          radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 70%)
        `,
          maskImage: `
          radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 70%)
        `,
        } as CSSProperties
      }
    />
  );
}
