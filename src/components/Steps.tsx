import { BadgeCheck, FileCheck, Search } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { WhatsAppButton } from "./ui/WhatsAppButton";

const steps = [
  {
    icon: Search,
    title: "Verifique sua marca",
    description: "Envie o nome pelo WhatsApp e fazemos a busca de viabilidade na base do INPI, sem custo.",
  },
  {
    icon: FileCheck,
    title: "Nós protocolamos",
    description: "Preparamos a documentação, escolhemos as classes certas e protocolamos o pedido.",
  },
  {
    icon: BadgeCheck,
    title: "Receba o certificado",
    description: "Acompanhamos cada movimentação, respondemos exigências e avisamos você até a concessão.",
  },
];

export function Steps() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Registre sua marca em 3 passos"
          description="Você cuida do seu negócio. A burocracia do INPI fica com a gente."
        />

        <ol className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1} as="li" className="rounded-2xl bg-panel p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="text-sm font-bold tracking-wider text-accent uppercase">Etapa {i + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-fg">{title}</h3>
              <p className="mt-2 leading-relaxed text-fog">{description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <WhatsAppButton variant="contrast" label="Começar agora" />
        </Reveal>
      </div>
    </section>
  );
}
