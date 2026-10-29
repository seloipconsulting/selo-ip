"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import magnifier from "../../public/images/lupa.png";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const highlights = [
  "Conte sobre sua marca, nós cuidamos do INPI",
  "Tudo incluso: busca, protocolo e acompanhamento",
  "Atendimento humano pelo WhatsApp, sem juridiquês",
];

export function Hero() {
  return (
    <section className="overflow-hidden bg-canvas pt-12 pb-20 sm:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:pl-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h1 className="text-[40px] leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[56px]">
            <span className="text-accent">Proteja sua marca</span>{" "}
            <span className="text-fg">com registro no INPI, do início ao certificado</span>
          </h1>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[17px] text-fg">
                <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 flex flex-wrap items-center gap-2 text-[17px] text-fg">
            Busca de viabilidade
            <span className="rounded-md bg-gold px-2.5 py-1 font-bold text-ink">100% grátis</span>
          </p>

          <WhatsAppButton label="Verificar minha marca" className="mt-8 w-full sm:w-auto sm:min-w-60" />
        </motion.div>

        <div className="relative mx-auto aspect-[736/792] w-full max-w-[420px]">
          <div aria-hidden className="absolute inset-[6%] rounded-full bg-brand-200/60 blur-[70px]" />
          {/* Lupa "procurando" a marca: entra na tela e balança devagar */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <motion.div
              animate={{ rotate: [0, -3, 0, 2, 0], x: [0, -6, 0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <Image
                src={magnifier}
                alt="Mão segurando uma lupa, representando a busca de viabilidade da marca"
                sizes="(min-width: 1024px) 420px, 90vw"
                preload
                className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgba(29,30,32,0.18)]"
              />
            </motion.div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.9 }}
            className="absolute top-[80%] right-0 rounded-full sm:right-[-16%] bg-gold px-6 py-3 text-xl font-extrabold whitespace-nowrap text-ink shadow-xl sm:text-2xl"
          >
            Busca 100% grátis
          </motion.span>
        </div>
      </div>
    </section>
  );
}
