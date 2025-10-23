"use client";

import { siteOfferings } from "@/data/siteOfferings";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <motion.div
      id="pricing"
      className="pt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="absolute -top-4 text-sm text-slate-400"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get an accurate estimate
        </motion.span>
        <motion.h2
          className="font-bold text-3xl lg:text-4xl text-[#A15AFF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          Free Consultation
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {siteOfferings.map((offering, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <motion.h3
              className="font-bold text-xl mb-3 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {offering.title}
            </motion.h3>
            <motion.p
              className="text-sm text-slate-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {offering.description}
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {offering.inclusions.map((inclusion, inclusionIndex) => (
                <motion.span
                  key={inclusionIndex}
                  className={`text-sm ${
                    inclusionIndex === 0
                      ? "font-bold text-white"
                      : "text-gray-300"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + index * 0.1 + inclusionIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  ✅ {inclusion}
                </motion.span>
              ))}
            </motion.div>

            {offering.itemizedOptions.length > 0 && (
              <motion.div
                className="mt-4 pt-4 border-t border-gray-700/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {offering.itemizedOptions.map((option, optionIndex) => (
                  <motion.div
                    key={optionIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.0 + index * 0.1 + optionIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="text-sm font-bold text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {option.label}
                    </motion.span>
                    <div className="flex flex-col mt-2">
                      {option.options.map((subOption, subIndex) => (
                        <motion.span
                          key={subIndex}
                          className="text-xs text-gray-400 ml-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay:
                              1.1 +
                              index * 0.1 +
                              optionIndex * 0.05 +
                              subIndex * 0.02,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, x: 5 }}
                        >
                          - {subOption}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
