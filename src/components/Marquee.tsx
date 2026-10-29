import { site } from "@/lib/site";

const separators = ["✦", "®"];

// Faixa coral com mensagens rolando sem parar.
export function Marquee() {
  const items = site.marquee.flatMap((text, i) => [text, separators[i % 2]]);
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden bg-coral py-2 text-sm font-bold text-black" aria-label={site.marquee.join(" · ")}>
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap" aria-hidden>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10">
            {row.map((item, i) => (
              <span key={`${copy}-${i}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
