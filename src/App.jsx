import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useRef } from "react";

export default function App() {
  const sectionRef = useRef(null);
  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar sectionRef={sectionRef} handleScroll={handleScroll} />
      <main className="flex-grow w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Home sectionRef={sectionRef} handleScroll={handleScroll} />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
