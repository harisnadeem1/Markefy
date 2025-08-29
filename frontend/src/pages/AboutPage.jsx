import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { 
  Globe, 
  Users, 
  Target, 
  ArrowRight, 
  Code, 
  Smartphone, 
  Search, 
  TrendingUp, 
  PenTool, 
  CheckCircle,
  Zap,
  Shield,
  Award,
  Heart
} from 'lucide-react';

// Icon mappings for services and why choose us sections
const serviceIcons = [Code, Smartphone, Search, TrendingUp, PenTool];
const whyChooseIcons = [Zap, Target, TrendingUp, Shield];

const AboutPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleGetStarted = () => {
    toast({
      title: t('aboutPage.toast.notImplemented') || t('servicesPage.toast.notImplemented'),
    });
  };

  // Get translated data
  const stats = t('aboutPage.stats', { returnObjects: true });
  const services = t('aboutPage.services.items', { returnObjects: true });
  const whyChooseUs = t('aboutPage.whyChoose.items', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('aboutPage.meta.title')}</title>
        <meta name="description" content={t('aboutPage.meta.description')} />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('aboutPage.hero.title')}{' '}
              <span className="text-blue-600">{t('aboutPage.hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('aboutPage.hero.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                {t('aboutPage.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <motion.section 
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.story.title')}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed"
            >
              <p className="text-xl mb-6">
                {t('aboutPage.story.paragraph1')}
              </p>
              <p className="text-lg">
                {t('aboutPage.story.paragraph2')}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.services.title')}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('aboutPage.services.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const ServiceIcon = serviceIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                      <ServiceIcon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section 
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.approach.title')}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('aboutPage.approach.description')
                  .replace(t('aboutPage.approach.highlightText1'), `<strong class="text-gray-900">${t('aboutPage.approach.highlightText1')}</strong>`)
                  .replace(t('aboutPage.approach.highlightText2'), `<strong class="text-blue-600">${t('aboutPage.approach.highlightText2')}</strong>`)
                  .split('<strong').map((part, index) => {
                    if (index === 0) return part;
                    const [attrs, ...rest] = part.split('>');
                    const content = rest.join('>').split('</strong>')[0];
                    const remaining = rest.join('>').split('</strong>')[1] || '';
                    return (
                      <React.Fragment key={index}>
                        <strong className={attrs.replace('class="', '').replace('"', '')}>{content}</strong>
                        {remaining}
                      </React.Fragment>
                    );
                  })}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('aboutPage.whyChoose.title')}
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const ItemIcon = whyChooseIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('aboutPage.cta.title')}
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('aboutPage.cta.description')}
              </p>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                {t('aboutPage.cta.button')}
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;