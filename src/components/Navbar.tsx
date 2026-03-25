"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Beranda" },
  { href: "#materi", label: "Materi" },
  { href: "#kalkulator", label: "Kalkulator" },
  { href: "#kuis", label: "Kuis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-green-100/50 border-b border-green-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#hero" onClick={() => handleNavClick("#hero")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-sm">IMT</span>
          </div>
          <span className="font-bold text-green-700 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
            Smart<span className="text-emerald-500">Teens</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#kalkulator")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-green-300/60 hover:scale-105 transition-all duration-200 animate-pulse-green"
            >
              Hitung IMT →
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-green-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-b border-green-100`}
      >
        <ul className="px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-1 pb-2">
            <button
              onClick={() => handleNavClick("#kalkulator")}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-xl shadow-md"
            >
              Hitung IMT Sekarang →
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
