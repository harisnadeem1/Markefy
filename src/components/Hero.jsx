
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

const Hero = ({ onNotImplemented }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="absolute inset-0 tech-pattern opacity-30"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Empowering the people who run the physical economy.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            One platform to help improve the{' '}
            <span className="underline decoration-blue-500 decoration-2 underline-offset-4">Safety</span>,{' '}
            <span className="underline decoration-blue-500 decoration-2 underline-offset-4">Productivity</span>, and{' '}
            <span className="underline decoration-blue-500 decoration-2 underline-offset-4">Profitability</span>{' '}
            of your operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              onClick={onNotImplemented}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold"
              size="lg"
            >
              Get started
            </Button>
            <Button 
              onClick={onNotImplemented}
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500 rounded-full px-8 py-6 text-base font-semibold"
              size="lg"
            >
              Watch demo
            </Button>
          </div>
          
          <motion.button
            onClick={onNotImplemented}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mx-auto lg:mx-0"
          >
            <PlayCircle className="h-5 w-5" />
            <span>Discover what Markefy can do (1:25)</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-2 border-2 border-blue-500/50 rounded-2xl transition-all duration-300 group-hover:-inset-3 group-hover:border-blue-500"></div>
          <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-2xl">
             <img  class="w-full h-auto object-cover" alt="Hand holding a modern corporate credit card" src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
