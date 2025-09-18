import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mobileHero from "../assets/mobice.jpg";
import desktopHero from "../assets/lapice.jpg";

export default function Hero({ sectionRef }) {
  const nav = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const updateHeight = () => setNavbarHeight(navbar.offsetHeight);
      updateHeight();
      window.addEventListener("resize", updateHeight);
      window.addEventListener("scroll", updateHeight);
      return () => {
        window.removeEventListener("resize", updateHeight);
        window.removeEventListener("scroll", updateHeight);
      };
    }
  }, []);

  return (
    <header
      className="relative w-full h-screen overflow-hidden"
      style={{ marginTop: `${navbarHeight}px` }}
      id="hero"
      ref={sectionRef}
    >
      {/* Mobile Image */}
      <img
        src={mobileHero}
        alt="Hero Background Mobile"
        className="mobile-hero absolute inset-0 w-full h-full object-cover hidden"
        style={{ objectPosition: "50% 20%" }}
      />

      <img
        src={desktopHero}
        alt="Hero Background Desktop"
        className="desktop-hero absolute inset-0 w-full h-full object-cover block brightness-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  from-white/0 via-white/2 to-white/5"></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="max-w-5xl mx-auto text-[#4d2a2a]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
             font-extrabold leading-tight drop-shadow-lg
             transform -translate-y-12 sm:-translate-y-16 md:-translate-y-10"
          >
            <span className="block">Where Strategy</span>
            <span className="block">Meets</span>
            <span className="block">Creativity.</span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-2xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed py-5
                       mt-65 sm:mt-6 md:mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Your creative journey starts here
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
