import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, MapPin } from 'lucide-react';

const LetsTalk = ({ onNotImplemented }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onNotImplemented && onNotImplemented();
  };

  return (
    <section className="bg-black py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0B0B0B] border border-gray-800 rounded-3xl p-8 md:p-16 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Have a project in mind? Let's talk.
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Bring your ideas to us and we will make them a reality. Our team of experts is ready to collaborate with you to create something truly amazing.
              </p>
              
              {/* Contact Form */}
              <div className="space-y-4 mb-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>
              </div>

              <Button 
                onClick={() => {
                  // Handle form submission here
                  console.log('Form submitted:', formData);
                  onNotImplemented && onNotImplemented();
                }}
                className="bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Start Your Project
              </Button>

              {/* Contact Details - Mobile Only */}
              <div className="mt-8 lg:hidden">
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">support@markefy.ai</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-center">Str. Dunarii Nr 146-148, Bragadiru, Romania</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 mb-8">
                {/* Outer rotating gradient ring */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Dashed border ring */}
                <motion.div 
                  className="absolute inset-4 rounded-full border-2 border-dashed border-gray-600"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Inner glow effect */}
                <motion.div 
                  className="absolute inset-10 rounded-full bg-gradient-to-bl from-teal-400/20 to-blue-600/20 blur-xl"
                  animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
                />
                
                {/* Main circle with rocket */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-2xl shadow-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    
                    {/* Rocket with diagonal movement animation */}
                    <motion.div
                      animate={{ 
                        x: [-10, 10, -10],
                        y: [10, -10, 10]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <Rocket className="w-20 h-20 md:w-24 md:h-24 text-white transform -rotate-25" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Contact Details - Desktop Only */}
              <div className="hidden lg:block">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>support@markefy.ai</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Str. Dunarii Nr 146-148, Bragadiru, Romania</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;