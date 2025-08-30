import React from "react";
import { motion } from "framer-motion";
import { Zap, Globe, Code } from "lucide-react";

const ShopifySection = () => {
  const platforms = [
    { name: "Shopify", color: "text-green-600" },
    { name: "WordPress", color: "text-blue-600" },
    { name: "WooCommerce", color: "text-purple-600" },
    { name: "Custom websites", color: "text-orange-600" }
  ];

  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-semibold shadow-sm">
            <Zap className="w-4 h-4 mr-2 text-blue-500" />
            Do It Yourself
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Add premium sections to{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            any website
          </span>
        </motion.h2>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="px-4 py-2 bg-white rounded-full shadow-md border border-gray-100"
            >
              <span className={`font-semibold ${platform.color}`}>
                {platform.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Our premium <span className="font-semibold text-gray-800">section templates</span> are designed to work seamlessly across platforms. With responsive layouts, clean code, and full flexibility, you can build and customize beautiful pages{" "}
            <span className="font-semibold text-blue-600">without hiring a developer.</span>
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium">Responsive Design</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700 font-medium">Clean Code</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-700 font-medium">Full Flexibility</span>
            </motion.div>
          </div>

          {/* Call to action message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg"
          >
            Pay once — use forever
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopifySection;