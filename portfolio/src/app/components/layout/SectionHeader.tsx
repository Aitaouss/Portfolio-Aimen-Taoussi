"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { JSX, ReactNode } from "react";
import { fadeUp, staggerContainer, viewport } from "../../lib/motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

const item = fadeUp;

export default function SectionHeader({
  label,
  title,
  description,
  children,
}: SectionHeaderProps): JSX.Element {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="mb-12 sm:mb-14 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
        <p className="text-label-editorial mb-3">{label}</p>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    );
  }

  return (
    <motion.div
      className="mb-12 sm:mb-14 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.1, 0)}
    >
      <motion.p className="text-label-editorial mb-3" variants={item}>
        {label}
      </motion.p>
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight mb-4"
        variants={item}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
        variants={item}
      >
        {description}
      </motion.p>
      {children ? (
        <motion.div className="mt-8" variants={item}>
          {children}
        </motion.div>
      ) : null}
    </motion.div>
  );
}
