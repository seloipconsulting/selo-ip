"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { navLinks, site, whatsappLink } from "@/lib/site";
import { Logo } from "./ui/Logo";

const subLinks = [
  { label: "Marcas", href: "#servicos" },
  { label: "Patentes", href: "#servicos" },
  { label: "Desenho industrial", href: "#servicos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[76px]">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5 text-lg font-bold tracking-[0.12em] text-fg uppercase">
            <Logo size={40} />
            {site.name}
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(0, 4).map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[15px] text-fg transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          {/* Botão com borda em gradiente */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-coral p-px sm:inline-flex"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-canvas px-5 py-2.5 text-sm font-bold text-fg transition-colors hover:bg-panel-inset">
              <MessageCircle className="size-4" aria-hidden />
              Especialista
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-fg lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      <div className="hidden border-y border-edge md:block">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 text-[15px] text-fg sm:px-6">
          <span>Registro de marcas e patentes</span>
          <ul className="flex gap-7">
            {subLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-edge lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-fg hover:bg-panel-raised"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
