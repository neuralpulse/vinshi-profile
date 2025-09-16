import React, { useState, useEffect } from "react";

export default function Navbar({ sectionRef, handleScroll }) {
  const [activeLink, setActiveLink] = useState("Welcome");
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navItems = [
    { name: "Welcome", sectionId: "hero" },
    { name: "About Me", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Portfolio", sectionId: "portfolio" },
    { name: "Contact", sectionId: "contact" },
  ];

  const handleLinkClick = (linkName, sectionId) => {
    setActiveLink(linkName);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (currentScrollPos > 50) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center items-center h-16">
          <div className="flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleLinkClick(item.name, item.sectionId)}
                className={
                  activeLink === item.name
                    ? "text-gray-800 font-medium border-b-2 border-gray-800 pb-1 cursor-pointer"
                    : "text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                }
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
