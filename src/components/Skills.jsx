import React from "react";
import { FileText, Share2, Mail, Target } from "lucide-react";
import { motion } from "framer-motion";

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
    <section
      className="w-full min-h-screen bg-[#f3ede7] py-20 flex flex-col justify-center mb-1"
      id="skills"
    >
      {/* Heading */}
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center text-[#4d2a2a] mb-16 uppercase tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        SKILL SETS
      </motion.h3>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b divide-x divide-gray-200 bg-white shadow-lg rounded-lg mx-6 md:mx-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`flex flex-col items-center justify-center text-center px-6 py-16 ${
              index !== 0 ? "border-l border-gray-200" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-[#2d1b3d] mb-6 p-4 rounded-full bg-[#f3ede7] shadow-md"
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <h4 className="text-xl font-semibold mb-3 text-[#2d1b3d]">
              {skill.name}
            </h4>
            <p className="text-gray-600 text-base leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
