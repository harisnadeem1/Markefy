import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Users, Target, CheckCircle, Sparkles } from "lucide-react";

const ShopAboutPage = () => {
  const features = [
    "Built with clean, responsive HTML, CSS, and JavaScript",
    "Lightweight, fast-loading, and free of unnecessary bloat", 
    "Customizable to match your brand identity",
    "Compatible with Shopify, WordPress, and custom websites"
  ];

  const values = [
    {
      icon: Code,
      title: "Quality Code",
      description: "Every snippet is crafted with clean, maintainable code that follows best practices"
    },
    {
      icon: Zap,
      title: "Performance First", 
      description: "Optimized for speed and performance without compromising on functionality"
    },
    {
      icon: Users,
      title: "User Focused",
      description: "Designed with your end users in mind for the best possible experience"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Built to convert visitors into customers with proven design patterns"
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* ---------- HERO SECTION ---------- */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              About Us
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                About Markefy
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              At Markefy, we create premium, pre-built website sections designed to make building modern websites faster, easier, and more affordable. Whether you're running an online store, a portfolio, or a business site, our snippets give you the flexibility of custom code without the complexity or cost.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/shop/about/hero1.webp"
                alt="About Markefy"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- VALUES SECTION ---------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these principles that ensure you get the best possible experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT CONTENT ---------- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Markefy is a digital product studio dedicated to helping businesses and creators achieve professional results without the traditional barriers of time, cost, and complexity. We know the struggles of working with rigid themes, expensive developers, and bulky third-party apps. That's why we've built a library of ready-to-use, lightweight code snippets — so you can create polished websites without compromise.
            </p>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-600">
              From hero sections and testimonials to sliders, conversion blocks, and content layouts — our collection covers every essential element a modern website needs. Each snippet is:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Markefy
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                Unlike standard templates or third-party apps, our snippets are designed to give you maximum flexibility with minimal effort. Everything is optimized for performance, accessibility, and consistency — so you can focus on your content and customers instead of worrying about code.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                With Markefy, you don't have to choose between expensive custom development and generic themes. You get modern, professional designs you can implement in minutes.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We believe great design should be accessible to everyone. Our vision is to empower businesses of all sizes — from startups to established brands — with tools that save time, reduce costs, and deliver websites that stand out. Markefy is here to make professional web design achievable for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Explore our collection of premium website sections and start building your perfect website today.
            </p>
            
            <Link to="/shop/collection">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Explore Our Collection
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
    </div>
  );
};

export default ShopAboutPage;