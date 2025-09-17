import React from "react";
import profileImage from "../assets/photo.jpg";

export default function AboutSection() {
  function handleScroll() {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      className="min-h-screen w-full bg-[#f3ede7] flex items-center mb-1"
      id="about"
    >
      <div className="grid md:grid-cols-2 w-screen">
        {" "}
        {/* Changed to w-screen for full width */}
        <div className="flex flex-col justify-center px-12 lg:px-24 py-16 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#4d2a2a]">
            VINSHIKA JAIN
          </h1>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Hi, I’m Vinshika Jain. <br />
            I help brands and creators make strategic noise in a world full of
            noise. <br />
            With 8+ years of experience and 30+ brands across industries, I
            bring together storytelling and strategy to turn your audience into
            a true community.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            From scroll-stopping content to campaigns that connect — I’m here to
            help you grow with intention, not just attention.
          </p>

          <div>
            <button
              className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
              onClick={handleScroll}
            >
              View Our Portfolio
            </button>
          </div>

          <p className="uppercase tracking-wide text-gray-700 font-medium">
            Crafting Unique Social Media Campaigns
          </p>
        </div>
        <div className="flex justify-center items-center p-8">
          <img
            src={profileImage}
            alt="Vinshika Jain"
            className="rounded-xl shadow-lg max-h-[650px] w-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
