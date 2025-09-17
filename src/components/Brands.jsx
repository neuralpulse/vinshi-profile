import React from "react";

const brandLogos = [
  "https://static.wixstatic.com/media/f381e2_6c71ba53291c47629152dab1d5fa6a36~mv2.png/v1/crop/x_26,y_0,w_189,h_189/fill/w_140,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%20from%202025-08-06%2006-16-41.png",
  "https://static.wixstatic.com/media/f381e2_ec9c790ba7334b59be6ab115646fd423~mv2.png/v1/fill/w_238,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%20from%202025-08-06%2006-24-46.png",
  "https://static.wixstatic.com/media/f381e2_1a4d1b064a4c402e8eaf4f58fd143992~mv2.png/v1/fill/w_260,h_84,al_c,lg_1,q_85,enc_avif,quality_auto/Screenshot%20from%202025-08-06%2006-26-21.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  // 👉 add all your brand image links here
];

export default function Brands() {
  return (
    <div className="bg-[#f3ede7] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d2a2a] uppercase tracking-wide leading-tight pt-5">
          COLLABORATED BRANDS
        </h3>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 items-center justify-center">
        {brandLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-16 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
