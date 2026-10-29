import { CalendarClock, Lightbulb, Search, Wrench } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

// Prazos de proteção previstos na Lei de Propriedade Industrial (Lei nº 9.279/96).
const stats = [
  { icon: CalendarClock, value: "10 anos", label: "Registro de marca", text: "Exclusividade em todo o Brasil, renovável a cada 10 anos." },
  { icon: Lightbulb, value: "20 anos", label: "Patente de invenção", text: "Proteção para soluções técnicas novas." },
  { icon: Wrench, value: "15 anos", label: "Modelo de utilidade", text: "Proteção para melhorias funcionais em objetos." },
  { icon: Search, value: "R$ 0", label: "Busca de viabilidade", text: "Saiba se dá para registrar antes de investir." },
];

export function Stats() {
  return (
    <section className="bg-canvas-alt py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          title="Sua criação protegida pelo tempo que a lei garante"
          description="Conheça os prazos de proteção de cada tipo de registro no INPI."
        />

        <dl className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, text }, i) => (
            <Reveal key={label} delay={i * 0.08} className="rounded-2xl border border-brand-100 bg-canvas p-6">
              <Icon className="size-6 text-accent" aria-hidden />
              <dd className="mt-4 text-4xl font-extrabold tracking-tight whitespace-nowrap text-brand-700">{value}</dd>
              <dt className="mt-1 font-bold text-fg">{label}</dt>
              <dd className="mt-2 text-sm text-fog">{text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
