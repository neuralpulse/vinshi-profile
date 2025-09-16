import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/image.png";

export default function Hero({ sectionRef }) {
  const nav = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      const updateHeight = () => {
        setNavbarHeight(navbar.offsetHeight);
      };
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
      className="relative w-full overflow-hidden"
      style={{ marginTop: `${navbarHeight}px` }}
      id="hero"
      ref={sectionRef}
    >
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-auto object-contain brightness-110 contrast-110 opacity-85"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      <div
        className="absolute top-1/3 left-0 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 md:top-1/5 md:items-center md:justify-center"
        style={{ transform: "translateY(-50%)" }}
      >
        <div className="max-w-5xl mx-auto text-[#000000]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-lg">
            Where Strategy <span className="block">Meets</span>
            <span className="block">Creativity.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed py-5">
            Your creative journey starts here.
          </p>
        </div>
      </div>
    </header>
  );
}
