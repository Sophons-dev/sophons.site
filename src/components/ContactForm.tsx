"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-gray-800/50 p-6 sm:p-8 border border-gray-700/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h3
        className="text-xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Get Your Free Consultation
      </motion.h3>

      <AnimatePresence mode="wait">
        {submitStatus === "success" && (
          <motion.div
            className="mb-6 p-4 bg-green-900/50 border border-green-700 text-green-300"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            Thanks! We'll get back to you within 24 hours.
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            Something went wrong. Please try again or email us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Name *
            </motion.label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Email *
            </motion.label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.label
            htmlFor="company"
            className="block text-sm font-medium text-gray-300 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Company
          </motion.label>
          <motion.input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your company name"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Project Type
            </motion.label>
            <motion.select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <option value="">Select project type</option>
              <option value="landing-page">Landing Page</option>
              <option value="internal-tool">Internal Tool</option>
              <option value="web-app">Web Application</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </motion.select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-300 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Budget Range
            </motion.label>
            <motion.select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="over-50k">Over $50,000</option>
            </motion.select>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <motion.label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Project Details *
          </motion.label>
          <motion.textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            placeholder="Tell us about your project, goals, and any specific requirements..."
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3 bg-[#4285F4] hover:bg-[#3367d6] disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors text-white font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            ...(isSubmitting ? { scale: [1, 1.05, 1] } : {}),
          }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            ...(isSubmitting ? { duration: 1, repeat: Infinity } : {}),
          }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
