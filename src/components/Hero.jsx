import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mobileHero from "../assets/icec.jpg";
import desktopHero from "../assets/image.png";

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
        className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
      />

      {/* Desktop Image */}
      <img
        src={desktopHero}
        alt="Hero Background Desktop"
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight drop-shadow-lg
                     md:mt-[-5%] lg:mt-[-8%]"
          >
            <span className="block">Where Strategy</span>
            <span className="block">Meets</span>
            <span className="block">Creativity.</span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed py-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            Your creative journey starts here.
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
}
