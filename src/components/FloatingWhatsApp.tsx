import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

// Botão fixo no canto da tela para chamar no WhatsApp a qualquer momento.
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
