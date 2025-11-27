"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-xl font-semibold tracking-tight">
        SAI NAMAN
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 glass px-6 py-3">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="menu-item text-sm font-medium hover:text-cyan-300 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 right-6 w-48 glass p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="menu-item text-base font-medium hover:text-cyan-300 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
