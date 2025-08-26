import React, { useState } from "react";

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

  return (
    <section className="w-full py-20 bg-gray-50 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-6 right-6 z-50 animate-slide-in">
          <div
            className={`
              px-6 py-4 rounded-lg shadow-lg border-l-4 max-w-md
              ${toast.type === "success"
                ? "bg-white border-green-500 text-black"
                : "bg-white border-red-500 text-black"
              }
            `}
          >
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

      {/* Page Heading */}
      <div className="text-center mb-14 px-6">
        <h1
          className="text-4xl font-extrabold mb-4"
          style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#0071bc" }}
        >
          Request a Custom Website
        </h1>
        <p
          className="text-gray-700 max-w-3xl mx-auto text-lg"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Every business is unique, and your website should reflect that. 
          Share your vision, timeline, and budget, and our team will deliver a tailored solution 
          that matches your goals, industry standards, and target audience.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Column: Description */}
        <div className="flex flex-col justify-center">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif", color: "#0071bc" }}
          >
            What you can expect
          </h2>
          <p
            className="text-gray-600 leading-relaxed mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Our custom website service is designed to help businesses of all sizes build 
            a professional online presence. From strategy and design to development and 
            deployment, we handle the entire process with a focus on quality, scalability, 
            and results.
          </p>
          <ul
            className="list-disc list-inside text-gray-600 space-y-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <li>Custom, modern designs aligned with your brand identity</li>
            <li>Fully responsive layouts optimized for all devices</li>
            <li>SEO-ready structure to improve online visibility</li>
            <li>Secure, scalable architecture built on best practices</li>
            <li>Dedicated support and clear communication throughout the project</li>
          </ul>
        </div>

        {/* Right Column: Form */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: "#0071bc" }}>
            Tell us about your project
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
            />
            <textarea
              className="w-full border rounded-lg p-3 h-28 focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Project Description"
              required
            />

            {/* Budget Dropdown */}
            <select
              className="w-full border rounded-lg p-3 bg-white focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
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

            {/* Timeframe Dropdown */}
            <select
              className="w-full border rounded-lg p-3 bg-white focus:outline-none focus:ring-2"
              style={{ fontFamily: "'Inconsolata', monospace", borderColor: "#0071bc" }}
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

            <button
              type="submit"
              className="w-full font-semibold px-6 py-3 rounded-lg transition"
              style={{ backgroundColor: "#0071bc", color: "#fff" }}
            >
              Submit Request
            </button>
          </form>
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

export default CustomWebsiteRequest;
