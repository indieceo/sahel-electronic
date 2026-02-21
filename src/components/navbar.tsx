"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const NAV_LINKS = [
  { label: "Nos services", href: "#services" },
  { label: "Nos produits", href: "#produits" },
  { label: "Actualités", href: "#actualites" },
] as const;

/** Sticky nav row – logo, links, CTA; stays fixed when user scrolls */
export function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between gap-6 bg-teal-950 px-4 py-4 md:px-8 md:py-5"
      aria-label="Navigation principale"
    >
      <Link
        href="/"
        className="font-heading shrink-0 text-2xl font-normal text-white md:text-3xl flex items-center gap-1"
      >
        {site.name}
        <span
          className="inline-block h-2 w-2 rounded-full bg-[#01CDA0]"
          aria-hidden
        />
      </Link>

      <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="group relative block px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white/90 outline-none transition-colors duration-200 hover:text-white "
              >
                <span className="relative z-10">{label}</span>
                <span
                  className="absolute inset-x-2 bottom-1.5 h-0.5 scale-x-0 rounded-full bg-[#01CDA0] transition-transform duration-200 group-hover:scale-x-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold uppercase text-white hover:bg-teal-600 md:px-5 md:py-2.5 shrink-0"
        >
          <Link href="#estimate" className="flex items-center gap-2">
            Obtenir un devis
            <ArrowUpRight className="size-5 shrink-0" aria-hidden />
          </Link>
        </Button>
      </div>
    </nav>
  );
}
