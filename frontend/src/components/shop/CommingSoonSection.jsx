import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle, Sparkles } from "lucide-react";

const ComingSoonSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="w-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] mx-auto my-12 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative py-16 px-4 sm:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-center rounded-3xl shadow-2xl"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-lg"></div>
        </div>

        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          Updates
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          More coming soon!
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
        
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Signup below to receive updates from us AND get{" "}
            <span className="font-bold text-yellow-300 bg-yellow-300/20 px-2 py-1 rounded-full">
              15% off
            </span>{" "}
            your first order.
          </p>
        </motion.div>

        {/* Email Form or Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-xl mx-auto"
        >
          {!subscribed ? (
            <form
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="relative flex-1 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Bell className="w-5 h-5 group-hover:animate-pulse" />
                Subscribe
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 text-white"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl font-bold">Successfully subscribed!</p>
                <p className="text-white/80">Thank you for joining us.</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators */}
        {!subscribed && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-8 mt-8 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span>Unsubscribe anytime</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ComingSoonSection;