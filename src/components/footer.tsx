"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "@/lib/site";

const COMPANY_HEADING = "Transformation agricole au dernier kilomètre";
const COMPANY_DESCRIPTION =
  "Sahel Électronique aide les petits producteurs ruraux du Sahel à transformer localement leurs produits agricoles grâce à des moulins solaires multifonctions, recyclables en fin de vie. Transport, installation, formation, maintenance et assistance crédit.";

const servicesLinks = [
  { label: "Transport", href: "#services" },
  { label: "Installation", href: "#services" },
  { label: "Formation", href: "#services" },
  { label: "Maintenance", href: "#services" },
  { label: "Assistance crédit", href: "#services" },
];

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Nos produits", href: "/#produits" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Facebook", href: site.social.facebook, icon: Facebook },
  { label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, icon: Instagram },
];

/** Figma: text-Text-alternate, text-2xl, font-normal, font-Benzin, leading-8 */
const sectionTitleClass =
  "font-heading text-2xl font-normal leading-8 text-white";
/** Figma: text-Background-color-primary, text-xl, font-normal, font-Helvetica, leading-8 */
const bodyClass = "font-sans text-xl font-normal leading-8 text-white/95";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background: aerial/solar image + dark overlay */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1589201529153-5297335c1684?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-teal-950/85 via-teal-900/80 to-black/90"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-10">
          {/* Brand above all content */}
          <div>
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-1 text-2xl font-normal text-white md:text-3xl"
            >
              {site.name}
              <span
                className="inline-block h-2 w-2 rounded-sm bg-brand-teal"
                aria-hidden
              />
            </Link>
          </div>

          {/* Two major blocks: left (tagline + description + buttons), right (sections + items) */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-10">
            {/* Left: tagline, description, CTAs — space above maintained by gap from brand */}
            <div className="lg:col-span-5">
              <h2 className={sectionTitleClass}>{COMPANY_HEADING}</h2>
              <p className={`mt-8 max-w-lg ${bodyClass}`}>
                {COMPANY_DESCRIPTION}
              </p>
            </div>

            {/* Right: menu sections with titles and items — tighter spacing under titles */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-7">
              <div>
                <h3 className={`${sectionTitleClass} uppercase`}>Nos services</h3>
                <ul className="mt-8 flex flex-col gap-1.5">
                  {servicesLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`${bodyClass} relative inline-block transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-teal after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`${sectionTitleClass} uppercase`}>
                  Liens rapides
                </h3>
                <ul className="mt-8 flex flex-col gap-1.5">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className={`${bodyClass} relative inline-block transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-teal after:transition-[width] after:duration-300 after:content-[''] hover:after:w-full`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`${sectionTitleClass} uppercase`}>Réseaux sociaux</h3>
                <div className="mt-8 flex gap-3">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:border-white hover:bg-white/10"
                      aria-label={item.label}
                    >
                      <item.icon className="size-5" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar – address, mail, WhatsApp (like hero yellow bar) */}
      <div className="relative z-10 w-full bg-teal-950/80 py-3 text-sm font-normal text-white md:py-3.5 md:text-base">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 md:justify-between md:gap-x-8 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <MapPin className="size-4 shrink-0" aria-hidden />
              <span className="truncate">{site.address}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.mail}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Mail className="size-4 shrink-0" aria-hidden />
              <span>{site.mail}</span>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <FaWhatsapp className="size-4 shrink-0" aria-hidden />
              <span>{site.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
