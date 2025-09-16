import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Welcome");
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navItems = [
    { name: "Welcome", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Hide navbar if scrolling down beyond 50px, show if scrolling up
      if (currentScrollPos > 50) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true); // Always show if near the top
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
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => handleLinkClick(item.name)}
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 font-medium border-b-2 border-gray-800 pb-1 cursor-pointer"
                    : "text-gray-600 hover:text-gray-800 transition-colors duration-200 cursor-pointer"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
