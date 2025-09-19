import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import rumlogo from "../assets/rumlogo.jpg";
import seeplogo from "../assets/seeplogo.jpg";

const projects = [
  {
    id: 1,
    title: "Social Media Marketing",
    image:
      "https://quickframe.com/wp-content/uploads/2024/07/QF-Blog_Social-Media-Marketing_-Complete-Guide-for-Advertisers-2024_1920x1080.jpg",
    carouselContent: [
      {
        image:
          "https://www.meghnacolour.com/wp-content/uploads/2024/09/Frame-2-1-e1727763068203.png",
        text: "B2B Content Strategy l Meghna Colours",
        body: "Partnered with Meghna Colours to grow their LinkedIn presence through engaging content that highlighted their expertise and industry impact. Crafted LinkedIn content to boost brand visibility and showcase Meghna Colours’ expertise in pigment manufacturing for B2B audiences.",
        links: [
          {
            label: "Post 1",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7194347953967288322/",
          },
          {
            label: "Post 2",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7190255225566355456/",
          },
          {
            label: "Post 3",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7186981081617756160/",
          },
          {
            label: "Post 4",
            url: "https://www.linkedin.com/feed/update/urn:li:activity:7185554719476510721/",
          },
        ],
      },
      {
        image:
          "https://media.licdn.com/dms/image/v2/D4D03AQHGyVF_eQmrwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680498659731?e=1761177600&v=beta&t=UtfCiTV_Lv-Q5o1P1ZxrDIqgNzIhrp9ForLxv-9JLLo",
        text: "LinkedIn Content Manager- Grishma Sanghvi",
        body: "Led LinkedIn content strategy and execution for Grishma Sanghvi, a renowned celebrity and talent manager. Over one year, I crafted posts that amplified her industry experience, shared behind-the-scenes insights, and built her personal brand with authenticity and impact.",
        links: [
          {
            label: "Post 1",
            url: "https://www.linkedin.com/posts/activity-7052983557962539008-kuGU/?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 2",
            url: "linkedin.com/posts/activity-7048619531065339905-zrm5?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 3",
            url: "linkedin.com/posts/activity-7057020792001171456-UA1v?utm_source=share&utm_medium=member_desktop",
          },
          {
            label: "Post 4",
            url: "https://www.linkedin.com/posts/activity-7062404001396383744-oiRR/?utm_source=share&utm_medium=member_desktop",
          },
        ],
      },
      {
        image:
          "https://www.americaandbeyond.com/cdn/shop/files/A_BNewLogo_2.jpg?v=1613758675&width=320",
        text: "America and Beyond",
        body: "Crafted conversion-focused email campaigns for this ethical, bohemian fashion brand — blending story-driven copy with smart strategy to boost engagement and sales.",
        links: [
          {
            label: "America and Beyond",
            url: "https://www.americaandbeyond.com/?srsltid=AfmBOoogzG2XjtMG0_70AJvXO2X1YNE1zpyEC8pHa3sHOcdejZyc80XQ",
          },
        ],
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
        image:
          "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_177470402_2000133320009280142_345636.jpg",
        text: "Plastic Industry",
        body: "Articles on sustainability and plastic awareness.",
        links: [
          {
            label: "Microplastics Are Bad",
            url: "https://vinshikajain.notion.site/Microplastics-Are-Bad-7a1f1ca1f3d24655b2d2f41b4eb9749a",
          },
          {
            label: "Plastic does not degrade",
            url: "https://vinshikajain.notion.site/Plastic-does-not-degrade-273a58fb8bb841fd91a82d250478b9dc",
          },
          {
            label: "Plastic kills marine life",
            url: "https://vinshikajain.notion.site/Plastic-kills-marine-life-0f7721b909694b2cb41f405b9923e9a4",
          },
          {
            label: "Is Plastic Really A Pollutant",
            url: "https://vinshikajain.notion.site/Is-Plastic-Really-A-Pollutant-a1d5252a9aff40f8b4d7d47486ee9b74",
          },
        ],
      },
      {
        image:
          "https://searchengineland.com/wp-content/seloads/2015/10/graph-line-trend-analytics-magnifying-glass-ss-1920.jpg",
        text: "Trends",
        body: "Marketing insights and case studies.",
        links: [
          {
            label: "The TalkOver: Nutella And Swiggy",
            url: "https://vinshikajain.notion.site/The-TalkOver-Nutella-And-Swiggy-140070dbeb7447a68da37c31f14cab0f",
          },
          {
            label: "Social Media Marketing As A Career",
            url: "https://vinshikajain.notion.site/Social-Media-Marketing-As-A-Career-1bb3c4dcaa8941f3828b002b9b12cc11",
          },
          {
            label: "Trends To Look Out For In 2023",
            url: "https://vinshikajain.notion.site/Trends-To-Look-Out-For-In-2023-609fee472000440387c369d9c3f0c895",
          },
        ],
      },
      {
        image:
          "https://vinshikajain.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6505641-f198-4ba3-be31-18b5fecd84f2%2F7438.png?id=c8c2b0bc-2379-41ee-942d-7d54c146b0ef&table=block&spaceId=ae0e8bc9-318c-42b7-9150-fcd3afc148a0&width=250&userId=&cache=v2",
        text: "ZeroSwap | Website & Newsletter Content",
        body: "Weekly updates on crypto and NFTs through engaging newsletters.",
        links: [
          {
            label: "ZeroSwap - Weekly Crypto & NFT #1",
            url: "https://vinshikajain.notion.site/ZeroSwap-Weekly-Crypto-NFT-c8c2b0bc237941ee942d7d54c146b0ef",
          },
          {
            label: "ZeroSwap - Weekly Crypto & NFT #2",
            url: "https://vinshikajain.notion.site/ZeroSwap-Weekly-Crypto-NFT-74549b783f9c4e23b7c6a0d6d3a49b54",
          },
        ],
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTeHqjg40dh9JXratQ2_4hvobtl_uYm_9bQQ&s",
        text: "Scriptwriting Samples – TTT Assignment",
        body: "Short, conversational Hinglish scripts focused on modern storytelling.",
        links: [
          {
            label: "Flaws",
            url: "https://file.notion.so/f/f/ae0e8bc9-318c-42b7-9150-fcd3afc148a0/3b675e86-61bb-48b4-9ec6-08d0f980cf35/Flaws.pdf",
          },
          {
            label: "Holding hands at Signal",
            url: "https://file.notion.so/f/f/ae0e8bc9-318c-42b7-9150-fcd3afc148a0/64d745d1-eaf5-4860-b70f-9a1e3281e405/Holding_hands_at_Signal.pdf",
          },
        ],
      },
      {
        image:
          "https://happydoors.in/wp-content/uploads/2023/08/Happy-Doors-LOGO-e1693028023508.png",
        text: "Happy Doors – Product Storytelling",
        body: "Concise, customer-friendly product descriptions balancing technical detail and design appeal.",
        links: [
          {
            label: "Explore Happy Doors",
            url: "https://vinshikajain.notion.site/Happy-Doors-17b3a32d053d45b289f1e3ce3b11c46d",
          },
        ],
      },
      {
        image:
          "https://vinshikajain.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fe6874e-7d01-4fb4-8d92-59aeae321138%2FUntitled.png?id=82d2328c-f90c-4583-807a-7d1ebcbd80c8&table=block&spaceId=ae0e8bc9-318c-42b7-9150-fcd3afc148a0&width=250&userId=&cache=v2",
        text: "Glee & Glint – Handcrafted Product Copy",
        body: "Compelling product storytelling to highlight antique and handcrafted offerings.",
        links: [
          {
            label: "Explore Glee and Glint",
            url: "https://vinshikajain.notion.site/Glee-and-Glint-82d2328cf90c4583807a7d1ebcbd80c8",
          },
        ],
      },
      {
        image:
          "https://s10eventmakers.com/Backend/images/Headersetting/black_logo1687328829.svg",
        text: "S10 Weddings | Website Content",
        body: "Elegant, experience-driven content showcasing bespoke wedding design and planning.",
        links: [
          {
            label: "Explore S10 Weddings",
            url: "https://vinshikajain.notion.site/S10-Weddings-2f01cf939bbf4d24b78b2f5b929bd81d",
          },
        ],
      },
      {
        image:
          "https://amorejewels.net/wp-content/uploads/2023/01/Amore_LOGO-02.svg ",
        text: "Amore Jewels | Website Copy",
        body: "Timeless website content capturing craftsmanship and design philosophy.",
        links: [
          {
            label: "Explore Amore Jewels",
            url: "https://amorejewels.net/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Performance Marketing",
    image:
      "https://www.taboola.com/wp-content/uploads-neo/2025/01/performance_marketing-scaled.jpg",
    carouselContent: [],
  },
  {
    id: 4,
    title: "Email Marketing",
    image:
      "https://blog.blendee.com/wp-content/uploads/2024/11/email-marketing.jpg",
    carouselContent: [
      {
        image: rumlogo,
        text: "Burning Barn Rum",
        body: "",
        links: [],
      },
      {
        image: seeplogo,
        text: "Seep",
        body: "",
        links: [],
      },
      {
        image:
          "https://cottontwist.co.uk/cdn/shop/files/Navy_-_Horizontal_strapline.png?v=1740757188&width=600",
        text: "Cotton Twist",
        body: "",
        links: [],
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

  // Keyboard navigation
  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, selectedProject]);

  return (
    <section className="w-full  bg-[#f3ede7] py-16 mb-1" id="portfolio">
      {/* Heading */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center text-[#4d2a2a] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        PORTFOLIO
      </motion.h3>

      {/* Grid */}
      <motion.div
        className="max-w-7xl mx-auto bg-white shadow-md px-6 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p, index) => (
            <motion.div
              key={p.id}
              className="relative h-64 overflow-hidden rounded-md cursor-pointer group"
              onClick={() => openModal(p)}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-white text-lg md:text-xl font-semibold text-center px-2">
                  {p.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <motion.div
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
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

            {/* Content area (scrollable if long) */}
            <div className="flex-1 overflow-y-auto">
              <div className="relative">
                <div
                  className="overflow-hidden"
                  onTouchStart={(e) =>
                    (e.currentTarget.touchStartX = e.touches[0].clientX)
                  }
                  onTouchEnd={(e) => {
                    const touchEndX = e.changedTouches[0].clientX;
                    const touchStartX = e.currentTarget.touchStartX;

                    if (touchStartX - touchEndX > 50) nextSlide();
                    else if (touchEndX - touchStartX > 50) prevSlide();
                  }}
                >
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {selectedProject.carouselContent.map((content, index) => (
                      <div key={index} className="w-full flex-shrink-0 p-6">
                        <div className="flex flex-col lg:flex-row gap-6 items-start">
                          {/* Image */}
                          <div className="lg:w-1/2 w-full">
                            <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center bg-white">
                              <img
                                src={content.image}
                                alt={content.text}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Text (scrolls if long) */}
                          <div className="lg:w-1/2 w-full space-y-4 overflow-y-auto max-h-[55vh] pr-2">
                            <h4 className="text-2xl font-bold text-gray-800 leading-tight">
                              {content.text}
                            </h4>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                              {content.body}
                            </p>

                            {content.links && (
                              <div className="flex flex-wrap gap-4 pt-2">
                                {content.links.map((l, i) => (
                                  <a
                                    key={i}
                                    href={l.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#4d2a2a] font-medium hover:underline"
                                  >
                                    {l.label}↗
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom navigation (always visible) */}
            {selectedProject.carouselContent.length > 1 && (
              <div className="flex justify-center items-center space-x-4 p-4 border-t border-gray-200 bg-white sticky bottom-0">
                <button
                  className="bg-white shadow p-3 rounded-full hover:bg-gray-50"
                  onClick={prevSlide}
                >
                  ◀
                </button>

                <div className="flex space-x-2">
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

                <button
                  className="bg-white shadow p-3 rounded-full hover:bg-gray-50"
                  onClick={nextSlide}
                >
                  ▶
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
