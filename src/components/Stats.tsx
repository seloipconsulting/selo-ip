import { CalendarClock, Lightbulb, Search, Wrench } from "lucide-react";
import { CountUp } from "./ui/CountUp";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { tones, type Tone } from "./ui/tones";

// Prazos de proteção previstos na Lei de Propriedade Industrial (Lei nº 9.279/96).
const stats: { icon: typeof Search; tone: Tone; value: number; prefix?: string; suffix?: string; label: string; text: string }[] = [
  { icon: CalendarClock, tone: "plum", value: 10, suffix: " anos", label: "Registro de marca", text: "Exclusividade em todo o Brasil, renovável a cada 10 anos." },
  { icon: Lightbulb, tone: "gold", value: 20, suffix: " anos", label: "Patente de invenção", text: "Proteção para soluções técnicas novas." },
  { icon: Wrench, tone: "petrol", value: 15, suffix: " anos", label: "Modelo de utilidade", text: "Proteção para melhorias funcionais em objetos." },
  { icon: Search, tone: "jade", value: 0, prefix: "R$ ", label: "Busca de viabilidade", text: "Saiba se dá para registrar antes de investir." },
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
          {stats.map(({ icon: Icon, tone, value, prefix, suffix, label, text }, i) => (
            <Reveal key={label} delay={i * 0.08} className="relative overflow-hidden rounded-2xl border border-edge bg-canvas p-6">
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1 ${tones[tone].line}`} />
              <span className={`flex size-11 items-center justify-center rounded-xl ${tones[tone].tile}`}>
                <Icon className="size-5" aria-hidden />
              </span>
              <dd className="mt-5 text-4xl font-extrabold tracking-tight whitespace-nowrap text-jade-600">
                <CountUp to={value} prefix={prefix} suffix={suffix} duration={1.4 + i * 0.15} />
              </dd>
              <dt className="mt-1 font-bold text-fg">{label}</dt>
              <dd className="mt-2 text-sm text-fog">{text}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
