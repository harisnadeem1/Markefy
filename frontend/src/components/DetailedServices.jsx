import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Monitor, Search, Megaphone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const DetailedServices = () => {
  const { t } = useTranslation();
    const navigate = useNavigate();
  const services = t("home.detailedservices.items", { returnObjects: true });
  const icons = [Code, Monitor, Search, Megaphone];

  return (
    <section className="py-14 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
         <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t("home.detailedservices.heading.part1")}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                 {t("home.detailedservices.heading.highlight")}
              </span>{' '}
             {t("home.detailedservices.heading.part2")}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
             {t("home.detailedservices.subheading")}
               </p>
          </motion.div>
        </div>
       {services.map((service, index) => {
          const IconComponent = icons[index];
          const order = index % 2 === 1 ? "image-first" : "text-first";

          return (
            <div key={index} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Text */}
              <motion.div
                className={`space-y-6 ${order === 'image-first' ? 'md:order-2' : 'md:order-1'}`}
                initial={{ opacity: 0, x: order === 'image-first' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-blue-600 tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>

                {/* Mobile Image */}
                <div className="md:hidden">
                  <img src={service.image} alt={service.imageAlt} className="rounded-lg shadow-lg" />
                </div>

                <Button
                  onClick={() => navigate('/services')}
                  variant="outline"
                  className="rounded-full border-gray-400 hover:bg-gray-100 text-black px-6 py-3"
                >
                  {t("home.detailedservices.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Desktop Image */}
              <div className={`hidden md:block ${order === 'image-first' ? 'md:order-1' : 'md:order-2'}`}>
                <img src={service.image} alt={service.imageAlt} className="rounded-lg shadow-lg" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DetailedServices;