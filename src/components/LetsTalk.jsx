import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const LetsTalk = ({ onNotImplemented }) => {
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
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Have a project in mind? Let's talk.
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Bring your ideas to us and we will make them a reality. Our team of experts is ready to collaborate with you to create something truly amazing.
              </p>
              <Button 
                onClick={onNotImplemented}
                className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Start Your Project
              </Button>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div 
                  className="absolute inset-4 rounded-full border-2 border-dashed border-gray-600"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div 
                  className="absolute inset-10 rounded-full bg-gradient-to-bl from-teal-400/20 to-blue-600/20 blur-xl"
                  animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', repeatType: 'mirror' }}
                />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-black rounded-full shadow-2xl shadow-blue-500/20"></div>
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