import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    title: "Talking about your idea",
    description: "Tell us about your vision, problems to solve, and expectations. We're all ears!"
  },
  {
    title: "Defining the goal",
    description: "Refine your product's purpose to boost its chances of thriving on the market."
  },
  {
    title: "Setting the strategy",
    description: "Make your product a standout success story. Set the strategy, then get a plan with the timeline, budget, and more."
  },
  {
    title: "Researching market needs",
    description: "UX researchers do a deep dive into what users actually want. We use these insights to fine-tune the strategy."
  },
  {
    title: "Creating your product",
    description: "It's go time for designing, coding and testing — bringing your idea to life!"
  },
  {
    title: "Further development",
    description: ""
  },
  {
    title: "Launching to market",
    description: ""
  },
];

const Process = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's turn your idea into a <br /> 
            <span className="relative inline-block">
              success story.
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 -z-10 translate-y-1"></span>
            </span>
            {' '}Step by step. <br />Together.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className={`relative flex items-start space-x-6 ${index % 2 !== 0 ? 'md:self-end md:text-right md:flex-row-reverse md:space-x-reverse' : ''}`}
              >
                <div className={`w-10 h-10 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center text-black font-bold text-lg`}>
                  {index + 1}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  {index === 0 && (
                     <Button variant="outline" size="sm" onClick={onNotImplemented} className="rounded-full border-gray-400 hover:bg-gray-100">
                        START THIS STEP
                     </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;