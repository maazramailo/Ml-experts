"use client";
import HeroSection from "@/components/HomePage/HeroSection";
export const metadata = {
  title: "Leading AI ML Consulting | Expert Machine Learning Solutions",
  description: "Transform your research and innovation with cutting-edge AI and ML solutions. As a premier AI ML consulting company, our machine learning experts specialize in deep tech, advanced algorithms, and scalable AI solutions for academia and industry. Contact us today!",
};
export default function Home() {
  
  return (
    <div className="flex   flex-col items-center gap-4 justify-center ">
      <HeroSection />
    </div>
  );
}
