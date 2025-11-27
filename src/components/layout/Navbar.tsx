"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

// SVG ICONS -------------------------------------------------------

const MenuIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// NAVBAR ----------------------------------------------------------

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold flex items-center gap-2">
        <span className="bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
          SN
        </span>
        Sai Naman
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 glass px-6 py-3 rounded-xl">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-purple-400 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 glass backdrop-blur-xl flex flex-col items-center justify-center space-y-6 p-6 md:hidden z-50">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-medium menu-item"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
