import { HeroSection } from "@/components/hero-section";
import { ElectricalServicesSection } from "@/components/electrical-services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahel Electro",
  description: "Sahel Electro",
};

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ElectricalServicesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
