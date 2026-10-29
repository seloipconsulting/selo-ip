"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

// Navegação em pílula que acompanha a rolagem e destaca a seção atual.
export function SectionTabs() {
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[72px] z-40 flex justify-center px-4 md:top-[124px] lg:top-[136px]">
      <nav
        aria-label="Seções da página"
        className="max-w-full overflow-x-auto rounded-full border border-edge bg-pill p-1 shadow-xl shadow-black/50 [scrollbar-width:none]"
      >
        <ul className="flex gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${
                    isActive ? "bg-contrast text-on-contrast" : "text-fg hover:bg-fg/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
