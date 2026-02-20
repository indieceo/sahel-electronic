"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Company's services have been a game-changer for our company. Their expertise in electrification measures has helped us save on energy costs and reduce our environmental impact.",
    author: "John Doe",
    title: "System Engineer",
    logo: "Webflow",
  },
  {
    quote:
      "Professional installation and clear communication from start to finish. Our solar array and EV chargers are performing beyond expectations.",
    author: "Sarah Chen",
    title: "Operations Director",
    logo: "Relume",
  },
  {
    quote:
      "We switched to their LED lighting and heat pump solutions. The ROI was visible within the first year. Highly recommend for any business.",
    author: "Marcus Williams",
    title: "Facilities Manager",
    logo: "Logoipsum",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section className="relative flex w-full min-h-[32rem] overflow-hidden py-16 md:min-h-[36rem] md:py-24">
      {/* Faded background: light image + subtle grid (solar-panel feel) */}
      <div className="absolute inset-0 bg-muted/40" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/testimonial-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          aria-hidden
          priority={false}
        />
      </div>

      <div className="relative z-10 flex w-full flex-1 flex-col justify-center">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
          {/* Section label – teal, uppercase, letter spacing */}
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-brand-teal">
            Testimonials
          </p>

          {/* Quote + author + nav – fixed-height content block, chevrons centered with it */}
          <div className="flex flex-col items-center">
            <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-8 md:gap-12">
              {/* Left chevron – vertically centered with content block */}
              <button
                type="button"
                onClick={goPrev}
                className="flex shrink-0 items-center justify-center rounded-full border border-brand-teal/30 bg-foreground p-3 text-brand-teal transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:size-14 md:p-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-6 md:size-7" aria-hidden />
              </button>

              {/* Testimonial content block – min-height so section doesn't shrink; chevrons align to its center */}
              <div className="flex min-h-[14rem] min-w-0 flex-col items-center justify-center py-4 text-center md:min-h-[16rem]">
                <blockquote className="relative">
                  <p
                    className={cn(
                      "font-heading text-2xl font-normal leading-snug text-foreground md:text-3xl md:leading-snug",
                      "max-w-2xl",
                    )}
                  >
                    {current.quote}
                  </p>
                </blockquote>
                <p className="mt-6 text-base font-normal text-muted-foreground md:text-lg">
                  {current.author} | {current.title}
                </p>
                <p className="mt-3 text-sm font-semibold tracking-tight text-foreground/80">
                  {current.logo}
                </p>
              </div>

              {/* Right chevron – vertically centered with content block */}
              <button
                type="button"
                onClick={goNext}
                className="flex shrink-0 items-center justify-center rounded-full border border-brand-teal/30 bg-foreground p-3 text-brand-teal transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:size-14 md:p-0"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-6 md:size-7" aria-hidden />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial index">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "size-2 rounded-full transition-colors",
                  i === currentIndex ? "bg-brand-teal" : "bg-foreground/30 hover:bg-foreground/50",
                )}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
