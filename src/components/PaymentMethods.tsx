// Selos das formas de pagamento aceitas, desenhados em SVG para não depender de imagens externas.
const badge = "flex h-10 w-[68px] items-center justify-center overflow-hidden rounded-md border border-rule bg-white";

function Pix() {
  return (
    <svg viewBox="0 0 64 24" className="h-6" aria-hidden>
      <g fill="#32bcad" transform="translate(4 4)">
        <rect x="5" y="0" width="6" height="6" rx="1.2" transform="rotate(45 8 3)" />
        <rect x="0" y="5" width="6" height="6" rx="1.2" transform="rotate(45 3 8)" />
        <rect x="10" y="5" width="6" height="6" rx="1.2" transform="rotate(45 13 8)" />
        <rect x="5" y="10" width="6" height="6" rx="1.2" transform="rotate(45 8 13)" />
      </g>
      <text x="26" y="17" fontSize="14" fontWeight="600" fill="#4d4d4d" fontFamily="Arial, sans-serif">
        pix
      </text>
    </svg>
  );
}

function Boleto() {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2];
  let x = 6;
  return (
    <svg viewBox="0 0 64 28" className="h-7" aria-hidden>
      {bars.map((w, i) => {
        const rect = <rect key={i} x={x} y="3" width={w} height="13" fill="#1d1e20" />;
        x += w + 2;
        return rect;
      })}
      <text x="32" y="25" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1d1e20" fontFamily="Arial, sans-serif">
        Boleto
      </text>
    </svg>
  );
}

function Visa() {
  return (
    <svg viewBox="0 0 64 24" className="h-6" aria-hidden>
      <text x="32" y="18" textAnchor="middle" fontSize="17" fontWeight="900" fontStyle="italic" fill="#1a1f71" fontFamily="Arial, sans-serif">
        VISA
      </text>
    </svg>
  );
}

function Mastercard() {
  return (
    <svg viewBox="0 0 40 24" className="h-6" aria-hidden>
      <circle cx="15" cy="12" r="9" fill="#eb001b" />
      <circle cx="25" cy="12" r="9" fill="#f79e1b" />
      <path d="M20 4.5a9 9 0 0 1 0 15a9 9 0 0 1 0-15z" fill="#ff5f00" />
    </svg>
  );
}

function Amex() {
  return (
    <span className="flex h-full w-full items-center justify-center bg-[#2e77bc]">
      <svg viewBox="0 0 64 24" className="h-6" aria-hidden>
        <text x="32" y="17" textAnchor="middle" fontSize="15" fontWeight="900" fontStyle="italic" fill="#ffffff" fontFamily="Arial, sans-serif">
          AMEX
        </text>
      </svg>
    </span>
  );
}

function Elo() {
  return (
    <span className="flex h-full w-full items-center justify-center bg-[#1d1e20]">
      <svg viewBox="0 0 64 24" className="h-6" aria-hidden>
        <circle cx="16" cy="7" r="2.6" fill="#ffcb05" />
        <circle cx="12.5" cy="12" r="2.6" fill="#00a4e0" />
        <circle cx="16" cy="17" r="2.6" fill="#ef4123" />
        <text x="22" y="17" fontSize="15" fontWeight="700" fill="#ffffff" fontFamily="Arial, sans-serif">
          elo
        </text>
      </svg>
    </span>
  );
}

function Hipercard() {
  return (
    <svg viewBox="0 0 64 24" className="h-7" aria-hidden>
      <rect x="4" y="3" width="56" height="18" rx="3" fill="#b3131b" />
      <text x="32" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fontStyle="italic" fill="#ffffff" fontFamily="Arial, sans-serif">
        Hipercard
      </text>
    </svg>
  );
}

const methods = [
  { name: "Pix", Mark: Pix },
  { name: "Boleto", Mark: Boleto },
  { name: "Visa", Mark: Visa },
  { name: "Mastercard", Mark: Mastercard },
  { name: "American Express", Mark: Amex },
  { name: "Elo", Mark: Elo },
  { name: "Hipercard", Mark: Hipercard },
];

export function PaymentMethods() {
  return (
    <div>
      <p className="text-sm font-bold tracking-wider uppercase">Formas de pagamento</p>
      <ul className="mt-3 flex flex-wrap items-center gap-2" aria-label="Formas de pagamento aceitas">
        {methods.map(({ name, Mark }) => (
          <li key={name} className={badge} title={name}>
            <span className="sr-only">{name}</span>
            <Mark />
          </li>
        ))}
        <li className="pl-1 text-sm font-bold text-brand-600">e mais</li>
      </ul>
    </div>
  );
}
