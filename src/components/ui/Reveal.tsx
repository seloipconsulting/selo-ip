"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

// Faz o conteúdo surgir suavemente quando entra na tela.
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Component>
  );
}
