"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaSolarPanel, FaBolt, FaShieldAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const SECTION_HEADING = "Nos produits";
const SECTION_SUBTITLE =
  "Des moulins solaires multifonctions en acier inoxydable, recyclables en fin de vie, pour la transformation locale des céréales et oléagineux au dernier kilomètre.";
const SECTION_CTA = "Nous contacter";
const CTA_URL = "#contact";

const products = [
  {
    id: "ms50",
    name: "MS50",
    title: "Moulin solaire multifonction céréales et légumes",
    description:
      "Moulin solaire de céréales et légumes en acier inoxydable, recyclable en fin de vie. Une partie dédiée à l'extraction d'huile de légumes pour diversifier les revenus des producteurs.",
    image: "/products/ms50.png",
    specs: [
      "Capacité : 50 kg/h (broyage) · 5 L/h (huile)",
      "Moteur : 3 CV, courant continu",
      "Kit solaire : 5× panneaux 580 W, convertisseur hybride 3 KVA, batterie lithium 5 kWh",
    ],
    warranty: "Garantie 2 ans",
  },
];

function ProductSpotlight({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div className="relative min-h-[320px] overflow-hidden rounded-xl bg-muted sm:min-h-[400px]">
        {!imageError ? (
          <Image
            src={product.image}
            alt={`${product.name} – ${product.title}`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-muted text-muted-foreground sm:min-h-[400px]">
            <FaSolarPanel className="h-20 w-20" aria-hidden />
          </div>
        )}
        <span
          className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          aria-label={`Garantie : ${product.warranty}`}
        >
          <FaShieldAlt className="h-4 w-4 text-[#01CDA0]" />
          {product.warranty}
        </span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-heading text-2xl font-semibold text-brand-teal md:text-3xl">
          {product.name}
        </span>
        <h3 className="font-heading mt-2 text-xl font-normal leading-snug text-foreground md:text-2xl">
          {product.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {product.description}
        </p>
        <ul
          className="mt-6 flex flex-col gap-2"
          aria-label="Caractéristiques techniques"
        >
          {product.specs.map((spec, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
            >
              <FaBolt
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal"
                aria-hidden
              />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section
      id="produits"
      className="relative w-full overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/benefits-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
          aria-hidden
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl md:mb-12">
          <h2 className="font-heading text-4xl font-normal leading-tight text-foreground md:text-5xl">
            {SECTION_HEADING}
          </h2>
          <p className="mt-3 text-lg font-normal text-muted-foreground md:text-xl">
            {SECTION_SUBTITLE}
          </p>
          <Button
            asChild
            className="mt-6 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold uppercase text-white hover:bg-teal-600 md:px-6 md:py-3"
          >
            <Link href={CTA_URL} className="inline-flex items-center gap-2">
              {SECTION_CTA}
              <ArrowUpRight className="size-5 shrink-0" aria-hidden />
            </Link>
          </Button>
        </div>

        {products.map((product) => (
          <ProductSpotlight key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
