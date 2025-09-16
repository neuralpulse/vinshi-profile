import React from "react";
import brandLogos from "../assets/logo.png";

export default function Brands() {
  return (
    <div className=" bg-[#f3ede7] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-1">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4d2a2a] uppercase tracking-wide leading-tight pt-5">
          COLLABORATED BRANDS
        </h3>
        <img
          src={brandLogos}
          alt="Collaborated Brands Logos"
          className="w-full h-auto object-contain mx-auto p-2 sm:p-4 md:p-6 lg:p-8"
          style={{
            maxHeight: "70vh",
            minHeight: "200px",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
