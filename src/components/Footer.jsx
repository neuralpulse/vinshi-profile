import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f3ede7] py-12" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#4d2a2a] mb-6">
          CONTACT INFORMATION
        </h3>

        <a
          href="https://topmate.io/vinshika_jain"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-3 font-semibold uppercase tracking-wide rounded shadow-md hover:bg-gray-700 transition mb-6"
        >
          Block Time With Me
        </a>

        {/* Contact Info */}
        <div className="text-lg text-black mb-8">
          <p className="font-medium">vinshikajain@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="https://x.com/vinshikajain?lang=en" aria-label="Twitter">
            <FaTwitter className="w-10 h-10 text-white bg-black rounded-full p-2 hover:bg-[#4d2a2a] transition" />
          </a>
          <a href="https://www.instagram.com/wix" aria-label="Instagram">
            <FaInstagram className="w-10 h-10 text-white bg-black rounded-full p-2 hover:bg-[#4d2a2a] transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/vinshika-jain-0297b6165/"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-10 h-10 text-white bg-black rounded-full p-2 hover:bg-[#4d2a2a] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
