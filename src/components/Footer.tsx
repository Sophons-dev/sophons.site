"use client";

import { LinkedIn } from "./socials";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#1A162A] border-t border-[#232040] py-8 px-4 sm:px-8 lg:px-24 xl:px-48 mt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between text-[#d1d1d1] text-sm space-y-2 sm:space-y-0 gap-4 sm:gap-0">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            &copy; {new Date().getFullYear()} Sophons
          </motion.span>
          <span className="hidden md:inline">·</span>
          <motion.a
            href="mailto:sophons.dev@gmail.com"
            className="hover:underline hover:text-white transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
        >
          <LinkedIn />
        </motion.div>
      </div>
    </motion.footer>
  );
}
