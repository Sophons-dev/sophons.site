"use client";

import { about } from "@/data/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="pt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Who Are We?
      </motion.h2>
      <motion.div
        className="space-y-4 sm:space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {about.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-gray-300 leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
