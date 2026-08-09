import HeroSection from "./home/_components/hero-section.tsx";
import ServicesSection from "./home/_components/services-section.tsx";
import WorkSection from "./home/_components/work-section.tsx";
import ProcessSection from "./home/_components/process-section.tsx";
import WhySection from "./home/_components/why-section.tsx";
import TechSection from "./home/_components/tech-section.tsx";
import CtaSection from "./home/_components/cta-section.tsx";

export default function Index() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <WhySection />
      <TechSection />
      <CtaSection />
    </main>
  );
}
