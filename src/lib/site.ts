// Conteúdo e links centrais da landing page — edite aqui sem mexer nos componentes.
export const site = {
  name: "Selo IP",
  tagline: "Registro de marcas e patentes",
  description:
    "Proteja sua marca, invenção ou design com quem entende de propriedade intelectual. Registro no INPI do início ao certificado, com acompanhamento completo.",
  url: "https://seloip.com.br",
  email: "seloipconsulting@gmail.com",
  phone: "(21) 97511-6004",
  address: "Rio de Janeiro, RJ — atendimento em todo o Brasil",
  marquee: [
    "Busca de viabilidade grátis",
    "Especialistas em INPI",
    "Atendimento pelo WhatsApp",
    "Proteja sua marca hoje",
    "Acompanhamento até o certificado",
  ],
  whatsapp: {
    // Número no formato internacional, só dígitos (55 + DDD + número).
    number: "5521975116004",
    message: "Olá! Vim pelo site da Selo IP e quero proteger minha marca.",
  },
  cta: {
    primary: "Falar no WhatsApp",
    secondary: "Ver planos",
  },
};

export function whatsappUrl(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const whatsappLink = whatsappUrl();

export const navLinks = [
  { label: "Planos", href: "#planos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Perguntas frequentes", href: "#faq" },
];

export const plans = [
  {
    name: "Essencial",
    description: "Para quem quer registrar a primeira marca.",
    features: [
      "Busca de viabilidade completa",
      "Protocolo do pedido no INPI",
      "1 classe de produto ou serviço",
      "Acompanhamento do processo",
      "Suporte pelo WhatsApp",
    ],
    featured: false,
    badge: "Primeira marca",
  },
  {
    name: "Proteção Total",
    description: "O mais completo para proteger seu negócio.",
    features: [
      "Tudo do plano Essencial",
      "Até 2 classes de proteção",
      "Resposta a exigências do INPI",
      "Monitoramento de marcas parecidas",
      "Defesa em oposições",
      "Especialista dedicado",
    ],
    featured: true,
    badge: "Mais escolhido",
  },
  {
    name: "Patentes",
    description: "Para proteger invenções e designs.",
    features: [
      "Busca de anterioridade",
      "Redação técnica do pedido",
      "Patente de invenção ou modelo de utilidade",
      "Registro de desenho industrial",
      "Acompanhamento até a concessão",
    ],
    featured: false,
    badge: "Para inventores",
  },
];
