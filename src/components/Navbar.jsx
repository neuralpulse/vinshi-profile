import React, { useState, useEffect } from "react";

export default function Navbar({ sectionRef, handleScroll }) {
  const [activeLink, setActiveLink] = useState("Welcome");
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Welcome", sectionId: "hero" },
    { name: "About Me", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Portfolio", sectionId: "portfolio" },
    { name: "Contact", sectionId: "contact" },
  ];

  const handleLinkClick = (linkName, sectionId) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 lg:justify-center">
          {/* Desktop Navigation - Hidden on mobile, visible on laptop+ */}
          <div className="hidden lg:flex space-x-12">
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

          {/* Mobile Menu Button - Visible on mobile, hidden on laptop+ */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMobileMenu();
              }}
              className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo or Brand (optional) - You can add this if needed */}
          <div className="lg:hidden flex-1">
            {/* You can add a logo or brand name here if needed */}
          </div>
        </div>

        {/* Mobile Navigation Menu - Visible when menu is open */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="py-4 border-t border-gray-200 bg-white">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick(item.name, item.sectionId);
                }}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${
                  activeLink === item.name
                    ? "text-gray-800 font-medium bg-gray-50 border-l-4 border-gray-800"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
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
