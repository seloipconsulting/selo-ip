import { Copyright, Gavel, Lightbulb, PenTool, Radar, Search } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const services = [
  {
    icon: Copyright,
    title: "Registro de marca",
    description: "Protegemos o nome e o logotipo do seu negócio no INPI, com uso exclusivo em todo o Brasil.",
  },
  {
    icon: Lightbulb,
    title: "Patentes de invenção",
    description: "Redação técnica e depósito de patentes de invenção e modelo de utilidade.",
  },
  {
    icon: PenTool,
    title: "Desenho industrial",
    description: "Registro do design e da forma dos seus produtos para impedir cópias no mercado.",
  },
  {
    icon: Search,
    title: "Busca de viabilidade",
    description: "Análise prévia na base do INPI para saber se sua marca pode ser registrada.",
  },
  {
    icon: Radar,
    title: "Monitoramento de marca",
    description: "Vigilância da Revista da Propriedade Industrial para identificar pedidos parecidos.",
  },
  {
    icon: Gavel,
    title: "Oposições e recursos",
    description: "Defesa técnica em exigências, oposições, recursos e nulidades.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Do nome ao invento: protegemos o que você criou"
          description="Do nome da empresa à sua invenção, cuidamos de toda a propriedade intelectual."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl bg-panel p-7 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-brand-300">
                <span className="flex size-12 items-center justify-center rounded-xl bg-tile text-accent transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg">{title}</h3>
                <p className="mt-2 leading-relaxed text-fog">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
