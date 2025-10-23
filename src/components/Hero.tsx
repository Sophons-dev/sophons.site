"use client";

import CopyMail from "./copy-mail";
import { LinkedIn } from "./socials";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 items-start mt-[3rem] lg:justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.2 }}
    >
      <motion.div
        className="w-full flex flex-col gap-4 items-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            className="font-bold text-3xl sm:text-4xl lg:text-5xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Got an Idea?
          </motion.h1>
          <motion.span
            className="text-xl sm:text-2xl lg:text-[28px] text-white font-light"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Lets build that.
          </motion.span>
        </motion.div>
        <motion.p
          className="max-w-[55ch] text-base sm:text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          At Sophons, we turn{" "}
          <motion.strong
            className="text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            ideas into reality
          </motion.strong>
          —building high-converting landing pages, streamlining workflows with
          internal tools, and handling the tech so you can focus on innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="italic text-gray-300 text-sm">Our socials:</span>
          <motion.div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <LinkedIn />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:block w-full max-w-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 font-mono text-sm"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            ></motion.div>
            <motion.div
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            ></motion.div>
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.div>
            <span className="text-gray-400 ml-2">sophons.dev</span>
          </motion.div>
          <motion.div className="space-y-2">
            <motion.div
              className="text-blue-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-gray-500">const</span> idea ={" "}
              <span className="text-green-400">"your vision"</span>;
            </motion.div>
            <motion.div
              className="text-blue-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className="text-gray-500">const</span> reality ={" "}
              <span className="text-purple-400">build</span>(idea);
            </motion.div>
            <motion.div
              className="text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <span className="text-gray-500">//</span> We make it happen
            </motion.div>
            <motion.div
              className="text-yellow-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <span className="text-gray-500">return</span>{" "}
              <span className="text-green-400">"success"</span>;
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-4 pt-4 border-t border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div className="flex flex-wrap gap-2">
              <motion.span
                className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                React
              </motion.span>
              <motion.span
                className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.7 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                Node.js
              </motion.span>
              <motion.span
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                Next.js
              </motion.span>
              <motion.span
                className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.9 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                TypeScript
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
