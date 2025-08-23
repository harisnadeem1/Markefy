import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = ({ onNotImplemented }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 section-gradient opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Why Markefy?
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "17+", label: "Years of experience" },
            { number: "400+", label: "Developers & Experts" },
            { number: "2500+", label: "Projects Delivered" },
            { number: "73", label: "NPS Score" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-xl p-8 text-center glow-effect cursor-pointer"
              onClick={onNotImplemented}
            >
              <div className="text-4xl md:text-5xl font-bold mb-4">{item.number}</div>
              <div className="text-gray-200">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;