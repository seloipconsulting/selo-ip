import Image from "next/image";
import handshake from "../../public/images/cta-aperto-de-maos.jpg";
import { Reveal } from "./ui/Reveal";
import { WhatsAppButton } from "./ui/WhatsAppButton";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black">
      <Image
        src={handshake}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[70%_center]"
      />
      {/* Escurece o lado do texto para manter a leitura em qualquer largura */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

      <Reveal className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:pl-16">
        <h2 className="max-w-lg text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-white sm:text-5xl">
          Quem registra primeiro, garante a marca.
        </h2>
        <p className="mt-6 max-w-sm text-lg text-white/85">
          No Brasil, a marca pertence a quem pede o registro primeiro no INPI. Descubra agora, sem custo, se o seu nome
          está disponível.
        </p>
        <WhatsAppButton variant="light" icon={false} label="Fazer minha busca grátis" className="mt-10 min-w-48" />
      </Reveal>
    </section>
  );
}
