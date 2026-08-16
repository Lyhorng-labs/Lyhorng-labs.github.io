"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

// Wrap anything in <Reveal> and it fades + slides up when it scrolls into view.
export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} // start: invisible, 24px lower
      whileInView={{ opacity: 1, y: 0 }} // when scrolled into view: fade in, move up
      viewport={{ once: true, margin: "-80px" }} // animate once, a bit before fully visible
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
