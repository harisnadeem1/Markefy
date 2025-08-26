import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Get your snippet",
      description: "Instant access to your purchased section template.",
    },
    {
      number: "2",
      title: "Copy & paste",
      description: "Drop it into Shopify, WordPress, or any custom site.",
    },
    {
      number: "3",
      title: "Customize in minutes",
      description: "Style it your way and publish a polished section fast.",
    },
  ];

  return (
    <section
      className="py-20 bg-white text-center"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#0071bc" }}
        >
          Install in just 3 easy steps
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Quick, intuitive, and universal — works across Shopify, WordPress, and custom websites.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.25 }}
          >
            {/* Step Number with animation */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              className="w-20 h-20 flex items-center justify-center rounded-full text-3xl font-bold mb-5"
              style={{
                fontFamily: "'Inconsolata', monospace",
                color: "#0071bc",
                backgroundColor: "#f0f6fb",
              }}
            >
              {step.number}
            </motion.div>

            {/* Title + Description */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p
              className="text-gray-600 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link to="/shop/collection">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-md font-semibold text-lg shadow-md transition"
            style={{
              fontFamily: "'Inconsolata', monospace",
              backgroundColor: "#0071bc",
              color: "#ffffff",
            }}
          >
            Get Started →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default InstallSteps;
