
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNotImplemented = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Results', path: '/results' },
    { name: 'Technologies', path: '/technologies' },
  ];

  const headerStyle = isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent';
  const textStyle = isScrolled || location.pathname !== '/' ? 'text-gray-700 hover:text-black' : 'text-gray-300 hover:text-white';
  const logoStyle = isScrolled || location.pathname !== '/' ? 'text-black' : 'text-white';
  const mobileIconStyle = isScrolled || location.pathname !== '/' ? 'text-black' : 'text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerStyle}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${logoStyle}`}>
              Markefy.ai
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${textStyle}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <Link to="/contact" className={`text-sm font-medium transition-colors ${textStyle}`}>
                Contact
             </Link>
             <button onClick={handleNotImplemented} className={`text-sm font-medium transition-colors ${textStyle}`}>
                Login
             </button>
            <Button 
              onClick={handleNotImplemented}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm"
              size="sm"
            >
              Get started
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${mobileIconStyle}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[...navLinks, { name: 'Contact', path: '/contact' }].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-black w-full text-left font-medium"
              >
                {item.name}
              </Link>
            ))}
             <button onClick={handleNotImplemented} className="block py-2 text-gray-700 hover:text-black w-full text-left font-medium">
                Login
             </button>
            <Button 
              onClick={handleNotImplemented}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;