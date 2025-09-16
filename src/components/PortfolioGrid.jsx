import React from "react";

const projects = [
  {
    id: 1,
    title: "Social Media Marketing",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Content Writing",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Performance Marketing",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 4,
    title: "Email Marketing",
    image: "https://via.placeholder.com/400x300",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="w-full bg-[#f3ede7] py-16">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b3d] mb-12">
        PORTFOLIO
      </h3>

      {/* White container */}
      <div className="max-w-7xl mx-auto bg-white shadow-md px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative h-64 overflow-hidden rounded-md"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>

              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
