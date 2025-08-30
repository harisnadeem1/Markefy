import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, X, Lightbulb, Mail, User, MessageSquare, ArrowRight } from "lucide-react";

const SuggestionForm = () => {
  const [form, setForm] = useState({ name: "", email: "", suggestion: "" });
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

    setForm({ name: "", email: "", suggestion: "" });
    showToast("Thank you! Your suggestion has been sent successfully.", "success");

    fetch(`${import.meta.env.VITE_API_BASE_URL}/forms/suggestion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      showToast("There was an issue sending your suggestion. Please try again later.", "error");
    });
  };

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      {/* Toast */}
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
            <Lightbulb className="w-4 h-4 mr-2" />
            Suggestions
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Share Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Feedback
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your ideas help us improve Markefy. Suggest new sections, request features,
            or share improvements—we’re listening and ready to build together.
          </p>
        </motion.div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why your feedback matters</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’re committed to providing high-quality, reusable sections.
              By sharing your suggestions, you help shape our roadmap and ensure
              we deliver the tools you actually need.
            </p>
            <ul className="space-y-4">
              {[
                "Request new design sections or features",
                "Suggest improvements to existing snippets",
                "Help shape the roadmap for future updates",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl"
                >
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Submit a Suggestion
              </h3>
              <p className="text-gray-600">We’ll review and respond quickly</p>
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
                  name="suggestion"
                  value={form.suggestion}
                  onChange={handleChange}
                  placeholder="Your Suggestion"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Suggestion
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

export default SuggestionForm;
