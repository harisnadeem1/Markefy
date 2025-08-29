import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import TangibleResults from '@/components/TangibleResults';

import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Globe, 
  Search, 
  TrendingUp, 
  Palette, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Target,
  Users,
  Database,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Eye,
  MousePointer,
  Award,
  Rocket,
  Settings,
  Heart,
  Star,
  Lightbulb,
  Gauge,
  ThumbsUp,
  Lock,
  Cpu,
  Cloud,
  Monitor,
  FileText,
  BarChart,
  MessageSquare,
  Briefcase,
  Package,
  Presentation,
  MapPin
} from 'lucide-react';

import LetsTalk from '../components/LetsTalk';

// Icon mappings for services, benefits, and process steps
const serviceIcons = {
  software: Code,
  website: Globe,
  seo: Search,
  ads: TrendingUp,
  branding: Palette,
  support: Headphones
};

const serviceOfferingIcons = {
  'Enterprise Software Solutions': Briefcase,
  'ERP & CRM Systems': Database,
  'Workflow Automation Tools': Settings,
  'AI-Driven Business Applications': Cpu,
  'API Integrations & Cloud Platforms': Cloud,
  'Corporate & Business Websites': Monitor,
  'eCommerce Platforms & Online Stores': ShoppingCart,
  'Landing Pages for Marketing Campaigns': Target,
  'Progressive Web Apps (PWAs)': Smartphone,
  'Website Redesigns & Performance Optimization': Gauge,
  'Keyword Research & Strategy': Target,
  'On-Page SEO Optimization': FileText,
  'Technical SEO Audits & Fixes': Settings,
  'Link Building & Authority Growth': BarChart,
  'Local SEO for Targeted Reach': MapPin,
  'Google Search & Display Ads': Search,
  'Facebook & Instagram Ads': Users,
  'LinkedIn B2B Ad Campaigns': Briefcase,
  'YouTube Video Advertising': Eye,
  'Retargeting Campaigns': Target,
  'Logo Design & Brand Guidelines': Star,
  'Social Media Graphics': MessageSquare,
  'Business Cards, Flyers, Brochures': FileText,
  'Product Packaging & Promotional Materials': Package,
  'Presentation & Pitch Deck Design': Presentation,
  'Regular Updates & Security Patches': Shield,
  'Performance Monitoring & Optimization': Gauge,
  'Bug Fixes & Issue Resolution': Settings,
  'Feature Enhancements & Upgrades': Zap,
  'Monthly Analytics & Performance Reports': BarChart3
};

const benefitIcons = [Rocket, Target, BarChart3, Shield];
const processIcons = [Lightbulb, Target, Settings, Rocket, TrendingUp];
const statIcons = [CheckCircle, Heart, TrendingUp, Clock];

// Service gradient mappings
const serviceGradients = {
  software: "from-blue-500 to-blue-600",
  website: "from-gray-600 to-gray-700",
  seo: "from-blue-600 to-blue-700",
  ads: "from-gray-800 to-black",
  branding: "from-gray-700 to-gray-800",
  support: "from-blue-500 to-blue-700"
};

const ServicesPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const handleGetStarted = () => {
    toast({
      title: t('servicesPage.toast.notImplemented'),
    });
  };

  // Get translated data
  const stats = t('servicesPage.stats', { returnObjects: true });
  const services = t('servicesPage.services', { returnObjects: true });
  const benefits = t('servicesPage.benefits.items', { returnObjects: true });
  const processSteps = t('servicesPage.process.steps', { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>{t('servicesPage.meta.title')}</title>
        <meta name="description" content={t('servicesPage.meta.description')} />
      </Helmet>
      
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 md:px-6 py-2 md:py-3 bg-blue-600 text-white font-semibold text-xs md:text-sm rounded-full mb-6 md:mb-8 shadow-lg">
                {t('servicesPage.hero.badge')}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight px-2">
                {t('servicesPage.hero.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {t('servicesPage.hero.titleHighlight')}
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('servicesPage.hero.description')}
            </motion.p>
          </div>
        </motion.section>

              <TangibleResults  />


        

        {/* Comprehensive Services Section */}
        <motion.section 
          className="py-12 md:py-20 lg:py-28"
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
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
                {t('servicesPage.portfolio.title')}
              </h2>
              <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                {t('servicesPage.portfolio.description')}
              </p>
            </motion.div>

            <div className="space-y-12 md:space-y-20">
              {services.map((service, index) => {
                const ServiceIcon = serviceIcons[service.id];
                const gradient = serviceGradients[service.id];

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Service Header */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
                      <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                          <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 md:mr-6 mx-auto sm:mx-0`}>
                            <ServiceIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                          </div>
                          <div className="text-center sm:text-left">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">
                              {service.title}
                            </h3>
                            <p className="text-base md:text-lg font-semibold text-gray-600">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>
                      <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                        <div className={`bg-gradient-to-br ${gradient} p-6 md:p-8 rounded-2xl md:rounded-3xl text-white`}>
                          <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                            <Rocket className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                            {t('servicesPage.sections.result')}
                          </h4>
                          <p className="text-base md:text-lg leading-relaxed opacity-95">
                            {service.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
                      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* What We Offer */}
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3" />
                            {t('servicesPage.sections.whatWeOffer')}
                          </h4>
                          <div className="space-y-4 md:space-y-6">
                            {service.offerings.map((offering, idx) => {
                              const OfferingIcon = serviceOfferingIcons[offering.title] || Settings;
                              return (
                                <div key={idx} className="flex items-start bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                                    <OfferingIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                                      {offering.title}
                                    </h5>
                                    <p className="text-xs md:text-sm text-gray-600">
                                      {offering.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Why We're The Best */}
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center">
                            <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mr-2 md:mr-3" />
                            {t('servicesPage.sections.whyBest')}
                          </h4>
                          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            {service.whyBest.map((reason, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 md:mt-1 flex-shrink-0">
                                  <Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                  {reason}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="bg-white p-4 md:p-6 rounded-xl">
                            <h5 className="font-semibold text-gray-900 mb-3 md:mb-4 flex items-center text-sm md:text-base">
                              <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-500 mr-2" />
                              {t('servicesPage.sections.technologies')}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, idx) => (
                                <span key={idx} className="px-2 md:px-3 py-1 bg-gray-100 text-gray-700 text-xs md:text-sm rounded-full font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"
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
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                {t('servicesPage.benefits.title')}
              </h2>
              <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('servicesPage.benefits.description')}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefitIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/20"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                      <BenefitIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Process Section */}
        <motion.section 
          className="py-12 md:py-20 bg-white"
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
              className="text-center mb-12 md:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                {t('servicesPage.process.title')}
              </h2>
              <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                {t('servicesPage.process.description')}
              </p>
            </motion.div>

            <div className="space-y-8 md:space-y-12">
              {processSteps.map((step, index) => {
                const StepIcon = processIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                    <div className={index % 2 === 1 ? "order-1 lg:order-2" : "order-1 lg:order-1"}>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                            <StepIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-blue-600 text-center sm:text-left">
                            {step.step}
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center sm:text-left">
                          {step.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 mb-3 md:mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <p className="text-sm md:text-base text-gray-700">
                          {step.details}
                        </p>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "order-2 lg:order-1" : "order-2 lg:order-2"}>
                      <div className="relative">
                        <div className="w-full h-48 md:h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl md:rounded-3xl flex items-center justify-center">
                          <StepIcon className="w-16 h-16 md:w-24 md:h-24 text-blue-500 opacity-20" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>
      </div>
      
      <LetsTalk />
    </>
  );
};

export default ServicesPage;