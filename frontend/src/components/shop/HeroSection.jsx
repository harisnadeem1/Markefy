import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const headings = [
    "Premium pre-built Shopify Sections",
    "Beautiful Page Layout Templates",
    "Redesign your Shopify store within minutes",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <section className="w-full grid lg:grid-cols-2">
      {/* RIGHT (on mobile first) - Image */}
      <div className="relative w-full h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
        <img
          alt="Shopify store redesign"
          src="/shop/home/hero.webp"
          className="w-full h-full object-cover"
        />
      </div>

      {/* LEFT - Text Content */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-10 bg-gray-50 text-center lg:text-left order-2 lg:order-1">
        {/* Rotating Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[42px] lg:leading-[47px] font-normal text-blue-700"
          >
            {headings[index]}
          </motion.h1>
        </AnimatePresence>

        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
          Explore our super-flexible section templates that you can easily add to your Shopify store.
        </p>

        {/* CTA Button */}
        <div className="mt-5">
          <Link
            to="/shop"
            className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg uppercase px-6 py-3 inline-block shadow-md transition rounded-sm"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
