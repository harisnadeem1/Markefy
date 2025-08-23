import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShopHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🛒 Welcome to Markefy Shop
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our premium <strong>code snippets</strong>, ready-to-use sections, 
          and powerful templates to speed up your development.
        </p>
      </div>

      {/* Featured Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">✨ Hero Sections</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Modern hero sections for websites with animation and responsiveness.
          </p>
          <Link
            to="/shop/collection/heros"
            className="text-blue-600 font-medium hover:underline"
          >
            Browse →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">💳 Pricing Tables</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Beautiful pricing tables to showcase your product plans.
          </p>
          <Link
            to="/shop/collection/pricing"
            className="text-blue-600 font-medium hover:underline"
          >
            Browse →
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">🎛️ Sliders & Carousels</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Responsive sliders, testimonials, and carousels built with Tailwind.
          </p>
          <Link
            to="/shop/collection/sliders"
            className="text-blue-600 font-medium hover:underline"
          >
            Browse →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopHome;
