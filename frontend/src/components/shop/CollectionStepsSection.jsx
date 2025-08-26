import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Choose your snippet",
      description:
        "Pick from our collection of premium ready-to-use section templates.",
    },
    {
      number: "2",
      title: "Copy & paste instantly",
      description:
        "Drop it into Shopify, WordPress, or any custom website with zero hassle.",
    },
    {
      number: "3",
      title: "Customize & launch",
      description:
        "Adjust text, colors, and layout — then publish a polished section in minutes.",
    },
  ];

  return (
    <section
      className="py-20 bg-white text-center"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Heading + Detailed Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
          style={{ color: "#0071bc" }}
        >
          Install in just 3 easy steps
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          With Markefy snippets, you don’t need coding knowledge or expensive
          developers. Every section is designed to be intuitive, responsive,
          and flexible — whether you’re running a Shopify store, a WordPress
          site, or a fully custom-coded website. Just follow our 3 simple
          steps and you’ll have a beautiful, functional section ready to go
          live in minutes. <br /> <br />
          Not finding exactly what you need?{" "}
          <a
            href="/shop/suggestion-form"
            className="underline text-[#0071bc] hover:text-[#005a94]"
          >
            Let us know
          </a>{" "}
          and we’ll help bring your idea to life.
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
            {/* Step Number */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              className="w-24 h-24 flex items-center justify-center rounded-full text-3xl font-bold mb-6 shadow-lg transition-transform group-hover:scale-105"
              style={{
                fontFamily: "'Inconsolata', monospace",
                color: "#0071bc",
                backgroundColor: "#f0f6fb",
                border: "2px solid #0071bc",
              }}
            >
              {step.number}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-600 text-base leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

    
    </section>
  );
};

export default InstallSteps;
