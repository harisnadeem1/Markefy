
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Zap, Target } from 'lucide-react';

const WhyMarkefy = ({ onNotImplemented }) => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Engineering the Future of{' '}
              <span className="gradient-text">AI-Ready Digital</span>{' '}
              Experiences
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Markefy builds SEO-optimized, performance-driven websites and software using modern frameworks and AI tools. We combine cutting-edge technology with proven strategies to deliver exceptional digital experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, text: "Industry Leader" },
                { icon: Users, text: "Expert Team" },
                { icon: Zap, text: "Fast Delivery" },
                { icon: Target, text: "Results Driven" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="h-6 w-6 text-blue-600" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              onClick={onNotImplemented}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img  class="w-full h-auto rounded-lg shadow-xl" alt="Creative team collaborating on digital projects" src="https://images.unsplash.com/photo-1531497258014-b5736f376b1b" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMarkefy;
