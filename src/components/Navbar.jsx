import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profileData } from "../data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-bg-card bg-brand-bg-dark/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand/Logo */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="font-heading text-xl font-bold tracking-tight text-brand-text-primary transition-colors hover:text-brand-accent-primary z-50"
        >
          {profileData.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-brand-accent-primary"
                    : "text-brand-text-secondary hover:text-brand-text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Toggle Button (Mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center rounded-lg text-brand-text-secondary hover:text-brand-text-primary focus:outline-none md:hidden z-50"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="flex w-5 flex-col gap-1.5 transition-all duration-300">
            {/* Top Line */}
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            {/* Middle Line */}
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel - Explicit h-screen and solid bg-brand-bg-dark for complete layout isolation */}
      <div
        className={`fixed inset-0 h-screen w-screen z-40 bg-brand-bg-dark backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          isOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-10"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-brand-accent-primary scale-105"
                    : "text-brand-text-secondary hover:text-brand-text-primary"
                }`
              }
              style={{
                transitionDelay: `${idx * 50}ms`
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
