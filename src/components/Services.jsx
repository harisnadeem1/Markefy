
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cloud, Palette, Cpu } from 'lucide-react';

const servicesData = [
  { 
    icon: Cpu, 
    title: "AI & Data Strategy", 
    desc: "Use AI to turn your big data into valuable insights that reveal patterns and predictions for smarter decisions.",
    linkText: "AI DEVELOPMENT"
  },
  { 
    icon: Cloud, 
    title: "Cloud & DevOps Solutions", 
    desc: "Optimize your operations with Cloud strategies that cut IT costs, drive growth, and increase efficiency.",
    linkText: "CLOUD SERVICES"
  },
  { 
    icon: Palette, 
    title: "Product Design & Strategy", 
    desc: "Improve your product's value through user-friendly design, smooth experiences, and intuitive interfaces.",
    linkText: "PRODUCT DESIGN"
  },
  { 
    icon: Code, 
    title: "Custom Software Development", 
    desc: "Grow your software project with our team of 500+ skilled engineers who are committed to your success.",
    linkText: "SOFTWARE DEVELOPMENT"
  }
];

const Services = ({ onNotImplemented }) => {
  return (
    <section className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Specialized Engineering,</p>
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Accelerated Deployment</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-gray-300">
              Over the past 20 years, we've built a team of 500+ specialized engineers who evolved from Python pioneers to AI and data engineering leaders. This deep expertise means your critical projects are built right and deployed faster.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#1C1C1C] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 cursor-pointer"
              onClick={onNotImplemented}
            >
              <div>
                <div className="flex justify-end mb-6">
                   <div className="w-12 h-12 bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white">
                      <ArrowRight className="h-6 w-6 text-white transition-all duration-300 group-hover:text-black" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8">{service.desc}</p>
              </div>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                 <span>{service.linkText}</span>
                 <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
