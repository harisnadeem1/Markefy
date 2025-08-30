import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap, Target, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import FeaturedProducts from "../../components/shop/ProductSlider";

const WhatAreCodeSnippets = () => {
  const benefits = [
    "Speeds up development",
    "Ensures consistency across your project", 
    "Easy to customize and adapt",
    "Lets you focus on unique features instead of repeating basics"
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
            >
              <Code2 className="w-4 h-4 mr-2" />
              Learn More
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              What are{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                code snippets?
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
              Code snippets are small, reusable pieces of code that solve a specific problem or provide a particular functionality. Instead of reinventing the wheel every time you start a project, snippets act like building blocks that can be quickly integrated into your website, app, or store.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              They often include ready-to-use HTML, CSS, JavaScript, React components, or Shopify Liquid sections that follow best practices. For developers, snippets are like a personal toolkit that reduces repetitive work. For non-developers, they offer a plug-and-play solution without having to write everything from scratch.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Why use code snippets?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Markefy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                How Markefy helps you
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              At <span className="font-bold text-gray-900">Markefy</span>, we create premium snippets designed for real business needs. Each snippet is{" "}
              <span className="font-semibold text-blue-600">clean, tested, and optimized</span>{" "}
              so you can drop it into your project with confidence. Whether you're building a Shopify store, React app, or static site, our snippets make your workflow smoother.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Code2, title: "Clean Code", desc: "Well-structured & documented" },
                { icon: Zap, title: "Tested", desc: "Thoroughly quality checked" },
                { icon: Sparkles, title: "Optimized", desc: "Performance focused" }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                See Our Snippets
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Products Below */}
      <FeaturedProducts />
    </section>
  );
};

export default WhatAreCodeSnippets;