import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EngineeringFuture = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Engineering the future of{' '}
              <span className="text-blue-600">AI-Powered Digital Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We're pioneering the future of enterprise businesses by developing digital solutions that seamlessly integrate advanced AI, product engineering and customer-centric experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From ideation to deployment, we're committed to unlocking the boundless potential of AI to engineer experiences that reshape how people work and live.
            </p>
            
            <Button 
              onClick={onNotImplemented}
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-base font-semibold"
            >
              Learn more <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-2xl relative z-10 mb-[-5rem] max-w-md">
              <div className="flex justify-around items-center">
                <img  class="h-24" alt="Software Winner 2022 award badge" src="https://images.unsplash.com/photo-1623328683148-3bbf3bfb22de" />
                <img  class="h-24" alt="DevOps Winner 2021 award badge" src="https://images.unsplash.com/photo-1623328683148-3bbf3bfb22de" />
                <img  class="h-24" alt="North American Finalist 2021 award badge" src="https://images.unsplash.com/photo-1695480497603-381a2bee1c05" />
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white">
               <img  class="w-full h-auto" alt="Creative team working in a modern office" src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            </div>
             <div className="absolute top-0 right-0 w-48 h-48 border-2 border-green-300 rounded-2xl -translate-y-1/4 translate-x-1/4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringFuture;