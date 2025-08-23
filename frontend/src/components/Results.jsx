
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CounterCard = ({ number, suffix, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const elementId = `counter-${label.replace(/\s+/g, '-')}`;
    const element = document.getElementById(elementId);
    
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          const target = parseInt(number);
          const duration = 2000;
          let start = 0;
          const stepTime = 16;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [number, label, isVisible]);

  return (
    <motion.div
      id={`counter-${label.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  );
};

const Results = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">See Tangible Results</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've engineered processes that drive real-world business impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard number="13" suffix=" days" label="to onboard new client" delay={0} />
          <CounterCard number="99" suffix="%" label="faster content loading" delay={0.2} />
          <CounterCard number="60" suffix="%" label="more engagement" delay={0.4} />
          <CounterCard number="77" suffix="%" label="speed improvement for clients" delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default Results;
