import React from 'react';
import { motion } from 'framer-motion';

const resultsData = [
  {
    value: "13 days",
    description: "is all you need to onboard extra talent to your project"
  },
  {
    value: "99%",
    description: "faster content creation process—from 4 hours to 45 sec—for a European edtech"
  },
  {
    value: "60%",
    description: "more user engagement with hyper-personalization for a US proptech"
  },
  {
    value: "77%",
    description: "faster page speed for a meal delivery app"
  }
];

const TangibleResults = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-bold"
          >
            See <span className="text-green-400">tangible results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-lg text-gray-300"
          >
            Over the years we've created a unique process that delivers exceptional results with blazing-fast efficiency.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resultsData.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#1C1C1C] p-8 rounded-lg"
            >
              <h3 className="text-5xl font-bold mb-4">{result.value}</h3>
              <p className="text-gray-400">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TangibleResults;