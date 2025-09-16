import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Vinshika Young, CA",
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
    <section className="my-16 bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-[#4d2a2a] mb-8 text-center uppercase">
          TESTIMONIALS
        </h3>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={prev}
            className="text-3xl text-gray-600 hover:text-[#4d2a2a] transition-colors"
          >
            ◀
          </button>
          <div className="flex-1 text-center">
            <p className="italic text-gray-700 text-lg">“{data[i].quote}”</p>
            <p className="mt-4 font-semibold text-[#4d2a2a] text-xl">
              — {data[i].name}
            </p>
          </div>
          <button
            onClick={next}
            className="text-3xl text-gray-600 hover:text-[#4d2a2a] transition-colors"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
