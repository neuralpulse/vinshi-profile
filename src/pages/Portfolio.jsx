import React from "react";
import PortfolioGrid from "../components/PortfolioGrid";

export default function Portfolio({ sectionRef }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" ref={sectionRef}>
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <PortfolioGrid />
    </div>
  );
}
