import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Globe, Sparkles, Shield, Zap, ArrowRight, Mail, Phone, User, MessageSquare, Calendar, DollarSign } from "lucide-react";

const CustomWebsiteRequest = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    budget: "",
    timeframe: ""
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 4000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { ...form };

    setForm({ name: "", email: "", phone: "", description: "", budget: "", timeframe: "" });
    showToast("Your request has been sent successfully! We'll get back to you soon.", "success");

    fetch(`${import.meta.env.VITE_API_BASE_URL}/forms/custom-request`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      showToast("There was an issue sending your request. Please try again.", "error");
    });
  };

  const features = [
    "Custom, modern designs aligned with your brand identity",
    "Fully responsive layouts optimized for all devices", 
    "SEO-ready structure to improve online visibility",
    "Secure, scalable architecture built on best practices",
    "Dedicated support and clear communication throughout the project"
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Toast Notification */}
      {toast.show && (
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed top-6 right-6 z-50"
        >
          <div
            className={`
              px-6 py-4 rounded-2xl shadow-2xl border max-w-md backdrop-blur-sm
              ${toast.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : "bg-red-50 border-red-200 text-red-800"
              }
            `}
          >
            <div className="flex items-center">
              <div className="flex-1 flex items-center gap-3">
                {toast.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <X className="w-5 h-5" />
                )}
                <p className="text-sm font-medium">{toast.message}</p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: "", type: "success" })}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
          >
            <Globe className="w-4 h-4 mr-2" />
            Custom Development
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Request a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Custom Website
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every business is unique, and your website should reflect that. Share your vision, timeline, and budget, and our team will deliver a tailored solution that matches your goals, industry standards, and target audience.
          </p>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  What you can expect
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our custom website service is designed to help businesses of all sizes build a professional online presence. From strategy and design to development and deployment, we handle the entire process with a focus on quality, scalability, and results.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Secure", desc: "Enterprise-grade security" },
                { icon: Zap, title: "Fast", desc: "Optimized performance" },
                { icon: Globe, title: "Scalable", desc: "Growth-ready architecture" }
              ].map((prop, index) => {
                const IconComponent = prop.icon;
                return (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{prop.title}</h3>
                    <p className="text-sm text-gray-600">{prop.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Tell us about your project
              </h3>
              <p className="text-gray-600">We'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <input
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Project Description"
                  required
                />
              </div>

              <div className="relative">
                <DollarSign className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <select
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Estimated Budget</option>
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $15k">$10k - $15k</option>
                  <option value="$15k - $20k">$15k - $20k</option>
                  <option value="Above $20k">Above $20k</option>
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <select
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  name="timeframe"
                  value={form.timeframe}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time Frame</option>
                  <option value="Less than a week">Less than a week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="More than a month">More than a month</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Request
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomWebsiteRequest;