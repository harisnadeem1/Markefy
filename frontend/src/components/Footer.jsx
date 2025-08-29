import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  
  const onNotImplemented = () => {
    console.log("Feature not implemented yet");
  };

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and About Section - Full Width */}
        <div className="mb-8">
          <div className="space-y-4">
            {/* Logo - using actual image from public folder */}
            <div className="flex items-center space-x-2">
              <img 
                src="/logo/Markefy-white.png" 
                alt="Markefy.ai Logo" 
                className="w-32 sm:w-36 md:w-40 lg:w-44 object-contain"
                loading="lazy"
                style={{ maxHeight: '60px' }} // optional to prevent stretching
              />
            </div>
            
            {/* About Me Section */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                {t('footer.about')}
              </p>
            </div>

            {/* Social Links
            <div className="flex space-x-4">
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </button>
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
            </div> */}
          </div>
        </div>

        {/* Links Section - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Contact Section - First column on mobile */}
          <div>
            <span className="font-semibold mb-4 block text-white">
              {t('footer.sections.contact')}
            </span>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{t('footer.contact.email')}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm whitespace-pre-line">
                  {t('footer.contact.address')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Services Section - Second column on mobile */}
          <div>
            <span className="font-semibold mb-4 block text-white">
              {t('footer.sections.services')}
            </span>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.services.webDevelopment')}
              </a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.services.seoOptimization')}
              </a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.services.customSoftware')}
              </a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.services.aiSolutions')}
              </a>
            </div>
          </div>
          
          {/* Company Section - Third column on mobile (wraps to new row) */}
          <div>
            <span className="font-semibold mb-4 block text-white">
              {t('footer.sections.company')}
            </span>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.company.aboutUs')}
              </a>
              <a href="/process" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.company.ourProcess')}
              </a>
              <a href="/technologies" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.company.technologies')}
              </a>
            </div>
          </div>

          {/* Legal Section - Fourth column on mobile (wraps to new row) */}
          <div>
            <span className="font-semibold mb-4 block text-white">
              {t('footer.sections.legal')}
            </span>
            <div className="space-y-2">
              <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.privacyPolicy')}
              </a>
              <a href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.termsOfService')}
              </a>
              <a href="/cookie-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.cookiePolicy')}
              </a>
              <a href="/disclaimer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                {t('footer.legal.disclaimer')}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;