"use client";

import CopyMail from "./copy-mail";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.div
      id="contact"
      className="pt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        Don&apos;t Know Where to Start?
      </motion.h2>
      <motion.p
        className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Feeling a little lost? That&apos;s completely normal.
      </motion.p>
      <motion.p
        className="text-[#D1D1D1] text-base sm:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, x: 5 }}
      >
        Let&apos;s talk. Schedule a free, no-obligation consultation with our
        team. We&apos;ll listen to your goals and help you find the perfect
        package for your business and budget. No pressure, just a friendly chat
        to get you on the right track.
      </motion.p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-gray-400 text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Or reach out directly:
        </motion.span>
        <motion.a
          href="mailto:sophons.dev@gmail.com"
          className="w-fit px-6 sm:px-8 py-3 bg-[#4285F4] hover:bg-[#3367d6] transition-colors text-white font-medium text-base sm:text-lg text-center"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch!
        </motion.a>
        <motion.div whileHover={{ scale: 1.1 }}>
          <CopyMail />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
