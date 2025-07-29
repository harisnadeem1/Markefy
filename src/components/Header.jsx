import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNotImplemented = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
  const mobileIconStyle = isScrolled || location.pathname !== '/' ? 'text-black' : 'text-white';
  
  // Determine which logo to use based on background
  const isLightBackground = isScrolled || location.pathname !== '/';
  const logoSrc = isLightBackground 
    ? '/logo/Markefy-black.png'
    : '/logo/Markefy-white.png';

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20
    },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerStyle}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center h-20 md:justify-between">
            {/* Mobile: Centered logo with hamburger on right */}
            <div className="flex-1 flex justify-center md:flex-none md:justify-start">
              <Link to="/" className="block">
                <img 
                  src={logoSrc}
                  alt="Markefy.ai Logo"
                  className="h-5 w-auto transition-all duration-300"
                  loading="eager"
                  decoding="async"
                />
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
              <Link to="/contact">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm"
                  size="sm"
                >
                  Get started
                </Button>
              </Link>
            </div>

            <div className="md:hidden absolute right-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${mobileIconStyle} z-[60] relative`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-[55] md:hidden"
          >
            {/* Header in menu */}
            <div className="flex justify-center items-center h-20 px-4 border-b border-gray-100 relative">
              <img 
                src="/logo/Markefy-black.png"
                alt="Markefy.ai Logo"
                className="h-5 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-8 pb-20">
              <div className="flex-1 px-6">
                <nav className="space-y-1">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item.name}
                      custom={i}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-50"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    custom={navLinks.length}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-50"
                    >
                      Contact
                    </Link>
                  </motion.div>

                  <motion.div
                    custom={navLinks.length + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <button 
                      onClick={handleNotImplemented}
                      className="block py-4 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors w-full text-left border-b border-gray-50"
                    >
                      Login
                    </button>
                  </motion.div>
                </nav>
              </div>

              {/* Bottom CTA */}
              <motion.div 
                className="px-6 pb-8"
                custom={navLinks.length + 2}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-4 text-lg font-medium"
                  >
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;