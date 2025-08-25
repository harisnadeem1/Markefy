import React from "react";
import { Link } from "react-router-dom";
const InstallSteps = () => {
  const steps = [
    {
      number: "1",
      title: "Get the code",
      description: "After your purchase, you'll get a link.",
    },
    {
      number: "2",
      title: "Copy & paste the code",
      description: "Don't worry, it's easy. We'll guide you.",
    },
    {
      number: "3",
      title: "Add & style your content",
      description: "Customize the new section to your liking.",
    },
  ];

  return (
    <section
      className="py-16 bg-white text-center"
      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
    >
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2" style={{ color: "#0071bc" }}>
        Install within minutes
      </h2>
      <p className="text-gray-700 mb-12">
        Customize your Shopify website with a quick, intuitive 3-step setup:
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              className="w-20 h-20 flex items-center justify-center rounded-full text-3xl font-semibold mb-4"
              style={{
                fontFamily: "'Inconsolata', monospace",
                color: "#0071bc",
                backgroundColor: "#f5f5f5",
              }}
            >
              {step.number}
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
            <p
              className="text-gray-600 text-sm"
              style={{ fontFamily: "'Inconsolata', monospace" }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link to="/shop/collection">
  <button
    className="px-6 py-2 rounded font-medium transition"
    style={{
      fontFamily: "'Inconsolata', monospace",
      backgroundColor: "#0071bc",
      color: "#ffffff",
    }}
  >
    GET STARTED
  </button>
</Link>
    </section>
  );
};

export default InstallSteps;
