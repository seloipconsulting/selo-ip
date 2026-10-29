import { Reveal } from "./Reveal";

type Props = {
  title: string;
  description?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({ title, description, tone = "dark" }: Props) {
  const light = tone === "light";
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <h2
        className={`text-4xl leading-[1.15] font-normal tracking-tight text-balance sm:text-5xl ${light ? "text-ink" : "text-fg"}`}
      >
        {title}
      </h2>
      {description && <p className={`mt-4 text-lg ${light ? "text-ink-muted" : "text-fog"}`}>{description}</p>}
    </Reveal>
  );
}
