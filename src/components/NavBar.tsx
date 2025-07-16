import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('qr-ad');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section for highlighting
      const sections = [
        'qr-ad', 'qr-middle', 'icode-feature', 
        'partners', 'feature-cards', 'subscription-form'
      ];
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-10 h-10 bg-[#F25022] rounded-lg flex items-center justify-center"
            >
              <QrCode className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-[#002A5C] font-cairo">
              <span className="text-[#F25022]">I</span>CODE
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.a 
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('qr-ad')}
              className={`cursor-pointer text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium ${activeSection === 'qr-ad' ? 'text-[#F25022]' : ''}`}
            >
              الرئيسية
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('qr-middle')}
              className={`cursor-pointer text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium ${activeSection === 'qr-middle' ? 'text-[#F25022]' : ''}`}
            >
              Icode لماذا تختار
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('icode-feature')}
              className={`cursor-pointer text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium ${activeSection === 'icode-feature' ? 'text-[#F25022]' : ''}`}
            >
              ICODE مميزات
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('feature-cards')}
              className={`cursor-pointer text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium ${activeSection === 'feature-cards' ? 'text-[#F25022]' : ''}`}
            >
              ICODE باقات
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              onClick={() => scrollToSection('partners')}
              className={`cursor-pointer text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium ${activeSection === 'partners' ? 'text-[#F25022]' : ''}`}
            >
              شركاء وارقام
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('subscription-form')}
              className="bg-[#F25022] hover:bg-[#d63e1a] text-white px-6 py-2 rounded-lg font-cairo font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              اشترك الآن
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#F25022] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('qr-ad')}
                  className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2"
                >
                  الرئيسية
                </motion.a>
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('qr-middle')}
                  className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2"
                >
                  Icode لماذا تختار
                </motion.a>
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('icode-feature')}
                  className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2"
                >
                  ICODE مميزات
                </motion.a>
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('feature-cards')}
                  className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2"
                >
                  ICODE باقات
                </motion.a>
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('partners')}
                  className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2"
                >
                  شركاء وارقام
                </motion.a>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('subscription-form')}
                  className="w-full bg-[#F25022] hover:bg-[#d63e1a] text-white px-6 py-3 rounded-lg font-cairo font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                >
                  اشترك الآن
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;