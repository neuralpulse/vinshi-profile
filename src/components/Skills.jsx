import React from "react";
import { Users, Share2, Mail, Target } from "lucide-react"; // using lucide icons

const skills = [
  {
    name: "Content Writing",
    desc: "Crafting compelling and strategic content.",
    icon: <Users size={32} />,
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
    <section className="w-full bg-[#f3ede7] py-16" id="skills">
      {/* Heading */}
      <h3 className="text-3xl md:text-4xl font-bold text-center text-[#2d1b3d] mb-12">
        SKILL SETS
      </h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b divide-x bg-white">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center text-center px-6 py-12"
          >
            <div className="text-black mb-4">{skill.icon}</div>
            <h4 className="text-lg font-medium mb-2">{skill.name}</h4>
            <p className="text-gray-700 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
