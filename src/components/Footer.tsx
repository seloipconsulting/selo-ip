import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { legalLinks } from "@/lib/legal";
import { site, whatsappLink } from "@/lib/site";
import { PaymentMethods } from "./PaymentMethods";
import { Logo } from "./ui/Logo";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const columns = [
  {
    title: "Serviços",
    links: [
      { label: "Registro de marca", href: "/#servicos" },
      { label: "Patentes", href: "/#servicos" },
      { label: "Desenho industrial", href: "/#servicos" },
      { label: "Monitoramento", href: "/#servicos" },
    ],
  },
  {
    title: "Informações",
    links: [
      { label: "Planos", href: "/#planos" },
      { label: "Como funciona", href: "/#como-funciona" },
      { label: "Perguntas frequentes", href: "/#faq" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: `WhatsApp ${site.phone}`, href: whatsappLink, external: true },
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.address },
    ],
  },
];

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 pt-14 pb-28 sm:px-6">
        <nav aria-label="Você está em" className="flex items-center gap-1.5 text-sm">
          <Link href="/" className="hover:underline">
            {site.name}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden />
          <span>Registro de marcas e patentes</span>
        </nav>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={48} />
              <h3 className="text-sm font-bold tracking-wider uppercase">{site.name}</h3>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{site.description}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold tracking-wider uppercase">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"href" in link && link.href ? (
                      <a
                        href={link.href}
                        {...("external" in link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-ink-muted">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-rule pt-8">
          <PaymentMethods />
          <nav aria-label="Políticas" className="mt-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-xs text-ink-muted">
          © {year} {site.name}. Todos os direitos reservados. Registro de marcas e patentes junto ao INPI.
        </p>
      </div>
    </footer>
  );
}
