import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers } from "lucide-react";

const HeroSection = () => {
  const headings = [
    "Premium pre-built Shopify Sections",
    "Beautiful Page Layout Templates", 
    "Redesign your store or website within minutes",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center px-4 sm:px-6 lg:px-8 py-20 lg:py-24 gap-16 relative z-10">
        
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold"
          >
            <Code2 className="w-4 h-4 mr-2" />
            Ready-to-Use Components
          </motion.div>

          {/* Animated Heading */}
          <div className="min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {headings[index]}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl"
          >
            Our professionally crafted snippets aren't limited to Shopify. They integrate seamlessly with WordPress, WooCommerce, custom-coded websites, and any modern CMS. Each section is lightweight, responsive, and designed for performance.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/shop/collection">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Layers className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Explore Sections
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Mobile responsive</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group"
        >
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              alt="Website redesign sections"
              src="/shop/home/hero.jpg"
              className="w-full h-full object-cover transition-transform duration-700"
            />
            
           
          </div>

         
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;