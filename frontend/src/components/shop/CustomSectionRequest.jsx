import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CustomSectionRequest = () => {
  return (
    <section className="relative w-screen h-auto md:h-[85vh] bg-fixed bg-center bg-cover flex items-center justify-center py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/shop/collection/request.webp')" }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-300 rounded-full animate-ping"></div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-white/5 backdrop-blur-2xl border border-white/20 p-12 md:p-16 w-[92%] max-w-3xl rounded-3xl shadow-2xl text-center text-white group hover:bg-white/10 transition-all duration-500"
      >
        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-8"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Custom Solutions
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Need a{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Custom Section?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-200 mb-12 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Can't find the perfect match for your project? We'll design and deliver a{" "}
          <span className="text-blue-300 font-semibold">bespoke section</span>{" "}
          crafted exclusively to fit your needs — clean, flexible, and future-ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/shop/suggestion-form">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              
              <span className="relative z-10">Request a Section</span>
              <motion.div
                className="relative z-10 ml-3"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Quick Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Full Support</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomSectionRequest;