import React from "react";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About — Vinshika Jain</h1>
      <AboutSection expanded />
      <Skills />
    </div>
  );
}
