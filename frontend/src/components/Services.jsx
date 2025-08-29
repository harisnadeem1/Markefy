import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Search, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Services = ({ onNotImplemented }) => {
  const { t } = useTranslation();
const services = t("home.services.items", { returnObjects: true });

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
    <div className="bg-black">
    <section className="py-24 bg-[#111111] text-white rounded-t-[40px]  lg:rounded-t-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 lg:mb-16 px-4 sm:px-6 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">{t("home.services.section_title_line1")}</p>
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">{t("home.services.section_title_line2")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <p className="text-base sm:text-lg text-gray-300">
               {t("home.services.section_subtitle")}
            </p>
          </motion.div>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((service, index) => {
    // assign icons manually since translation JSON won’t store JSX
    const icons = [Code, Monitor, Search, Megaphone];
    const IconComponent = icons[index];

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="bg-[#1C1C1C] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:bg-[#222222] hover:-translate-y-2 cursor-pointer"
        onClick={() => navigate('/services')}
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
    </div>
  );
};

export default Services;