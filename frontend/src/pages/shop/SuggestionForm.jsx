import React, { useState } from "react";

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

    // Store form data before clearing
    const formData = { ...form };

    // Clear form instantly + show toast
    setForm({ name: "", email: "", suggestion: "" });
    showToast("Thank you! Your suggestion has been sent successfully. We appreciate your feedback.", "success");

    // Fire & forget API call
    fetch(`${import.meta.env.VITE_API_BASE_URL}/forms/suggestion`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(() => {
      showToast("There was an issue sending your suggestion. Please try again later.", "error");
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
          Share Your Suggestions
        </h1>
        <p
          className="text-gray-700 max-w-3xl mx-auto text-lg"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          We're constantly improving Markefy to serve developers and designers better. 
          Your feedback and suggestions help us build new sections, refine existing code snippets, 
          and deliver the features that matter most to you.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Column: Info */}
        <div className="flex flex-col justify-center">
          <h2
            className="text-2xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Why your feedback matters
          </h2>
          <p
            className="text-gray-600 leading-relaxed mb-6"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            At Markefy, our goal is to provide high-quality, reusable website 
            sections that can be integrated into any platform. By sharing your ideas, 
            you directly influence the products we create and ensure they meet real-world needs.
          </p>
          <ul
            className="list-disc list-inside text-gray-600 space-y-3"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            <li>Request new design sections or functionality</li>
            <li>Suggest improvements to existing code snippets</li>
            <li>Help shape the roadmap for future updates</li>
          </ul>
        </div>

        {/* Right Column: Form */}
        <div
          className="bg-white shadow-lg rounded-2xl p-8"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-6 text-center">
            Submit a Suggestion
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
              className="w-full border rounded-lg p-3 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ fontFamily: "'Inconsolata', monospace" }}
              name="suggestion"
              value={form.suggestion}
              onChange={handleChange}
              placeholder="Your Suggestion"
              required
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Suggestion
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

export default SuggestionForm;