import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CustomSectionRequest = () => {
  return (
    <section
      className="relative w-screen h-auto md:h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center py-20"
      style={{ backgroundImage: "url('/shop/collection/request.webp')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-10 md:p-14 w-[92%] max-w-2xl rounded-2xl shadow-2xl text-center text-white"
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Need a Custom Section?
        </h2>

        <p
          className="text-gray-200 mb-10 text-lg leading-relaxed text-left"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Can’t find the perfect match for your project?  
          We’ll design and deliver a <span className="font-semibold">bespoke section</span>  
          crafted exclusively to fit your needs — clean, flexible, and future-ready.
        </p>

        <Link to="/shop/suggestion-form">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px #4db5ff" }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 rounded-full uppercase tracking-wider font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            style={{
              fontFamily: "'Inconsolata', monospace",
              backgroundColor: "#0071bc",
              color: "#ffffff",
            }}
          >
            Request a Section
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CustomSectionRequest;
