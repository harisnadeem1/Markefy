import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
    <section className="w-full bg-gradient-to-r from-[#fafafa] via-[#fefefe] to-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 items-center px-6 sm:px-10 lg:px-20 py-16 lg:py-24 gap-12">
        
        {/* LEFT - Text Content */}
        <div className="text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-tight leading-snug"
              style={{ color: "#0071bc" }}
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl">
            Our professionally crafted snippets aren’t limited to Shopify. 
            They integrate seamlessly with WordPress, WooCommerce, custom-coded 
            websites, and any modern CMS. Each section is lightweight, 
            responsive, and designed for performance — helping you deliver 
            beautiful, conversion-optimized pages in minutes, without hiring 
            a developer.
          </p>

          <div className="mt-8">
            <Link
              to="/shop/collection"
              className="inline-block px-10 py-3 text-base sm:text-lg font-medium rounded-md shadow-md transition hover:shadow-lg"
              style={{
                fontFamily: "'Inconsolata', monospace",
                backgroundColor: "#0071bc",
                color: "#fff",
              }}
            >
              Explore Sections
            </Link>
          </div>
        </div>

        {/* RIGHT - Image */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[500px]">
          <img
            alt="Website redesign sections"
            src="/shop/home/hero.jpg"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
