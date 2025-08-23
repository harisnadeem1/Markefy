

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Users, Shield, HeartHandshake } from 'lucide-react';

const strengthsData = [
  {
    icon: Settings,
    title: "Custom-Tailored Solutions",
    description: "Every project is designed around your unique business goals and audience."
  },
  {
    icon: Users,
    title: "Full-Service Expertise",
    description: "From software development to paid ads, we handle everything in-house."
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Clear communication, no hidden costs, and regular progress updates."
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't just deliver projects — we help you grow long term."
  }
];

const TangibleResults = () => {
  return (
    <section className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              <Lightbulb className="w-4 h-4 mr-2 text-blue-400" />
              Why Brands Choose Markefy
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Real{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We focus on delivering real results with strategies tailored to your business, not just big numbers.
            </p>
          </motion.div>
        </div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengthsData.map((strength, index) => {
            const IconComponent = strength.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-[#1C1C1C] rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-800 hover:border-blue-500/30 hover:-translate-y-2 relative overflow-hidden h-full">
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300 mb-6">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {strength.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe every business deserves personalized attention and strategies that actually work for their specific needs and goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TangibleResults;