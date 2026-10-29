import { Bell, Check, CheckCheck, MessageCircle, Radar, TriangleAlert } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { WhatsAppButton } from "./ui/WhatsAppButton";

function MonitoringVisual() {
  const alerts = [
    { icon: TriangleAlert, tone: "text-brand-800 bg-gold-soft", title: "Pedido parecido detectado", meta: "Revista do INPI · Classe 35" },
    { icon: Check, tone: "text-brand-600 bg-brand-100", title: "Oposição protocolada", meta: "Dentro do prazo legal" },
    { icon: Bell, tone: "text-accent bg-brand-600/20", title: "Renovação em 9 meses", meta: "Lembrete automático" },
  ];
  return (
    <div className="rounded-3xl bg-brand-900 p-6 sm:p-10">
      <div className="rounded-2xl bg-panel p-6 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 text-sm font-bold text-fg">
          <Radar className="size-5 text-accent" aria-hidden />
          Monitoramento da sua marca
        </div>
        <ul className="mt-5 space-y-3">
          {alerts.map(({ icon: Icon, tone, title, meta }) => (
            <li key={title} className="flex items-center gap-3 rounded-xl bg-panel p-3">
              <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${tone}`}>
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-bold text-fg">{title}</span>
                <span className="block text-sm text-fog">{meta}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="rounded-3xl bg-brand-600 p-6 sm:p-10">
      <div className="mx-auto max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <MessageCircle className="size-5" aria-hidden />
          Selo IP · online
        </div>
        <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-ink">
          Olá! Quero saber se consigo registrar a marca da minha cafeteria.
        </p>
        <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-black px-4 py-3 text-sm text-white">
          Claro! Já fizemos a busca: o nome está disponível na classe 43. Podemos protocolar hoje mesmo.
          <CheckCheck className="ml-2 inline size-4 text-gold" aria-hidden />
        </p>
        <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-ink">Perfeito, vamos fazer!</p>
      </div>
    </div>
  );
}

const blocks = [
  {
    title: "Sua marca vigiada todos os dias",
    description:
      "Acompanhamos a Revista da Propriedade Industrial semanalmente. Se alguém tentar registrar algo parecido com a sua marca, você fica sabendo e nós agimos dentro do prazo.",
    points: ["Alertas de marcas semelhantes", "Controle de prazos e renovações", "Defesa em oposições"],
    visual: <MonitoringVisual />,
  },
  {
    title: "Especialistas de verdade, sem juridiquês",
    description:
      "Nada de robô. Você conversa com um especialista em propriedade intelectual pelo WhatsApp, recebe explicações claras e acompanha cada etapa do processo.",
    points: ["Resposta em até 1 hora útil", "Relatórios a cada movimentação", "Atendimento em todo o Brasil"],
    visual: <ChatVisual />,
  },
];

export function Showcase() {
  return (
    <section className="bg-canvas pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6 lg:space-y-28">
        {blocks.map((block, i) => (
          <div key={block.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={`min-w-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}>{block.visual}</Reveal>
            <Reveal delay={0.1} className="min-w-0">
              <h2 className="text-3xl leading-[1.15] font-extrabold tracking-tight text-balance text-fg sm:text-4xl">{block.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-fog">{block.description}</p>
              <ul className="mt-6 space-y-3">
                {block.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-fg">
                    <Check className="size-4 shrink-0 text-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
              <WhatsAppButton variant="outline" label="Falar com um especialista" className="mt-8" />
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
