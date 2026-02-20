"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const BANNER_TEXT =
  "Ready for an upgrade? Get a FREE estimate! Just give us a call and save up to 10% on your first installation.";

const HERO_HEADLINE =
  "Empowering Communities Through Innovative Electrical Solutions";

const HERO_DESCRIPTION =
  "At Company, we are dedicated to providing community-focused electrical solutions that make a difference. From EV chargers to new panels, LED lighting to heat pump water heaters, we have the expertise to meet your needs.";

export function HeroSection() {
  return (
    <header className="relative w-full">
      {/* Top yellow banner – full width, centered text (Figma) */}
      <div
        className="w-full py-3 text-center text-sm font-normal text-black md:py-3.5 md:text-base"
        style={{ backgroundColor: "#FDCB01" }}
      >
        <p className="mx-auto max-w-4xl px-4">{BANNER_TEXT}</p>
      </div>

      {/* Hero area: nav + background image + overlay + content */}
      <div className="relative min-h-[85vh] w-full overflow-hidden md:min-h-[90vh]">
        {/* Background image – aerial solar panels on building */}
        <Image
          src="https://images.unsplash.com/photo-1589201529153-5297335c1684?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Aerial view of building with solar panels"
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
            Solutions.
            <span
              className="inline-block h-2 w-2 rounded-full bg-[#01CDA0]"
              aria-hidden
            />
          </Link>
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="rounded-md border border-white bg-black px-4 py-2 text-sm font-medium uppercase text-white hover:bg-black/90 md:px-5 md:py-2.5"
            >
              <Link href="#estimate">Get free estimate</Link>
            </Button>
            <Button
              variant="outline"
              className="rounded-md border border-black bg-white px-4 py-2 text-sm font-medium uppercase text-black hover:bg-white/90 md:px-5 md:py-2.5"
            >
              <Menu className="mr-1.5 size-5" aria-hidden />
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
