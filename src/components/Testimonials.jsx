import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Alexa Young, CA",
    quote:
      "Vinshika provided a sense of ease to work with you or use your products. Change the text and add your own.",
  },
  {
    id: 2,
    name: "Morgan James, NY",
    quote:
      "A great testimonial can boost your brand's image. Click to edit and add your own.",
  },
  {
    id: 3,
    name: "Lisa Driver, MI",
    quote:
      "Have customers review you and share what they had to say. Click to edit and add their testimonial.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  const next = () => setI((i + 1) % data.length);
  const prev = () => setI((i - 1 + data.length) % data.length);

  return (
    <section
      className="bg-[#f3ede7] py-16 sm:py-20 md:py-24 mb-1"
      id="testimonials"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4d2a2a] mb-10 sm:mb-12 text-center uppercase tracking-wide leading-tight pt-5">
        TESTIMONIALS
      </h3>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-gray-200 rounded-xl p-4 sm:p-8 md:p-10 shadow-lg flex items-center justify-between gap-3 sm:gap-6">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-[#4d2a2a] hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4d2a2a]"
            aria-label="Previous testimonial"
          >
            ◀
          </button>

          {/* Text */}
          <div className="flex-1 text-center px-2 sm:px-6">
            <p className="italic text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed">
              “{data[i].quote}”
            </p>
            <p className="mt-3 font-semibold text-[#4d2a2a] text-lg sm:text-xl md:text-2xl">
              — {data[i].name}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-[#4d2a2a] hover:text-white transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4d2a2a]"
            aria-label="Next testimonial"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
