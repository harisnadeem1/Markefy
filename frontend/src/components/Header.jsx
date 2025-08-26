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
    // { name: 'Process', path: '/process' },
     { name: 'Portfolio', path: '/results' },
    { name: 'Technologies', path: '/technologies' },
    { name: 'Shop', path: '/shop/collection' },
  ];

  // Determine if we should show the white rounded header
  const isWhiteHeader = isScrolled || location.pathname !== '/';
  
  const headerStyle = isWhiteHeader 
    ? 'bg-white/90 backdrop-blur-sm shadow-lg' 
    : 'bg-transparent';
  
  const textStyle = isWhiteHeader 
    ? 'text-gray-700 hover:text-black' 
    : 'text-gray-300 hover:text-white';
  
  const mobileIconStyle = isWhiteHeader 
    ? 'text-black' 
    : 'text-white';
  
  // Determine which logo to use based on background
  const logoSrc = isWhiteHeader 
    ? '/logo/Markefy-black.png'
    : '/logo/Markefy-white.png';

  // Modern slide-in animation from right
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  // Backdrop animation
  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  // Staggered item animations
  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2
      }
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  // Hamburger menu animation
  const hamburgerVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.2 }
    },
    open: {
      rotate: 180,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isWhiteHeader ? 'pt-4' : ''}`}>
        <nav className={`${isWhiteHeader ? 'max-w-[90%] mx-auto rounded-2xl' : 'max-w-7xl mx-auto'} px-4 sm:px-6 lg:px-8 relative transition-all duration-300 ${headerStyle}`}>
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
                  className={`text-sm font-medium transition-colors uppercase ${textStyle}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
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
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-3 ${mobileIconStyle} z-[60] relative rounded-full hover:bg-white/10 transition-colors`}
                variants={hamburgerVariants}
                animate={isMenuOpen ? "open" : "closed"}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Slide-in Menu Panel */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-black z-[56] md:hidden shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center h-20 px-6 border-b border-gray-800">
                <img 
                  src="/logo/Markefy-white.png"
                  alt="Markefy.ai Logo"
                  className="h-5 w-auto"
                />
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors text-white"
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Menu Content */}
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-2">
                    {navLinks.map((item, i) => (
                      <motion.div
                        key={item.name}
                        custom={i}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-4 px-4 text-lg font-medium text-white hover:text-blue-400 hover:bg-gray-900 rounded-lg transition-all duration-200 group"
                        >
                          <span className="flex items-center justify-between">
                            {item.name}
                            <motion.span
                              className="text-blue-400 opacity-0 group-hover:opacity-100"
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="mt-12 pt-8 border-t border-gray-800"
                    custom={navLinks.length}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <div className="text-gray-400 text-sm mb-4">
                      Ready to transform your business?
                    </div>
                    <div className="flex space-x-4 mb-6">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                    
                    {/* Get Started Button */}
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <span className="flex items-center justify-center">
                          Get Started
                          <motion.span
                            className="ml-2"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </span>
                      </Button>
                    </Link>
                    
                    <div className="text-center mt-4 text-gray-500 text-sm">
                      Free consultation • No commitment
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;