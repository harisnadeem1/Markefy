import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Users, Clock, ExternalLink, X } from 'lucide-react';
import { 
  Briefcase, FileText, Globe, Languages, Database, Shield, 
  LayoutDashboard, LineChart, BadgeDollarSign, FileStack, 
  UserCheck, ClipboardList, ShieldCheck, ShoppingCart, 
  PackageCheck, SlidersHorizontal, CreditCard
} from 'lucide-react';

// Icon mappings for case study features
const featureIcons = {
  "Job Management": Briefcase,
  "Gestionarea Joburilor": Briefcase,
  "Employer & Candidate Portals": Users,
  "Portaluri Angajator și Candidat": Users,
  "Application Handling": FileText,
  "Gestionarea Aplicațiilor": FileText,
  "Responsive & Accessible": Globe,
  "Responsive și Accesibil": Globe,
  "Multilingual Support": Languages,
  "Suport Multilingv": Languages,
  "Admin Control Panel": LayoutDashboard,
  "Panou de Control Admin": LayoutDashboard,
  "Real-Time Financial Dashboard": LineChart,
  "Dashboard Financiar în Timp Real": LineChart,
  "Automated Payroll Engine": BadgeDollarSign,
  "Motor Automat de Salarii": BadgeDollarSign,
  "Bill Submission & Approval": FileStack,
  "Trimiterea și Aprobarea Facturilor": FileStack,
  "Hierarchical Role-Based Approvals": UserCheck,
  "Aprobări Ierarhice Bazate pe Roluri": UserCheck,
  "Task Delegation System": ClipboardList,
  "Sistem de Delegare Sarcini": ClipboardList,
  "Security & Audit Logs": ShieldCheck,
  "Securitate și Jurnale de Audit": ShieldCheck,
  "Full eCommerce Functionality": ShoppingCart,
  "Funcționalitate eCommerce Completă": ShoppingCart,
  "Admin Dashboard": LayoutDashboard,
  "Dashboard Admin": LayoutDashboard,
  "Inventory & Order Management": PackageCheck,
  "Gestionarea Inventarului și Comenzilor": PackageCheck,
  "Shopify Payment Integration": CreditCard,
  "Integrare Plăți Shopify": CreditCard,
  "Custom Pricing & Promotions": SlidersHorizontal,
  "Prețuri și Promoții Personalizate": SlidersHorizontal,
  "Secure & Lightweight": Shield,
  "Securizat și Ușor": Shield
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Get translated case study data
  const caseStudyData = t(`caseStudyDetail.caseStudies.${id}`, { returnObjects: true });
  
  const openImagePopup = (image) => {
    setSelectedImage(image);
  };
  
  const closeImagePopup = () => {
    setSelectedImage(null);
  };
  
  // Check if case study exists
  if (!caseStudyData || typeof caseStudyData === 'string') {
    return (
      <div className="pt-20 bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('caseStudyDetail.notFound.title')}
          </h1>
          <Button onClick={() => navigate('/results')} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('caseStudyDetail.notFound.backButton')}
          </Button>
        </div>
      </div>
    );
  }

  // Technology stack data (from original caseStudiesData)
  const techStackData = {
    "fst-trading": [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
    "treasury-management": [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    "sklepoll-ecommerce": [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  };

  // Image data mapping
  const imageData = {
    "fst-trading": [
      { url: "/projects/fsttrading/joblisitngs.png" },
      { url: "/projects/fsttrading/staffrequest.png" },
      { url: "/projects/fsttrading/jobapplication form.png" },
      { url: "/projects/fsttrading/admindahsboard.png" },
      { url: "/projects/fsttrading/adminjobs.png" }
    ],
    "treasury-management": [
      { url: "/projects/treasury/dashboard.png" },
      { url: "/projects/treasury/tasks.png" }
    ],
    "sklepoll-ecommerce": [
      { url: "/projects/polsky/homepage.png" },
      { url: "/projects/polsky/products-catalog.png" },
      { url: "/projects/polsky/cart.png" },
      { url: "/projects/polsky/admin-panel.png" },
      { url: "/projects/polsky/category.png" },
      { url: "/projects/polsky/cloacking.png" },
      { url: "/projects/polsky/monitiring.png" }
    ]
  };

  const heroImage = {
    "fst-trading": "/projects/fsttrading/Homepage.png",
    "treasury-management": "/projects/treasury/dashboard.png",
    "sklepoll-ecommerce": "/projects/polsky/homepage.png"
  };

  const tags = {
    "fst-trading": ["Web Development", "Job Portal", "Multilingual"],
    "treasury-management": ["Finance Automation", "Enterprise App", "MERN Stack"],
    "sklepoll-ecommerce": ["eCommerce", "PHP", "Admin Dashboard", "Shopify Integration"]
  };

  return (
    <>
      <Helmet>
        <title>{caseStudyData.title}{t('caseStudyDetail.meta.titleSuffix')}</title>
        <meta name="description" content={caseStudyData.description} />
      </Helmet>
      
      <div className="pt-20 bg-white text-black min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-blue-600 font-semibold text-lg mb-4">{caseStudyData.client}</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {caseStudyData.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {caseStudyData.longDescription}
                  </p>
                  
                  {/* Project Info */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">{t('caseStudyDetail.labels.duration')}</p>
                      <p className="font-semibold">{caseStudyData.duration}</p>
                    </div>
                    <div className="text-center">
                      <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">{t('caseStudyDetail.labels.teamSize')}</p>
                      <p className="font-semibold">{caseStudyData.teamSize}</p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">{t('caseStudyDetail.labels.timeline')}</p>
                      <p className="font-semibold">{caseStudyData.timeline}</p>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {tags[id]?.map(tag => (
                      <span key={tag} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage[id]} 
                    alt={caseStudyData.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('caseStudyDetail.sections.challenge')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {caseStudyData.challenge}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('caseStudyDetail.sections.solution')}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {caseStudyData.solution}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {t('caseStudyDetail.sections.keyFeatures')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudyData.features?.map((feature, index) => {
                  const FeatureIcon = featureIcons[feature.title] || Briefcase;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <FeatureIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {t('caseStudyDetail.sections.techStack')}
              </h2>
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
                {techStackData[id]?.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center w-24 md:w-28 lg:w-32 flex-shrink-0"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-12 h-12 mx-auto mb-3 object-contain"
                    />
                    <p className="font-medium text-gray-900 text-sm">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Images */}
        <div className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {t('caseStudyDetail.sections.projectGallery')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudyData.projectImages?.map((image, index) => {
                  const imageUrl = imageData[id]?.[index]?.url || '';
                  const combinedImage = { ...image, url: imageUrl };
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => openImagePopup(combinedImage)}
                    >
                      <img 
                        src={imageUrl} 
                        alt={image.title} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{image.title}</h3>
                        <p className="text-gray-600">{image.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Results & Impact */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                {t('caseStudyDetail.sections.resultsImpact')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudyData.results?.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                      {result.metric}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-2">
                      {result.title}
                    </div>
                    <p className="text-gray-600">{result.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeImagePopup}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeImagePopup}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
                
                {/* Image */}
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default CaseStudyDetail;