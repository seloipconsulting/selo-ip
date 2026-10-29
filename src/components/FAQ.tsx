"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const faqs = [
  {
    question: "Por que preciso registrar minha marca?",
    answer:
      "No Brasil, quem registra primeiro no INPI tem o direito de uso exclusivo. Sem o registro, outra pessoa pode registrar o mesmo nome e impedir você de usá-lo — mesmo que você já esteja no mercado há anos.",
  },
  {
    question: "A busca de viabilidade é realmente gratuita?",
    answer:
      "Sim. Fazemos a pesquisa prévia na base do INPI sem custo e sem compromisso, para você saber as chances do registro antes de decidir.",
  },
  {
    question: "Quanto tempo leva o registro?",
    answer:
      "O prazo depende da fila do INPI e de eventuais exigências ou oposições. Durante todo o processo nós acompanhamos os prazos e avisamos você sobre cada movimentação.",
  },
  {
    question: "Por quanto tempo a marca fica protegida?",
    answer:
      "O registro de marca vale por 10 anos a partir da concessão e pode ser prorrogado sucessivamente. Avisamos você antes do vencimento.",
  },
  {
    question: "Pessoa física ou MEI pode registrar marca?",
    answer:
      "Sim. Pessoas físicas, MEIs e empresas de qualquer porte podem registrar, desde que a marca tenha relação com a atividade exercida.",
  },
  {
    question: "Quanto custa?",
    answer:
      "O investimento é composto pelas taxas oficiais do INPI e pelos nossos honorários, que variam conforme o serviço. Chame no WhatsApp e receba um orçamento claro, sem surpresas.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-48 bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          tone="light"
          title="Perguntas frequentes sobre registro de marca"
          description="Tire todas as suas dúvidas sobre como proteger sua marca e sua invenção."
        />

        <Reveal className="mt-14">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={faq.question} className="border-b border-rule">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg text-ink"
                  >
                    {faq.question}
                    {isOpen ? (
                      <Minus className="size-5 shrink-0" aria-hidden />
                    ) : (
                      <Plus className="size-5 shrink-0" aria-hidden />
                    )}
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 leading-relaxed text-ink-muted">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
