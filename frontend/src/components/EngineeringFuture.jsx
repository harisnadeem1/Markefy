import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const EngineeringFuture = ({ onNotImplemented }) => {
  const navigate = useNavigate();
    const { t } = useTranslation();
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
             {t("home.future.title_line1")}{' '}
              <span className="text-blue-600">{t("home.future.title_highlight")}</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
             {t("home.future.para1")}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
             {t("home.future.para2")}
             </p>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => navigate('/about')}
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-base font-semibold"
              >
                {t("home.future.cta")}<ArrowRight className="ml-2 h-5 w-5" />
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
            <div className="hidden md:block absolute top-0 right-0 w-96 h-96 border-2 border-blue-400 rounded-2xl -translate-y-1/4 translate-x-1/4 z-10"></div>

          
            <div className="rounded-xl overflow-hidden shadow-xl relative z-10">
              <img className="w-full h-auto" alt="Creative team working in a modern office" src="/awards/diverse-people-working-office-markefy.webp" />
            </div>

            <div className="md:hidden mt-6 space-y-4">
             

              <Button
                onClick={() => navigate('/about')}
                className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 py-4 text-base font-semibold w-full "
              >
               {t("home.future.cta")} <ArrowRight className="ml-2 h-5 w-5 " />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringFuture;
