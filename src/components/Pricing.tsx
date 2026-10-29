import { Check, Gift } from "lucide-react";
import { plans, whatsappUrl } from "@/lib/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-48 bg-canvas pt-16 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Escolha a proteção ideal para você"
          description="Fale com um especialista e receba um orçamento sob medida para o seu caso."
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.featured ? "bg-panel-raised ring-1 ring-edge lg:-mt-3 lg:pb-10" : "bg-panel"
                }`}
              >
                <span className="absolute top-4 right-4 rounded-md bg-coral px-2 py-0.5 text-xs font-bold text-white">
                  {plan.badge}
                </span>
                <h3 className="mt-6 text-xl font-bold text-fg">{plan.name}</h3>
                <p className="mt-2 min-h-12 text-[15px] text-fog">{plan.description}</p>

                <WhatsAppButton
                  variant={plan.featured ? "primary" : "outline"}
                  icon={false}
                  label="Solicitar orçamento"
                  href={whatsappUrl(`Olá! Tenho interesse no plano ${plan.name} da Selo IP.`)}
                  className="mt-8 w-full"
                />
                <p className="mt-4 text-xs leading-relaxed text-fog">
                  Orçamento sem compromisso. Taxas oficiais do INPI informadas antes da contratação.
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-panel-inset p-4">
                  <p className="text-sm text-fg">
                    <span className="font-bold">Bônus:</span> busca de viabilidade gratuita antes de contratar
                  </p>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral text-white">
                    <Gift className="size-5" aria-hidden />
                  </span>
                </div>

                <ul className="mt-6 space-y-3 border-t border-edge pt-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] text-fg">
                      <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
