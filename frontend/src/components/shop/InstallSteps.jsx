import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Copy, Palette, ArrowRight, Zap } from "lucide-react";

const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Get your snippet",
      description: "Instant access to your purchased section template.",
      icon: Download,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      title: "Copy & paste",
      description: "Drop it into Shopify, WordPress, or any custom site.",
      icon: Copy,
      color: "from-green-500 to-green-600"
    },
    {
      number: "3",
      title: "Customize in minutes",
      description: "Style it your way and publish a polished section fast.",
      icon: Palette,
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <section className="py-24 bg-white text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
          >
            <Zap className="w-4 h-4 mr-2" />
            Quick Setup
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Install in just{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              3 easy steps
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quick, intuitive, and universal — works across Shopify, WordPress, and custom websites.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
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
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent z-0" />
                )}
                
                <div className="bg-gray-50 rounded-3xl p-8 hover:bg-white transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-2 relative z-10">
                  {/* Icon & Number */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.2 }}
                      className="relative"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg border-2 border-gray-100">
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/shop/collection">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started
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
      </div>
    </section>
  );
};

export default InstallSteps;