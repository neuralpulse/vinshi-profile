import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import PortfolioGrid from "../components/PortfolioGrid";
import Testimonials from "../components/Testimonials";
import Brands from "../components/Brands";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <PortfolioGrid limit={6} />
      <Testimonials />
      <Brands />
    </div>
  );
}
