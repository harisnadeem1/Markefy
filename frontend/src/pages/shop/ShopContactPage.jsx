import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Mail, Phone, MapPin, Clock, User, MessageSquare, ArrowRight } from "lucide-react";

const ShopContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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

    setForm({ name: "", email: "", message: "" });
    showToast("Your message has been sent successfully. We will get back to you shortly.", "success");

    fetch(`${import.meta.env.VITE_API_BASE_URL}/forms/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      showToast("There was an issue sending your message. Please try again later.", "error");
    });
  };

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
        {/* Heading */}
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
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions about our products, need support, or want to discuss a partnership?
            Reach out—we’d love to hear from you.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Details</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <p><strong>Email:</strong> support@markefy.ai</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <p><strong>Phone:</strong> +40 123 456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p><strong>Address:</strong> Str. Dunarii Nr 146-148, Bragadiru, Romania</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1" />
                <p>
                  <strong>Business Hours:</strong><br />
                  Mon – Fri: 9:00 AM – 6:00 PM (EET)<br />
                  Sat: 10:00 AM – 2:00 PM<br />
                  Sun: Closed
                </p>
              </div>
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
                Send us a message
              </h3>
              <p className="text-gray-600">We’ll get back to you within 24 hours</p>
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
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  className="w-full border border-gray-300 rounded-2xl pl-12 pr-4 py-4 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
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

export default ShopContactPage;
