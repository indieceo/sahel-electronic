"use client";

import Image from "next/image";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
const stagger = { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } };

const HERO_HEADLINE =
  "Révolutionner la mécanisation agricole en Afrique par l'énergie solaire";

const HERO_DESCRIPTION =
  "Sahel Électronique est une entreprise nigérienne qui aide les petits producteurs ruraux du Sahel à transformer localement leurs produits agricoles grâce à des moulins solaires multifonctions, recyclables en fin de vie.";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden md:min-h-[90vh]" aria-label="Hero">
      {/* Background image – subtle Ken Burns–style motion */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.08] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1589201529153-5297335c1684?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Vue aérienne de bâtiment avec panneaux solaires"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      </div>
      {/* Teal-to-black gradient overlay for depth and readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-900/75 to-black/85"
        aria-hidden
      />

      {/* Hero content – left-aligned over overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 pt-16 md:justify-center md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
          <motion.div
            className="mx-auto w-full max-w-7xl px-4 md:px-8"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.h1
              className="font-heading max-w-4xl text-4xl font-normal leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
              variants={fadeInUp}
            >
              {HERO_HEADLINE}
              <span
                className="ml-1 inline-block h-2.5 w-2.5 rounded-full bg-[#01CDA0] align-middle md:h-3 md:w-3"
                aria-hidden
              />
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-lg font-normal leading-8 text-white/95 md:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              variants={fadeInUp}
            >
              {HERO_DESCRIPTION}
            </motion.p>
          </motion.div>
      </div>
    </section>
  );
}
