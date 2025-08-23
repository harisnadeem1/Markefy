import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Search, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const servicesData = [
  { 
    icon: Code, 
    title: "Custom Software Development", 
    desc: "We develop custom solutions that fit your exact needs—whether it's a web platform, enterprise tool, or automation system. Every project is built for performance, security, and scalability from day one.",
    linkText: "SOFTWARE DEVELOPMENT"
  },
  { 
    icon: Monitor, 
    title: "Website Design & Development", 
    desc: "We design and develop fast, secure, and stunning websites that turn visitors into customers. Whether it's eCommerce, corporate, or portfolio — we make it shine and perform.",
    linkText: "WEB DEVELOPMENT"
  },
  { 
    icon: Search, 
    title: "SEO & Search Visibility", 
    desc: "Our SEO strategies put your brand in front of the right audience. From keyword research to technical optimization, we ensure your site ranks higher and drives targeted traffic.",
    linkText: "SEO SERVICES"
  },
  { 
    icon: Megaphone, 
    title: "Ads & Marketing Campaigns", 
    desc: "We create data-driven ad campaigns on Google, Facebook, Instagram, and more — maximizing ROI with precise targeting, creative visuals, and continuous optimization.",
    linkText: "DIGITAL MARKETING"
  },
  
];

const Services = ({ onNotImplemented }) => {
  const navigate = useNavigate();
  // Arrow animation: come in, go out, come back
  const arrowAnimation = {
    x: [0, 8, -8, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.3, 0.7, 1],
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-24 bg-[#111111] text-white rounded-t-[40px]  lg:rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-6 lg:px-0">
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="lg:col-span-1"
  >
    <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Specialized Engineering,</p>
    <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">Faster Results.</p>
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="lg:col-span-2"
  >
    <p className="text-base sm:text-lg text-gray-300">
      We help businesses leverage AI, automation, and modern software solutions to work smarter, scale faster, and stay ahead. Our expert team transforms your vision into powerful, scalable, and future-ready systems.
    </p>
  </motion.div>
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
             <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
  className="bg-[#1C1C1C] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 cursor-pointer"
  onClick={() => navigate('/services')} // ⬅ Redirect to /services
>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <motion.div 
                      className="w-12 h-12 bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white"
                      whileHover={arrowAnimation}
                    >
                      <ArrowRight className="h-6 w-6 text-white transition-all duration-300 group-hover:text-black" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8">{service.desc}</p>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                   <span>{service.linkText}</span>
                   <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;