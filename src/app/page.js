
"use client"
import NewHeroSection from "@/components/HomePage/NewHeroSection";
import AboutUs from "@/components/HomePage/AboutUs";
import Experts from "@/components/Experts";
import DeepTech from "@/components/DeepTech";
import AdvancedProject from "@/components/AdvancedProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testamonial from "@/components/Testimonial";
import ActionSection from "@/components/ActionSection";

export default function NewHome() {
  return (
    <div className="flex   flex-col items-center gap-4 justify-center">

      <NewHeroSection />
      <AboutUs />
      <Experts />
      <DeepTech />
      <AdvancedProject />
      <WhyChooseUs />
      <Testamonial />
      <ActionSection />
      {/* <Feature /> */}


    </div>
  );
}
