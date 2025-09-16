import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useRef } from "react";

export default function App() {
  const sectionRef = useRef(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden relative">
      <Navbar sectionRef={sectionRef} handleScroll={handleScroll} />
      <Home sectionRef={sectionRef} handleScroll={handleScroll} />
      <Footer />
    </div>
  );
}
