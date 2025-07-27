
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const onNotImplemented = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold">Markefy.ai</Link>
            <p className="text-gray-400">
              Empowering brands shaping the digital world through innovative web solutions.
            </p>
            <div className="flex space-x-4">
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </button>
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </button>
              <button onClick={onNotImplemented} className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Services</span>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-white">Web Development</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">SEO Optimization</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">Custom Software</Link>
              <Link to="/services" className="block text-gray-400 hover:text-white">AI Solutions</Link>
            </div>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Company</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
              <Link to="/process" className="block text-gray-400 hover:text-white">Our Process</Link>
              <button onClick={onNotImplemented} className="block text-gray-400 hover:text-white text-left">Case Studies</button>
              <button onClick={onNotImplemented} className="block text-gray-400 hover:text-white text-left">Careers</button>
            </div>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Legal</span>
            <div className="space-y-2">
               <button onClick={onNotImplemented} className="block text-gray-400 hover:text-white text-left">Privacy Policy</button>
               <button onClick={onNotImplemented} className="block text-gray-400 hover:text-white text-left">Terms of Service</button>
               <button onClick={onNotImplemented} className="block text-gray-400 hover:text-white text-left">Sitemap</button>
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