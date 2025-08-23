import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Mail, MapPin, CheckCircle, X } from 'lucide-react';

const Toast = ({ message, type, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-xl ${
        type === 'success' 
          ? 'bg-green-600 text-white' 
          : 'bg-red-600 text-white'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <X className="w-5 h-5" />
      )}
      <span className="font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const LetsTalk = ({ onNotImplemented }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showToast = (message, type = 'success') => {
    setToast({
      isVisible: true,
      message,
      type
    });
    
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast('Please enter a valid email address', 'error');
      return;
    }

    setIsSubmitting(true);
    
    // Immediate UI feedback - clear form and show success message
    clearForm();
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Send email in the background (fire and forget)
    try {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).catch((err) => {
    // Silently handle errors - user already got positive feedback
    console.error("Background email error:", err);
  });
} 
 catch (err) {
      // Silently handle errors
      console.error("Background email error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      
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
                  <motion.div
                    animate={formData.name ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={formData.email ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </motion.div>
                  
                  <motion.div
                    animate={formData.message ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Tell us about your project"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    />
                  </motion.div>
                  
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:bg-blue-600 hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </div>
                    ) : (
                      'Start Your Project'
                    )}
                  </Button>
                </div>

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
    </>
  );
};

export default LetsTalk;