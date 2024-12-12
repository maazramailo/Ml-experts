import HeroSection from "./HeroSection";
import FocusOnResearch from "./FocusOnResearch";
import Feature from "./Feature";
import Trusted from "./Trusted";
import CaseStudy from "./CaseStudy";

export default function AcadamicLab() {
  return (
    <section className="flex   flex-col items-center gap-4 justify-center ">
      <HeroSection />
      <FocusOnResearch />
      <Feature />
      <Trusted />
      <CaseStudy />
    </section>
  );
}
