"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

// Número que sobe de 0 até o valor final quando entra na tela.
// O servidor já entrega o valor final, então a página fica completa mesmo antes da animação.
export function CountUp({ to, prefix = "", suffix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const write = (n: number) => {
    if (ref.current) ref.current.textContent = `${prefix}${n}${suffix}`;
  };

  // Zera antes de aparecer, para a contagem começar do 0.
  useEffect(() => {
    if (!reduceMotion && !started.current && !inView) write(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion || started.current) return;
    started.current = true;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => write(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`} data-count-to={to} data-count-prefix={prefix} data-count-suffix={suffix}>
      {prefix}
      {to}
      {suffix}
    </span>
  );
}
