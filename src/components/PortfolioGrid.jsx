import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Social Media Marketing",
    image:
      "https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg",
    carouselContent: [
      {
        image:
          "https://www.secondrecipe.com/wp-content/uploads/2021/03/holi-colors.jpg",
        text: "B2B content strategy | Meghana colors",
        body: "Crafted a social media content calendar with focus on B2B branding and engagement.",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/012/660/862/non_2x/linkedin-logo-on-transparent-isolated-background-free-vector.jpg",
        text: "LinkedIn content manager | Grishma Sanghavi",
        body: "Developed engaging posts and campaigns to maximize reach on LinkedIn.",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60l1jocdA1lTIhyzyeXEXQa1UUTOCQ1RmDg&s",
        text: "America and beyond",
        body: "Handled marketing campaigns targeted at international audiences.",
      },
    ],
  },
  {
    id: 2,
    title: "Content Writing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnI4wvBPuAIgfusVdnbobAXavIHseze0moPg&s",
    carouselContent: [
      {
        image: "https://via.placeholder.com/400x300?text=Trend",
        text: "Trend-led insights | Plastic Industry",
        body: "Wrote industry insights backed by research and market trends.",
      },
      {
        image: "https://via.placeholder.com/400x300?text=ZeroSwap",
        text: "Zero Swap Website and newsletter content | Script writing samples",
        body: "Created compelling copy for website and newsletters to increase user retention.",
      },
    ],
  },
  {
    id: 3,
    title: "Performance Marketing",
    image:
      "https://www.taboola.com/wp-content/uploads-neo/2025/01/performance_marketing-scaled.jpg",
    carouselContent: [
      {
        image: "https://via.placeholder.com/400x300?text=Strategy",
        text: "B2B content strategy | Meghana colors",
        body: "Implemented high-performing ad strategies with measurable ROI.",
      },
      {
        image: "https://via.placeholder.com/400x300?text=LinkedIn",
        text: "LinkedIn content manager | Grishma Sanghavi",
        body: "Managed ad campaigns to optimize clicks and conversions.",
      },
      {
        image: "https://via.placeholder.com/400x300?text=Global",
        text: "America and beyond",
        body: "Designed global paid media strategies for international campaigns.",
      },
    ],
  },
  {
    id: 4,
    title: "Email Marketing",
    image:
      "https://blog.blendee.com/wp-content/uploads/2024/11/email-marketing.jpg",
    carouselContent: [
      {
        image: "https://via.placeholder.com/400x300?text=Email1",
        text: "B2B content strategy | Meghana colors",
        body: "Created targeted drip campaigns to nurture leads.",
      },
      {
        image: "https://via.placeholder.com/400x300?text=Email2",
        text: "LinkedIn content manager | Grishma Sanghavi",
        body: "Personalized email sequences that improved open rates by 40%.",
      },
      {
        image: "https://via.placeholder.com/400x300?text=Email3",
        text: "America and beyond",
        body: "Scaled campaigns for international subscriber base.",
      },
    ],
  },
];

export default function PortfolioGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === selectedProject.carouselContent.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.carouselContent.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-[#f3ede7] py-16 mb-1" id="portfolio">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b3d] mb-12">
        PORTFOLIO
      </h3>

      {/* Grid container */}
      <div className="max-w-7xl mx-auto bg-white shadow-md px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative h-64 overflow-hidden rounded-md cursor-pointer"
              onClick={() => openModal(p)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>

              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            {/* Carousel Content */}
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {selectedProject.carouselContent.map((content, index) => (
                    <div key={index} className="w-full flex-shrink-0 p-8">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Image Section */}
                        <div className="lg:w-1/2 w-full">
                          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                            <img
                              src={content.image}
                              alt={content.text}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Text Content Section */}
                        <div className="lg:w-1/2 w-full space-y-4">
                          <h4 className="text-2xl font-bold text-gray-800 leading-tight">
                            {content.text}
                          </h4>
                          <p className="text-gray-600 text-lg leading-relaxed">
                            {content.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              {selectedProject.carouselContent.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
                    onClick={prevSlide}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors z-10"
                    onClick={nextSlide}
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Dots Indicator */}
              {selectedProject.carouselContent.length > 1 && (
                <div className="flex justify-center space-x-2 py-4">
                  {selectedProject.carouselContent.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
