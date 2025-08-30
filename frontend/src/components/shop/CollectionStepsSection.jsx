import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Copy, Palette } from "lucide-react";

const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Choose your snippet",
      description: "Pick from our collection of premium ready-to-use section templates.",
      icon: Download
    },
    {
      number: "2", 
      title: "Copy & paste instantly",
      description: "Drop it into Shopify, WordPress, or any custom website with zero hassle.",
      icon: Copy
    },
    {
      number: "3",
      title: "Customize & launch", 
      description: "Adjust text, colors, and layout — then publish a polished section in minutes.",
      icon: Palette
    },
  ];

  return (
    <section className="py-24 bg-gray-50 text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            How It Works
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Install in just{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              3 easy steps
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With Markefy snippets, you don't need coding knowledge or expensive developers. 
            Every section is designed to be intuitive, responsive, and flexible — whether you're 
            running a Shopify store, a WordPress site, or a fully custom-coded website.
          </p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-3xl mx-auto"
          >
            Not finding exactly what you need?{" "}
            <Link
              to="/shop/suggestion-form"
              className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
            >
              Let us know
            </Link>{" "}
            and we'll help bring your idea to life.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
              >
                {/* Connecting line (hidden on mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 relative z-10">
                  {/* Icon & Number */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600 shadow-lg border-2 border-blue-100">
                        {step.number}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.3 + 0.2 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Subtle pulse animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default InstallSteps;