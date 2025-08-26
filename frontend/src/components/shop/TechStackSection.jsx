import React, { useState } from "react";
import { motion } from "framer-motion";

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      id: "html",
      name: "HTML5",
      description:
        "Modern semantic markup providing solid foundation and structure",
      img: "/shop/logo/html.png", // 👉 put your image in /public/icons/html.png
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100",
      features: [
        "Semantic Structure",
        "Accessibility Ready",
        "SEO Optimized",
        "Form Elements",
      ],
    },
    {
      id: "css",
      name: "CSS3",
      description: "Beautiful styling with animations and responsive layouts",
      img: "/shop/logo/css.png",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100",
      features: [
        "Modern Layouts",
        "Smooth Animations",
        "Responsive Design",
        "Custom Properties",
      ],
    },
    {
      id: "javascript",
      name: "JavaScript",
      description:
        "Interactive functionality bringing your components to life",
      img: "/shop/logo/java.png",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      hoverBg: "hover:bg-yellow-100",
      features: [
        "Event Handling",
        "Dynamic Content",
        "User Interactions",
        "API Integration",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-normal mb-4 tracking-tight"
            style={{ color: "#0071bc" }}
          >
            Complete Solutions in Every Snippet
          </h2>
          <div className="w-20 h-0.5 bg-[#0071bc] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Every code snippet includes HTML, CSS, and JavaScript working
            together as a complete, ready-to-use solution
          </p>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.id}
              className={`group relative ${tech.bgColor} ${tech.borderColor} border-2 rounded-2xl p-8 transition-all duration-300 ${tech.hoverBg} hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <motion.img
                  src={tech.img}
                  alt={tech.name}
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-2 pt-2">
                  {tech.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 justify-center"
                    >
                      <svg
                        className={`w-4 h-4 ${tech.color}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`absolute inset-0 ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Three Technologies, One Perfect Solution
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each snippet is a complete package combining HTML structure, CSS
              styling, and JavaScript functionality. No missing pieces, no
              additional dependencies - just copy, paste, and customize.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Complete Solutions", value: "100%" },
              { label: "External Dependencies", value: "0" },
              { label: "Ready", value: "To Use" },
              { label: "Browsers Supported", value: "All" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: "#0071bc" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="inline-flex items-center px-8 py-4 bg-[#0071bc] text-white font-medium rounded-full transition-transform duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
            Explore All Snippets
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
