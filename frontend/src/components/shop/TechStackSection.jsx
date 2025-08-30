import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Code, Palette, Zap, ArrowRight } from "lucide-react";

const TechStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStack = [
    {
      id: "html",
      name: "HTML5",
      description: "Modern semantic markup providing solid foundation and structure",
      img: "/shop/logo/html.png",
      icon: Code,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverBg: "hover:bg-orange-100",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
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
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
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
      description: "Interactive functionality bringing your components to life",
      img: "/shop/logo/java.png",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      hoverBg: "hover:bg-yellow-100",
      gradientFrom: "from-yellow-500",
      gradientTo: "to-amber-500",
      features: [
        "Event Handling",
        "Dynamic Content",
        "User Interactions",
        "API Integration",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-8"
          >
            <Code className="w-4 h-4 mr-2" />
            Complete Tech Stack
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Complete Solutions in{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Every Snippet
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every code snippet includes HTML, CSS, and JavaScript working together as a complete, ready-to-use solution
          </p>
        </motion.div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {techStack.map((tech, idx) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.id}
                className={`group relative bg-white border-2 ${tech.borderColor} rounded-3xl p-8 transition-all duration-500 hover:border-opacity-50 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden`}
                onMouseEnter={() => setHoveredTech(tech.id)}
                onMouseLeave={() => setHoveredTech(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradientFrom} ${tech.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon & Image */}
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {tech.img ? (
                      <img
                        src={tech.img}
                        alt={tech.name}
                        className="w-16 h-16 object-contain"
                      />
                    ) : (
                      <IconComponent className={`w-16 h-16 ${tech.color}`} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 text-center relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 pt-4">
                    {tech.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + featureIdx * 0.1 }}
                        className="flex items-center gap-3 justify-center"
                      >
                        <CheckCircle className={`w-5 h-5 ${tech.color}`} />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Three Technologies, One Perfect Solution
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Each snippet is a complete package combining HTML structure, CSS styling, and JavaScript functionality. 
            No missing pieces, no additional dependencies - just copy, paste, and customize.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: CheckCircle, title: "Ready to Use", desc: "Instant implementation" },
              { icon: Code, title: "Clean Code", desc: "Well-structured & documented" },
              { icon: Zap, title: "No Dependencies", desc: "Self-contained solutions" },
              { icon: Palette, title: "Customizable", desc: "Easy to modify & brand" }
            ].map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <BenefitIcon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Explore All Snippets
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;