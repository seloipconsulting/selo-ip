import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

// Prazos de proteção previstos na Lei de Propriedade Industrial (Lei nº 9.279/96).
const stats = [
  { text: "Registro de marca com exclusividade em todo o território nacional, renovável.", value: "10 anos", label: "de proteção por registro" },
  { text: "Patente de invenção para proteger soluções técnicas novas.", value: "20 anos", label: "de proteção da invenção" },
  { text: "Modelo de utilidade para melhorias funcionais em objetos.", value: "15 anos", label: "de proteção da melhoria" },
  { text: "Busca de viabilidade antes de qualquer investimento.", value: "R$ 0", label: "para saber se dá para registrar" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-canvas-alt py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-48 size-[620px] rounded-full bg-glow blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Proteja mais rápido, gaste menos, durma tranquilo"
          description="Registre sua criação com especialistas, sem burocracia, e acompanhe tudo em um único lugar."
        />

        <dl className="mx-auto mt-16 grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.value}
              delay={i * 0.08}
              className={[
                "flex flex-col items-center justify-between gap-8 px-6 py-8 text-center",
                i > 0 && "border-t border-edge lg:border-t-0 lg:border-l",
                i === 1 && "sm:border-t-0",
                i % 2 === 1 && "sm:border-l",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <dt className="text-[15px] text-fg">{stat.text}</dt>
              <dd>
                <span className="block text-5xl font-normal tracking-tight whitespace-nowrap text-mint">{stat.value}</span>
                <span className="mt-1 block text-sm text-fog">{stat.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
