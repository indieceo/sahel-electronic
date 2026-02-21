"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaTruck,
  FaWrench,
  FaChalkboardTeacher,
  FaCog,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const SECTION_HEADING = "Nos services";
const SECTION_SUBTITLE =
  "De la livraison à la formation et au financement, nous vous accompagnons à chaque étape pour une transformation agricole durable au dernier kilomètre.";
const SECTION_CTA = "Nous contacter";

const services = [
  {
    icon: FaTruck,
    title: "Transport",
    description:
      "Livraison des moulins solaires sur le site des bénéficiaires, partout au Niger et dans la région du Sahel. Nous assurons un acheminement sécurisé et adapté à vos besoins.",
    href: "#services",
  },
  {
    icon: FaWrench,
    title: "Installation",
    description:
      "Mise en place et mise en service des moulins multifonctions sur site. Nos équipes garantissent une installation conforme et opérationnelle.",
    href: "#services",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Formation",
    description:
      "Formation des bénéficiaires à l'utilisation et à l'entretien des moulins après installation, pour une autonomie durable des producteurs.",
    href: "#services",
  },
  {
    icon: FaCog,
    title: "Maintenance",
    description:
      "Suivi technique et maintenance des équipements pour assurer leur bon fonctionnement et prolonger leur durée de vie.",
    href: "#services",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Assistance crédit",
    description:
      "Accompagnement pour l'acquisition des moulins via des solutions de financement adaptées aux petits producteurs ruraux.",
    href: "#services",
  },
];

export function ElectricalServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-6 border-white text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="#contact">{SECTION_CTA}</Link>
          </Button>
        </div>

        {/* Service cards – 3 columns */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-xl bg-[#2D3748]/75 backdrop-blur-sm p-6 shadow-lg md:p-8"
            >
              <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                <item.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-heading text-xl font-normal leading-snug text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-[#CBD5E0]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
