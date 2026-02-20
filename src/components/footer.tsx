"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPANY_HEADING = "Discover more of our Electrical Services";
const COMPANY_DESCRIPTION =
  "At Elexo, we are dedicated to providing community-focused electrical solutions that make a difference. From EV chargers to new panels, LED lighting to heat pump water heaters, we have the expertise to meet your needs.";

const servicesLinks = [
  { label: "Electrical Services", href: "#electrical-services" },
  { label: "EV Charger Installation Services", href: "#ev-chargers" },
  { label: "Energy-Efficient LED Lighting Solution", href: "#led-lighting" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#electrical-services" },
  { label: "Contact Us", href: "/#contact" },
];

const socials = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
];

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
        <div className="absolute inset-0 bg-black/75" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Brand + CTA */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-1 text-2xl font-normal text-white md:text-3xl"
            >
              Solutions
              <span
                className="inline-block h-2 w-2 rounded-sm bg-brand-teal"
                aria-hidden
              />
            </Link>
            <h2 className="font-heading mt-6 text-2xl font-normal leading-tight text-white md:text-3xl">
              {COMPANY_HEADING}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
              {COMPANY_DESCRIPTION}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white hover:bg-black/90"
              >
                <Link href="#contact">Contact us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md border border-white bg-transparent px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#electrical-services">Learn more</Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quicklinks */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quicklinks
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-white/90 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
              Socials
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white/10 hover:border-white"
                  aria-label={item.label}
                >
                  <item.icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
