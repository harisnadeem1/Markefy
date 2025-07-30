import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const processSteps = [
  {
    title: "Talking About Your Idea",
    description: "Share your vision, challenges, and goals — we’re ready to listen and understand.",
    hasButton: true
  },
  {
    title: "Research & Planning",
    description: "We analyze your market, competitors, and requirements to create a winning plan.",
    hasButton: false
  },
  {
    title: "Strategy & Proposal",
    description: "Get a clear roadmap with timelines, deliverables, and a strategy tailored to your needs.",
    hasButton: false
  },
  {
    title: "Design & Prototyping",
    description: "We turn ideas into visual designs and interactive prototypes for your feedback.",
    hasButton: false
  },
  {
    title: "Development",
    description: "Our team builds your product with clean code, best practices, and scalable architecture.",
    hasButton: false
  },
  {
    title: "Testing & Quality Assurance",
    description: "Every feature is tested for performance, security, and usability before launch.",
    hasButton: false
  },
  {
    title: "Launch & Delivery",
    description: "Your project goes live! We ensure a smooth handover and full deployment.",
    hasButton: false
  },
  {
    title: "Ongoing Support & Growth",
    description: "We provide updates, improvements, and marketing support to help you grow.",
    hasButton: false
  }
];


const AnimatedTitle = () => {

  const titleText = "Let's turn your idea into a success story. Step by step. Together.";
  const words = titleText.split(' ');
  
  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-3 mb-2">
          {word === 'success' || word === 'story.' ? (
            <span className="relative inline-block">
              <span className="relative z-10 px-2">
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: (wordIndex * 0.1) + (charIndex * 0.05),
                      ease: "easeOut"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-200 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: wordIndex * 0.1 + 0.3 }}
                style={{ originX: 0 }}
              />
            </span>
          ) : (
            word.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (wordIndex * 0.1) + (charIndex * 0.05),
                  ease: "easeOut"
                }}
              >
                {char}
              </motion.span>
            ))
          )}
        </span>
      ))}
    </motion.h1>
  );
};

const Process = ({ onNotImplemented = () => alert('Not implemented yet!') }) => {
    const navigate = useNavigate();
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <AnimatedTitle />
        </div>

        <div className="relative">
          {/* Animated SVG Path - Keep original for all screens */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 1800" 
              className="absolute top-0 left-0"
            >
              <motion.path
                d="M500 100 Q750 200 500 300 Q250 400 500 500 Q750 600 500 700 Q250 800 500 900 Q750 1000 500 1100 Q250 1200 500 1300 Q750 1400 500 1500 Q250 1600 300 1700"
                stroke="#d1d5db"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Mobile Straight Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 lg:hidden">
            <motion.div
              className="w-full bg-gray-400"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* Steps Layout */}
          <div className="space-y-8 lg:space-y-24 relative z-10">
            {processSteps.map((step, index) => {
              // First card centered, then alternate left/right (unchanged for desktop)
              const getAlignment = () => {
                if (index === 0) return 'center';
                return index % 2 === 1 ? 'left' : 'right';
              };
              
              const alignment = getAlignment();
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Mobile Layout */}
                  <div className="flex items-start space-x-4 w-full lg:hidden">
                    {/* Step Number */}
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    {/* Card */}
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        {step.hasButton && (
                          <motion.button
                            onClick={() => navigate('/contact')}
                            className="px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            START THIS STEP
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Unchanged */}
                  <div className={`hidden lg:flex ${
                    alignment === 'center' 
                      ? 'justify-center' 
                      : alignment === 'left' 
                        ? 'justify-start lg:justify-start' 
                        : 'justify-end lg:justify-end'
                  }`}>
                    <div className={`w-full max-w-md ${
                      alignment === 'center' 
                        ? '' 
                        : alignment === 'left' 
                          ? 'lg:ml-8' 
                          : 'lg:mr-8'
                    }`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="flex items-start space-x-6">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {index + 1}
                          </motion.div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {step.description}
                            </p>
                            {step.hasButton && (
                              <motion.button
                                onClick={() => navigate('/contact')}
                                className="px-6 py-2 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                START THIS STEP
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;