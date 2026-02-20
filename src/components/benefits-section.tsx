"use client";

import Image from "next/image";
import { FaLeaf, FaBolt } from "react-icons/fa";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: FaLeaf,
    title: "Sustainability",
    description:
      "We prioritize sustainable solutions that contribute to a greener future.",
  },
  {
    icon: FaBolt,
    title: "Energy Savings",
    description:
      "Our services are designed to help you save energy and reduce your carbon footprint.",
  },
];

const partnerLogos = [
  { name: "Logoipsum", id: 1 },
  { name: "Partner", id: 2 },
  { name: "Webflow", id: 3 },
  { name: "Relume", id: 4 },
  { name: "Partner", id: 5 },
  { name: "Logoipsum", id: 6 },
];

const CHEVRON_PATH =
  "M84.5445 300H0L111.269 150.015L0 0H84.5445L195.821 150.015L84.5445 300Z";

/** Two chevrons side by side at top-left, behind the image */
function ChevronLayer() {
  const size = "min(38vw, 196px)";
  return (
    <div
      className="absolute left-[-10%] top-[-10%] z-0 flex flex-row items-start gap-0"
      aria-hidden
    >
      <svg
        viewBox="0 0 196 300"
        fill="none"
        className="h-auto shrink-0"
        style={{ width: size }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={CHEVRON_PATH} fill="#01CDA0" />
      </svg>
      <svg
        viewBox="0 0 196 300"
        fill="none"
        className="h-auto shrink-0"
        style={{ width: size }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={CHEVRON_PATH} fill="#01CDA0" />
      </svg>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section className="relative w-full min-h-[32rem] overflow-hidden py-16 md:min-h-[36rem] md:py-24">
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/benefits-bg.png"
          alt="Benefits background"
          fill
          className="object-cover opacity-8"
          sizes="100vw"
          aria-hidden
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: image left, content right */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12 lg:gap-8">
          {/* Left column - Layered chevrons behind upper-left of image (Figma: 575×668, radius 6) */}
          <div className="relative order-2 lg:order-1 lg:col-span-6 lg:col-start-1">
            <div className="relative aspect-[575/668] w-full max-w-[575px]">
              {/* Figma: three parallel right-pointing chevrons, layered, behind upper-left of image */}
              <ChevronLayer />
              <div className="absolute inset-0 z-10 overflow-hidden rounded-[6px]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/30 via-transparent to-transparent lg:from-brand-teal/25" />
                <Image
                  src="/benefits-img.png"
                  alt="Electrician at work on electrical outlets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 575px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right column - Content (Figma: Benzin headings, Helvetica body) */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-6 lg:col-start-7 lg:pl-4">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal">
              Our Benefits
            </p>
            {/* text-Dark, text-5xl, font-normal, font-Benzin, leading-[67.20px] */}
            <h2 className="font-heading mb-4 text-5xl font-normal leading-[67.2px] text-foreground">
              Discover the Many Benefits of Company Electrical Services.
              <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-brand-teal align-middle" aria-hidden />
            </h2>
            {/* text-Dark, text-xl, font-normal, font-Helvetica, leading-8 */}
            <p className="mb-8 text-xl font-normal leading-8 text-foreground">
              At Company, we offer a range of services that not only meet your
              electrical needs but also provide numerous benefits. From energy
              savings to advanced technology, we have you covered.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <div
                    className={cn(
                      "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-brand-teal-foreground",
                    )}
                  >
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  {/* text-Mint, text-xl, font-normal, font-Benzin, leading-7 */}
                  <h3 className="font-heading mb-1 text-xl font-normal leading-7 text-brand-teal">
                    {item.title}
                  </h3>
                  {/* text-Text-primary, text-xl, font-normal, font-Helvetica, leading-8 */}
                  <p className="text-xl font-normal leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partner logos strip: text-Dark, text-2xl, font-light, font-Helvetica, leading-8 */}
        <div className="mt-16 border-t border-brand-teal pt-12 md:mt-20">
          <p className="mb-8 text-center text-2xl font-light leading-8 text-foreground">
            Trusted by industry leaders for exceptional electrical services
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex h-8 items-center text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              >
                <span className="text-lg font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
