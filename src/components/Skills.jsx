import React from "react";
import { FileText, Share2, Mail, Target } from "lucide-react"; // Updated imports for better semantic fit

const skills = [
  {
    name: "Content Writing",
    desc: "Crafting compelling and strategic content.",
    icon: <FileText size={32} />,
  },
  {
    name: "Social Media Marketing",
    desc: "Collaborating with influential personalities.",
    icon: <Share2 size={32} />,
  },
  {
    name: "Email, Ghost & Copy Writing",
    desc: "Analyzing and enhancing audience engagement.",
    icon: <Mail size={32} />,
  },
  {
    name: "Paid Social Media Campaigns",
    desc: "Maximizing reach through targeted campaigns.",
    icon: <Target size={32} />,
  },
];

export default function Skills() {
  return (
    <section className="w-full bg-[#f3ede7] py-16 mb-1" id="skills">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b3d] mb-12 uppercase tracking-wide">
        SKILL SETS
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b divide-x divide-gray-200 bg-white shadow-sm rounded-lg mx-4 md:mx-0">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`flex flex-col items-center justify-center text-center px-6 py-12 ${
              index !== 0 ? "border-l border-gray-200" : ""
            }`}
          >
            <div className="text-[#2d1b3d] mb-4 p-2 rounded-full bg-[#f3ede7]">
              {skill.icon}
            </div>
            <h4 className="text-lg font-semibold mb-2 text-[#2d1b3d]">
              {skill.name}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
