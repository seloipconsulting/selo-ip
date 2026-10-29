"use client";

import { useState, type FormEvent } from "react";
import { ArrowUp, Sparkles, X } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

// Campo flutuante no rodapé da tela: a pergunta digitada vai direto para o WhatsApp.
export function FloatingAsk() {
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = text.trim();
    const message = value ? `Olá! Vim pelo site da Selo IP. ${value}` : undefined;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex items-center justify-center gap-2 px-4">
      <form
        id="floating-ask"
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-full bg-gradient-to-r from-brand-500 via-brand-600 to-coral p-[2px] shadow-2xl shadow-black/40"
      >
        <div className="flex items-center gap-2 rounded-full bg-white py-1.5 pr-1.5 pl-4">
          <Sparkles className="size-4 shrink-0 text-brand-500" aria-hidden />
          <label htmlFor="floating-ask-input" className="sr-only">
            Pergunte a um especialista
          </label>
          <input
            id="floating-ask-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Minha marca pode ser registrada?"
            autoComplete="off"
            className="h-8 min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted"
          />
          <button
            type="submit"
            aria-label="Enviar pergunta pelo WhatsApp"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-400 text-white transition-colors hover:bg-brand-600"
          >
            <ArrowUp className="size-4" aria-hidden />
          </button>
        </div>
      </form>
      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label="Fechar campo de pergunta"
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-canvas text-fg ring-1 ring-edge"
      >
        <X className="size-4" aria-hidden />
      </button>
    </div>
  );
}
