import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

type Props = {
  label?: string;
  variant?: "primary" | "contrast" | "light" | "outline";
  href?: string;
  icon?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  contrast: "bg-contrast text-on-contrast hover:opacity-85",
  light: "bg-white text-black hover:bg-white/85",
  outline: "border border-fg text-fg hover:bg-fg/10",
};

export function WhatsAppButton({
  label = site.cta.primary,
  variant = "primary",
  href = whatsappLink,
  icon = true,
  className = "",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 ${variants[variant]} ${className}`}
    >
      {icon && <MessageCircle className="size-5" aria-hidden />}
      {label}
    </a>
  );
}
