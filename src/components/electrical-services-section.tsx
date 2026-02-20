"use client";

import Image from "next/image";
import Link from "next/link";
import { Plug, BatteryCharging, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const SECTION_HEADING = "Discover Our Electrical Services Today";
const SECTION_SUBTITLE =
  "Experience top-quality electrical solutions for your needs";

const CARD_DESCRIPTION =
  "From EV charger installation to LED lighting solutions and Heat Pump Water Heater installation";

const services = [
  {
    icon: Plug,
    title: "Discover Our Range of Electrical Services",
    href: "#electrical-services",
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation Services",
    href: "#ev-chargers",
  },
  {
    icon: Leaf,
    title: "Energy-Efficient LED Lighting Solution",
    href: "#led-lighting",
  },
];

export function ElectricalServicesSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background image – aerial solar / industrial */}
      <Image
        src="/services-bg.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading block – constrained width, left-aligned (Figma) */}
        <div className="mb-10 max-w-2xl md:mb-12">
          <h2 className="font-heading text-4xl font-normal leading-tight text-white md:text-5xl">
            {SECTION_HEADING}
          </h2>
          <p className="mt-3 text-lg font-normal text-white/90 md:text-xl">
            {SECTION_SUBTITLE}
          </p>
        </div>

        {/* Service cards – 3 columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl bg-[#2D3748]/75 backdrop-blur-sm p-6 shadow-lg md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center text-white">
                <item.icon className="h-8 w-8" aria-hidden />
              </div>
              <h3 className="font-heading text-xl font-normal leading-snug text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#CBD5E0]">
                {CARD_DESCRIPTION}
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-lg border border-white bg-transparent px-4 py-2 text-sm font-medium uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href={item.href}>Learn more</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
