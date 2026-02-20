"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  MapPin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const HERO_HEADLINE =
  "Révolutionner la mécanisation agricole en Afrique par l'énergie solaire";

const HERO_DESCRIPTION =
  "Sahel Électronique est une entreprise nigérienne qui aide les petits producteurs ruraux du Sahel à transformer localement leurs produits agricoles grâce à des moulins solaires multifonctions, recyclables en fin de vie.";



export function HeroSection() {
  return (
    <header className="relative w-full">
      {/* Top bar – address, contact, social */}
      <div
        className="w-full py-3 text-sm font-normal text-black md:py-3.5 md:text-base"
        style={{ backgroundColor: "#FDCB01" }}
      >
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-8 md:justify-between md:gap-x-8">
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

      {/* Hero area: nav + background image + overlay + content */}
      <div className="relative min-h-[92vh] w-full overflow-hidden md:min-h-[95vh]">
        {/* Background image – aerial solar panels on building */}
        <Image
          src="https://images.unsplash.com/photo-1589201529153-5297335c1684?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Vue aérienne de bâtiment avec panneaux solaires"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark teal/green overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden
        />

        {/* Nav bar – over overlay */}
        <nav className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-5 md:px-8 md:py-6">
          <Link
            href="/"
            className="font-heading flex items-center gap-1 text-2xl font-normal text-white md:text-3xl"
          >
            {site.name}
            <span
              className="inline-block h-2 w-2 rounded-full bg-[#01CDA0]"
              aria-hidden
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              asChild
              className="rounded-full bg-teal-900 px-4 py-2 text-sm font-semibold uppercase text-white hover:bg-teal-600 md:px-5 md:py-2.5"
            >
              <Link href="#estimate" className="flex items-center gap-2">
                Obtenir un devis
                <ArrowUpRight className="size-5 shrink-0" aria-hidden />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold uppercase text-white transition-colors md:px-5"
            >
              <Menu className="size-5 shrink-0" aria-hidden />
              Menu
            </Button>
          </div>
        </nav>

        {/* Hero content – left-aligned over overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32 lg:pb-32">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <h1 className="font-heading max-w-4xl text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              {HERO_HEADLINE}
              <span
                className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#01CDA0] align-middle md:h-3 md:w-3"
                aria-hidden
              />
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-normal leading-8 text-white/95 md:text-xl">
              {HERO_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
