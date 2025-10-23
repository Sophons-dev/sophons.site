"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="px-4 py-4 sm:px-8 lg:px-24 xl:px-48 sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/sophons_logo_1.png"
            alt="Sophons Logo"
            width={140}
            height={40}
            className="h-8 sm:h-10 w-auto"
          />
        </motion.div>
        <motion.ul
          className="hidden sm:flex justify-between gap-4 lg:gap-8 text-xs sm:text-sm [&_li]:flex [&_li]:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {[
            { href: "#", text: "Home" },
            { href: "#pricing", text: "Pricing" },
            { href: "#faq", text: "FAQ" },
            { href: "#about", text: "About" },
            { href: "#contact", text: "Contact" },
          ].map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                {item.text}
              </a>
            </li>
          ))}
        </motion.ul>
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
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
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="sm:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-gray-700/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-4 p-4 text-sm">
              {[
                { href: "#", text: "Home" },
                { href: "#pricing", text: "Pricing" },
                { href: "#faq", text: "FAQ" },
                { href: "#about", text: "About" },
                { href: "#contact", text: "Contact" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="block py-2 hover:text-blue-400 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
