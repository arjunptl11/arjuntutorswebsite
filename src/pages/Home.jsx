import HeroSection from "../components/home/HeroSection";
import OverviewSection from "../components/home/OverviewSection";
import ServicesPreview from "../components/home/ServicesPreview";
import TeamPreview from "../components/home/TeamPreview";
import AvailabilityCTA from "../components/home/AvailabilityCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ServicesPreview />
      <TeamPreview />
      <AvailabilityCTA />
    </>
  );
}