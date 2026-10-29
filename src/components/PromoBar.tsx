import { Search } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

// Barra fixa de aviso no topo da página.
export function PromoBar() {
  return (
    <div className="bg-brand-900 px-4 py-2.5 text-center text-sm text-white">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
        <Search className="size-4 shrink-0 text-gold" aria-hidden />
        <span>
          {site.promo} <span className="font-bold text-gold">Fale com a gente</span>
        </span>
      </a>
    </div>
  );
}
