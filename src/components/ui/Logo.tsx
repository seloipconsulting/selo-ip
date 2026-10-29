import Image from "next/image";
import logo from "../../../public/images/logo-selo-ip.png";
import { site } from "@/lib/site";

type Props = {
  size?: number;
  className?: string;
};

// Logo oficial da Selo IP sobre um disco branco, legível em fundos claros e escuros.
export function Logo({ size = 36, className = "" }: Props) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white ${className}`}
      style={{ width: size, height: size, padding: size * 0.08 }}
    >
      <Image src={logo} alt={`Logo ${site.name}`} width={size} height={size} className="h-full w-full" />
    </span>
  );
}
