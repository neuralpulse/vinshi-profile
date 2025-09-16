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
        className="w-full h-auto object-contain"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>{" "}
      {/* Slightly darker overlay for readability */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#f3ede7] leading-tight drop-shadow-lg">
            Where Strategy Meets Creativity.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#f3ede7] leading-relaxed drop-shadow-md">
            Your creative journey starts here.
          </p>
        </div>
      </div>
    </header>
  );
}
