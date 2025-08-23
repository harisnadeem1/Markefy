import React from 'react';
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
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
               Markefy is a digital solutions company delivering high‑impact web development, software, SEO, and marketing campaigns. We help businesses grow with creativity, technology, and results‑driven strategies.
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
            <span className="font-semibold mb-4 block text-white">Contact</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">support@markefy.ai</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Str. Dunarii Nr 146-148<br />Bragadiru, Romania</span>
              </div>
            </div>
          </div>
          
          {/* Services Section - Second column on mobile */}
          <div>
            <span className="font-semibold mb-4 block text-white">Services</span>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">Web Development</a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">SEO Optimization</a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">Custom Software</a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">AI Solutions</a>
            </div>
          </div>
          
          {/* Company Section - Third column on mobile (wraps to new row) */}
          <div>
            <span className="font-semibold mb-4 block text-white">Company</span>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
              <a href="/process" className="block text-gray-400 hover:text-white transition-colors text-sm">Our Process</a>
             <a href="/technologies" className="block text-gray-400 hover:text-white transition-colors text-sm">Technologies</a>
            </div>
          </div>

          {/* Legal Section - Fourth column on mobile (wraps to new row) */}
          <div>
            <span className="font-semibold mb-4 block text-white">Legal</span>
            <div className="space-y-2">
               <a href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
               <a href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="/cookie-policy" className="block text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                 <a href="/disclaimer" className="block text-gray-400 hover:text-white transition-colors text-sm">Disclamier</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Markefy.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;