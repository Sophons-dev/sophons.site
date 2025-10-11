"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 sm:px-8 lg:px-24 xl:px-48 sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-2">
      <nav className="flex justify-between items-center">
        <Image
          src="/sophons_logo_1.png"
          alt="Sophons Logo"
          width={140}
          height={40}
          className="h-8 sm:h-10 w-auto"
        />
        <ul className="hidden sm:flex justify-between gap-4 lg:gap-8 text-xs sm:text-sm [&_li]:flex [&_li]:items-center">
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-gray-700/50">
          <ul className="flex flex-col gap-4 p-4 text-sm">
            <li>
              <a
                href="#"
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
