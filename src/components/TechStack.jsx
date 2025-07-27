import React from 'react';
import { motion } from 'framer-motion';

const techRow1 = [
  'Docker', 'Vue.js', 'AWS', 'Python', 'TypeScript', 'Node.js', 'Django', 'React', 'Angular', 'Kubernetes'
];
const techRow2 = [
  'Swift', 'Kotlin', 'Flask', '.NET', 'Next.js', 'Microsoft Azure', 'Firebase', 'JavaScript', 'PostgreSQL', 'MySQL'
];

const InfiniteScroller = ({ children, direction }) => {
  return (
    <div className="scroller" data-direction={direction}>
      <div className="scroller__inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-24 bg-[#1A2E29] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We've Got Your Tech Stack Covered
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With a proven record of solving challenges for over a decade, our experienced team can guide you to the best technological solutions and practices.
          </p>
        </motion.div>
      </div>

      <div className="space-y-8">
        <InfiniteScroller direction="left">
          {techRow1.map((tech, index) => (
            <div key={index} className="flex items-center space-x-3 mx-6">
              <span className="text-2xl font-medium">{tech}</span>
            </div>
          ))}
        </InfiniteScroller>
        <InfiniteScroller direction="right">
          {techRow2.map((tech, index) => (
            <div key={index} className="flex items-center space-x-3 mx-6">
              <span className="text-2xl font-medium">{tech}</span>
            </div>
          ))}
        </InfiniteScroller>
      </div>
    </section>
  );
};

export default TechStack;