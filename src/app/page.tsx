import { HeroSection } from "@/components/hero-section";
import { ElectricalServicesSection } from "@/components/electrical-services-section";
import { ProductsSection } from "@/components/products-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahel Électronique",
  description: "Sahel Électronique",
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitsSection />
      <ElectricalServicesSection />
      <ProductsSection />
      <TestimonialSection />
    </div>
  );
}
