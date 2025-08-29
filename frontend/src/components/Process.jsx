import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const AnimatedTitle = ({ text }) => {
  const words = text.split(' ');
  return (
    <motion.h1 
      className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-3 mb-2">
          {word === 'success' || word.includes('succes') || word === 'story.' ? (
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

const Process = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const steps = t("home.process.steps", { returnObjects: true });

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <AnimatedTitle text={t("home.process.heading")} />
        </div>

        <div className="relative">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300">
              <motion.div
                className="w-full bg-gray-400"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4 w-full">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 relative z-10"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {index + 1}
                    </motion.div>
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
                            {t("home.process.cta")}
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {index + 1}
                  </motion.div>
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
                      {t("home.process.cta")}
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
