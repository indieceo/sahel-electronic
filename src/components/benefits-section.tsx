"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaSolarPanel, FaLeaf } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  view: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOutExpo },
};
const fadeInLeft = {
  initial: { opacity: 0, x: -24 },
  view: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: easeOutExpo },
};
const viewport = { once: true, amount: 0.2 };

const benefits = [
  {
    icon: FaSolarPanel,
    title: "Énergie solaire & autonomie",
    description:
      "Moulins et équipements solaires pour transformer vos récoltes sans réseau ni carburant, adaptés aux zones rurales du Sahel.",
  },
  {
    icon: FaLeaf,
    title: "Transformation locale",
    description:
      "Valorisation des productions sur place : nos moulins multifonctions permettent aux petits producteurs de créer de la valeur localement.",
  },
];

/**
 * Partenaires : changez le nom et le chemin du logo pour chaque partenaire.
 * Logos dans /public/partners/ (ex: plan-international.png).
 */
const PARTNERS = [
  { name: "Plan International", logo: "/partners/plan-international.png" },
  { name: "Programme Alimentaire Mondial", logo: "/partners/wfp.png" },
  { name: "Acted", logo: "/partners/acted.png" },
  { name: "GIZ", logo: "/partners/giz.png" },
  { name: "Enabel", logo: "/partners/enabel.png" },
  { name: "BOAD", logo: "/partners/boad.png" },
  { name: "Médecins Sans Frontières", logo: "/partners/msf.png" },
  { name: "Banque Atlantique", logo: "/partners/banque-atlantique.png" },
  { name: "Capital Finance", logo: "/partners/capital-finance.png" },
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
          alt="Arrière-plan avantages"
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
          <motion.div
            className="relative order-2 lg:order-1 lg:col-span-6 lg:col-start-1"
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.view}
            viewport={viewport}
            transition={fadeInLeft.transition}
          >
            <div className="relative aspect-[575/668] w-full max-w-[575px]">
              {/* Figma: three parallel right-pointing chevrons, layered, behind upper-left of image */}
              <ChevronLayer />
              <div className="absolute inset-0 z-10 overflow-hidden rounded-[6px]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/30 via-transparent to-transparent lg:from-brand-teal/25" />
                <Image
                  src="/benefits-img.png"
                  alt="Équipement solaire ou transformation locale des produits agricoles au Sahel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 575px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right column - Content (Figma: Benzin headings, Helvetica body) */}
          <motion.div
            className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-6 lg:col-start-7 lg:pl-4"
            initial="initial"
            whileInView="view"
            viewport={viewport}
            variants={{
              initial: {},
              view: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            <motion.p
              className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-teal"
              variants={fadeInUp}
              transition={fadeInUp.transition}
            >
              Ce qui nous distingue
            </motion.p>
            <motion.h2
              className="font-heading mb-4 text-5xl font-normal leading-[67.2px] text-foreground"
              variants={fadeInUp}
              transition={fadeInUp.transition}
            >
              Des solutions solaires pensées pour le Sahel.
              <span className="ml-1 inline-block h-2 w-2 rounded-sm bg-brand-teal align-middle" aria-hidden />
            </motion.h2>
            <motion.p
              className="mb-8 text-xl font-normal leading-8 text-foreground"
              variants={fadeInUp}
              transition={fadeInUp.transition}
            >
              Sahel Électronique accompagne les petits producteurs et les
              communautés rurales au Niger et dans la région. Énergie solaire,
              transformation locale des récoltes et équipements durables sont au
              cœur de notre offre.
            </motion.p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex flex-col"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: i * 0.06 }}
                >
                  <div
                    className={cn(
                      "mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-brand-teal-foreground",
                    )}
                  >
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-heading mb-1 text-xl font-normal leading-7 text-brand-teal">
                    {item.title}
                  </h3>
                  <p className="text-xl font-normal leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partenaires – bandeau défilant (marquee) */}
        <motion.div
          className="mt-16 border-t border-brand-teal pt-12 md:mt-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <p className="mb-8 text-center text-2xl font-light leading-8 text-foreground">
            Reconnus et soutenus par des acteurs majeurs du développement au Sahel
          </p>
          <TooltipProvider>
            <div className="relative w-full overflow-hidden">
              <div
                className="flex w-max animate-marquee gap-12 pr-12"
                style={{ animationDuration: `${PARTNERS.length * 3}s` }}
                aria-hidden
              >
                {/* Duplicate list for seamless loop */}
                {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                  <Tooltip key={`${partner.name}-${index}`}>
                    <TooltipTrigger asChild>
                      <div
                        className={cn(
                          "flex flex-shrink-0 cursor-default items-center gap-4 transition-transform duration-200 ease-out",
                          "hover:scale-105"
                        )}
                      >
                        <div className="relative h-12 w-28">
                          <Image
                            src={partner.logo}
                            alt=""
                            fill
                            className="object-contain object-center"
                            sizes="112px"
                          />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={8}>
                      {partner.name}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  );
}
