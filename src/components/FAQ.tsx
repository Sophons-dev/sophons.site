"use client";

import { faq } from "@/data/faq";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      id="faq"
      className="pt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8">
        <div className="lg:w-1/3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-slate-300 max-w-md text-sm leading-relaxed">
            We compiled a list of answers to address your most pressing
            questions regarding our Services.
          </p>
        </div>

        <div className="flex flex-col gap-2 lg:w-2/3">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              className="border border-slate-300/20 rounded-lg overflow-hidden bg-gray-800/20"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full p-3 sm:p-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white text-sm sm:text-base pr-4">
                    {item.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-400"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
