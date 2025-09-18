import React from "react";

const allImages = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const brandLogos = Object.entries(allImages)
  .map(([path, module]) => {
    const fileName = path.split("/").pop();
    const base = fileName.split(".")[0];
    const num = parseInt(base, 10);
    if (!isNaN(num)) {
      return { num, img: module.default };
    }
    return null;
  })
  .filter(Boolean)
  .sort((a, b) => a.num - b.num)
  .map(({ img }) => img);

export default function Brands() {
  return (
    <div className="bg-[#f3ede7] max-w-full mx-auto px-2 sm:px-4 lg:px-8 py-6">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#4d2a2a] uppercase tracking-wide leading-tight">
          COLLABORATED BRANDS
        </h3>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-6">
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-20 sm:h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-[60%] max-w-[80%] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
