import { Check, Search } from "lucide-react";
import { plans, whatsappUrl } from "@/lib/site";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function Pricing() {
  return (
    <section id="planos" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Escolha a proteção ideal para você"
          description="Fale com um especialista e receba um orçamento sob medida para o seu caso."
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-canvas ${
                  plan.featured ? "border-brand-600 shadow-xl shadow-brand-900/10" : "border-edge"
                }`}
              >
                {plan.featured && (
                  <p className="bg-brand-600 py-2 text-center text-xs font-bold tracking-[0.18em] text-white uppercase">
                    Recomendado
                  </p>
                )}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-extrabold text-fg">{plan.name}</h3>
                  <p className="mt-2 min-h-12 text-[15px] text-fog">{plan.description}</p>

                  <p className="mt-6 flex items-center gap-2 rounded-lg border border-dashed border-brand-300 bg-brand-50 px-3 py-2.5 text-sm text-brand-800">
                    <Search className="size-4 shrink-0" aria-hidden />
                    Busca de viabilidade grátis incluída
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[15px] text-fg">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton
                    variant={plan.featured ? "primary" : "outline"}
                    icon={false}
                    label="Solicitar orçamento"
                    href={whatsappUrl(`Olá! Tenho interesse no plano ${plan.name} da Selo IP.`)}
                    className="mt-8 w-full"
                  />
                  <p className="mt-3 text-center text-xs text-fog">Taxas oficiais do INPI informadas no orçamento.</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
