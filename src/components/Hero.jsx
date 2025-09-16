import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/image.jpg";

export default function Hero() {
  const nav = useNavigate();
  return (
    <header
      className="bg-white relative text-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-8xl font-extrabold mb-4 text-[#4d2a2a] ">
            Where Strategy Meets Creativity.
          </h1>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-lg md:text-4xl mb-6 text-[#4d2a2a]">
            Your creative journey starts here.
          </p>
        </div>
      </div>
    </header>
  );
}
