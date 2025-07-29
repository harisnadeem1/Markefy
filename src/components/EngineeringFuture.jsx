import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const EngineeringFuture = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Section */}
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
             At Markefy, we empower businesses with next‑level digital solutions that merge cutting-edge software development, web design, SEO strategies, and result-driven ad campaigns.
Our mission is to craft experiences that not only look stunning but also drive measurable growth for your brand.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             From custom web applications to scalable software systems, from SEO optimization that boosts visibility to data-driven ad campaigns that maximize ROI — we ensure your business stays ahead in the competitive digital landscape.
            </p>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button 
                onClick={onNotImplemented}
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-base font-semibold"
              >
                Learn more <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Green box behind image (desktop only) */}
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 border-2 border-blue-400 rounded-2xl -translate-y-1/4 translate-x-1/4 z-10"></div>

            {/* Desktop awards (above image) */}
            <div className="hidden md:block bg-white p-8 rounded-xl shadow-2xl relative z-20 mb-[-5rem] max-w-lg -ml-8">
              <div className="flex justify-around items-center">
                <img className="h-24" alt="Software Winner 2022 award badge" src="/public/awards/awards2022_winner_badge.webp" />
                <img className="h-24" alt="DevOps Winner 2021 award badge" src="/public/awards/awards2021_winner_badge.webp" />
                <img className="h-24" alt="North American Finalist 2021 award badge" src="/public/awards/awards2021_finalist_badge.webp" />
              </div>
            </div>

            {/* Main image */}
            <div className="rounded-xl overflow-hidden shadow-xl relative z-10">
              <img className="w-full h-auto" alt="Creative team working in a modern office" src="/public/awards/diverse-people-working-office-markefy.webp" />
            </div>

            {/* Mobile awards + button */}
            <div className="md:hidden mt-6 space-y-4">
              <div className="flex justify-around items-center gap-4">
                <img className="h-20" alt="Software Winner 2022 award badge" src="/public/awards/awards2022_winner_badge.webp" />
                <img className="h-20" alt="DevOps Winner 2021 award badge" src="/public/awards/awards2021_winner_badge.webp" />
                <img className="h-20" alt="North American Finalist 2021 award badge" src="/public/awards/awards2021_finalist_badge.webp" />
              </div>

              {/* Mobile full-width button */}
              <Button 
                onClick={onNotImplemented}
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-base font-semibold w-full mt-20"
              >
                Learn more <ArrowRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringFuture;
