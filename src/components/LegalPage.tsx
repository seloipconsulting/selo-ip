import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";
import { Footer } from "./Footer";
import { Logo } from "./ui/Logo";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

// Estrutura comum das páginas de políticas: cabeçalho simples, texto e rodapé do site.
export function LegalPage({ title, updated, children }: Props) {
  return (
    <>
      <header className="border-b border-edge bg-canvas">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-[0.12em] text-fg uppercase">
            <Logo size={36} />
            {site.name}
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline">
            <ArrowLeft className="size-4" aria-hidden />
            Voltar ao site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-4xl leading-tight font-normal tracking-tight text-balance text-fg sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-fog">Última atualização: {updated}</p>
        <div className="mt-10 space-y-8 text-[17px] leading-relaxed text-fog [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-fg [&_li]:mt-2 [&_p]:mt-3 [&_strong]:text-fg [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function ContactLine() {
  return (
    <p>
      Fale conosco pelo e-mail <strong>{site.email}</strong> ou pelo WhatsApp <strong>{site.phone}</strong>.
    </p>
  );
}
