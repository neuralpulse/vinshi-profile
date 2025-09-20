import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mobileHero from "../assets/mobice.jpg";
import desktopHero from "../assets/lapice.jpg";

export default function Hero({ sectionRef }) {
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
      <img
        src={mobileHero}
        alt="Hero Background Mobile"
        loading="eager"
        className="mobile-hero absolute inset-0 w-full h-full object-cover hidden "
        style={{ objectPosition: "50% 20%" }}
      />

      <img
        src={desktopHero}
        alt="Hero Background Desktop"
        loading="eager"
        className="desktop-hero absolute inset-0 w-full h-full object-cover block "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b  from-black/10 via-black/15 to-black/30"></div>

      {/* Text Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="max-w-5xl mx-auto text-[#ffffff]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h1
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 
             font-bold leading-tight drop-shadow-lg
             transform -translate-y-12 sm:-translate-y-16 md:-translate-y-10"
          >
            <span className="block">Where Strategy</span>
            <span className="block">Meets</span>
            <span className="block">Creativity</span>
          </h1>

          {/* Subheading */}
          <motion.p
            className="text-2xl font-medium sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-relaxed py-5
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
