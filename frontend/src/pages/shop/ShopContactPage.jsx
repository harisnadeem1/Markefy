import React, { useState } from "react";

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

    // Store form data before clearing
    const formData = { ...form };

    // Instantly clear form + show toast
    setForm({ name: "", email: "", message: "" });
    showToast("Your message has been sent successfully. We will get back to you shortly.", "success");

    // Fire & forget backend call
    fetch(`${import.meta.env.VITE_API_BASE_URL}/forms/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      showToast("There was an issue sending your message. Please try again later.", "error");
    });
  };

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div className={`
            px-6 py-4 rounded-lg shadow-lg border-l-4 max-w-md
            ${toast.type === "success" 
              ? "bg-white border-green-500 text-black" 
              : "bg-white border-red-500 text-black"
            }
          `}>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium">{toast.message}</p>
              </div>
              <button
                onClick={() => setToast({ show: false, message: "", type: "success" })}
                className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Heading */}
      <div className="text-center mb-14 px-6">
        <h1
          className="text-4xl font-extrabold text-blue-700 mb-4"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Contact Us
        </h1>
        <p
          className="text-gray-700 max-w-3xl mx-auto text-lg"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Have questions about our products, need technical support, or want to
          discuss a partnership? Our team is here to help you. Reach out using
          the details below or send us a message directly through the form.
        </p>
      </div>

      {/* Two Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Column: Company Info */}
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-2xl p-8">
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Company Details
          </h2>

          <div className="space-y-4 text-gray-600">
            <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <strong>Email:</strong> support@markefy.ai
            </p>
            <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <strong>Phone:</strong> +40 123 456 789
            </p>
            <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <strong>Address:</strong> Str. Dunarii Nr 146-148, Bragadiru,
              Romania
            </p>
            <p style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <strong>Business Hours:</strong>
              <br /> Monday – Friday: 9:00 AM – 6:00 PM (EET)
              <br /> Saturday: 10:00 AM – 2:00 PM
              <br /> Sunday: Closed
            </p>
          </div>

          <div className="mt-6">
            <h3
              className="text-lg font-semibold text-gray-800 mb-2"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Our Commitment
            </h3>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              We aim to respond to all inquiries within 24 hours on business
              days. Whether it's a product question, a technical issue, or a
              collaboration request, our dedicated team ensures you get clear
              and helpful answers quickly.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-6 text-center">
            Send us a message
          </h3>

          <div className="space-y-5">
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ fontFamily: "'Inconsolata', monospace" }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ fontFamily: "'Inconsolata', monospace" }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ fontFamily: "'Inconsolata', monospace" }}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ShopContactPage;