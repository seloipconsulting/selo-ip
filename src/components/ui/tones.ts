// Combinações de cor usadas para variar ícones e cards sem perder a harmonia da paleta.
export const tones = {
  plum: { tile: "bg-brand-100 text-brand-700", line: "bg-brand-600" },
  jade: { tile: "bg-jade-50 text-jade-700", line: "bg-jade-600" },
  gold: { tile: "bg-gold-soft text-gold-700", line: "bg-gold" },
  petrol: { tile: "bg-petrol-50 text-petrol-700", line: "bg-petrol-600" },
} as const;

export type Tone = keyof typeof tones;

export const toneCycle: Tone[] = ["plum", "jade", "petrol", "gold"];
