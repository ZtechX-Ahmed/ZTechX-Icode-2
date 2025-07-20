import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        'qr-ad',
        'phone-mockup',
        'third-page',
        'icode-feature',
        'partners',
        'phone-form',
        'feature-cards',
        'subscription-form',
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
      scrolled ? 'unified-bg shadow-enhanced' : 'unified-bg'
    }`}>
      <div className="container-responsive">
        <div className="flex justify-between items-center nav-responsive">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="logo-responsive"
            >
              <svg viewBox="0 0 237 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M59.2508 54.1616H31.3679C25.6012 54.1616 20.913 49.5225 20.913 43.8231V19.0064C20.913 13.3039 25.6043 8.66791 31.3679 8.66791H59.2508C65.0175 8.66791 69.7057 13.307 69.7057 19.0064V22.8009H62.7358V19.0064C62.7358 17.1045 61.1709 15.5602 59.2508 15.5602H31.3679C29.4446 15.5602 27.8829 17.1076 27.8829 19.0064V43.82C27.8829 45.7219 29.4477 47.2662 31.3679 47.2662H59.2508C61.1741 47.2662 62.7358 45.7188 62.7358 43.82V40.0286H69.7057V43.82C69.7057 49.5225 65.0144 54.1585 59.2508 54.1585V54.1616Z" fill="#122E72"/>
                <path d="M115.013 54.1616H87.1336C81.3669 54.1616 76.6787 49.5225 76.6787 43.8231V19.0095C76.6787 13.307 81.37 8.67102 87.1336 8.67102H115.013C120.78 8.67102 125.468 13.3101 125.468 19.0095V43.8231C125.468 49.5256 120.777 54.1616 115.013 54.1616ZM87.1336 15.5603C85.2103 15.5603 83.6487 17.1076 83.6487 19.0064V43.82C83.6487 45.7219 85.2135 47.2662 87.1336 47.2662H115.013C116.937 47.2662 118.498 45.7188 118.498 43.82V19.0095C118.498 17.1076 116.934 15.5633 115.013 15.5633H87.1336V15.5603Z" fill="#122E72"/>
                <path d="M212.602 54.1616H198.662C192.895 54.1616 188.207 49.5225 188.207 43.8231V19.0095C188.207 13.307 192.899 8.67102 198.662 8.67102H226.545C232.312 8.67102 237 13.3101 237 19.0095V42.4453H195.177V43.8231C195.177 45.725 196.742 47.2693 198.662 47.2693H212.602V54.1616ZM195.174 35.5529H230.027V19.0095C230.027 17.1076 228.462 15.5633 226.542 15.5633H198.659C196.739 15.5633 195.174 17.1107 195.174 19.0095V35.5529Z" fill="#122E72"/>
                <path d="M174.261 0V8.67705H142.893C137.126 8.67705 132.438 13.3161 132.438 19.0155V43.8291C132.438 49.5317 137.13 54.1676 142.893 54.1676H170.773C176.54 54.1676 181.228 49.5286 181.228 43.8291V24.3759V8.67397V0H174.258H174.261ZM174.264 43.8322C174.264 45.7341 172.699 47.2784 170.779 47.2784H142.899C140.979 47.2784 139.414 45.731 139.414 43.8322V19.0186C139.414 17.1168 140.979 15.5725 142.899 15.5725H174.267V24.379V43.8322H174.264Z" fill="#122E72"/>
                <path d="M6.96995 8.66791H0V54.1616H6.96995V8.66791Z" fill="#FF4E00"/>
                <path d="M87.0308 41.1876V39.6957H87.6916V41.1876C87.6916 42.5038 88.7732 43.5734 90.1043 43.5734H93.1092V44.2269H90.1043C88.4085 44.2269 87.0308 42.8645 87.0308 41.1876Z" fill="#FF4E00"/>
                <path d="M109.911 44.2269V43.5734H112.043C113.374 43.5734 114.455 42.5038 114.455 41.1876V39.6957H115.116V41.1876C115.116 42.8645 113.739 44.2269 112.043 44.2269H109.911Z" fill="#FF4E00"/>
                <path d="M109.911 19.2746V18.6211H112.043C113.735 18.6211 115.116 19.9835 115.116 21.6604V23.1523H114.455V21.6604C114.455 20.3442 113.374 19.2746 112.043 19.2746H109.911Z" fill="#FF4E00"/>
                <path d="M87.0308 23.1523V21.6604C87.0308 19.9835 88.4085 18.6211 90.1043 18.6211H93.1092V19.2746H90.1043C88.7732 19.2746 87.6916 20.3442 87.6916 21.6604V23.1523H87.0308Z" fill="#FF4E00"/>
                <path d="M114.783 31.0865H87.358V31.74H114.783V31.0865Z" fill="#FF4E00"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('subscription-form')}
              className="bg-[#FF4E00] hover:bg-[#e63e00] text-white px-6 py-2.5 rounded-full font-arabic font-medium btn-hover shadow-glow"
            >
              اشترك الآن
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('phone-form')}
              className="bg-transparent border-2 border-gray-300 hover:border-[#FF4E00] text-gray-700 hover:text-[#FF4E00] px-6 py-2 rounded-full font-arabic font-medium btn-hover"
            >
              ICODE باقــات
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('partners')}
              className="bg-transparent border-2 border-gray-300 hover:border-[#FF4E00] text-gray-700 hover:text-[#FF4E00] px-6 py-2 rounded-full font-arabic font-medium btn-hover"
            >
              شركاء وأرقام
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('icode-feature')}
              className="bg-transparent border-2 border-gray-300 hover:border-[#FF4E00] text-gray-700 hover:text-[#FF4E00] px-6 py-2 rounded-full font-arabic font-medium btn-hover"
            >
              مميزات ICode
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('qr-ad')}
              className="bg-transparent border-2 border-gray-300 hover:border-[#FF4E00] text-gray-700 hover:text-[#FF4E00] px-6 py-2 rounded-full font-arabic font-medium btn-hover"
            >
              الصفحة الرئيسية
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#FF4E00] transition-colors"
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
              className="lg:hidden unified-bg border-t border-gray-200 shadow-enhanced overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('qr-ad')}
                  className="block w-full text-right text-gray-700 hover:text-[#FF4E00] transition-colors font-arabic font-medium py-2"
                >
                  الصفحة الرئيسية
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('icode-feature')}
                  className="block w-full text-right text-gray-700 hover:text-[#FF4E00] transition-colors font-arabic font-medium py-2"
                >
                  مميزات ICode
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('partners')}
                  className="block w-full text-right text-gray-700 hover:text-[#FF4E00] transition-colors font-arabic font-medium py-2"
                >
                  شركاء وأرقام
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('phone-form')}
                  className="block w-full text-right text-gray-700 hover:text-[#FF4E00] transition-colors font-arabic font-medium py-2"
                >
                  ICODE باقــات
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('subscription-form')}
                  className="w-full bg-[#FF4E00] hover:bg-[#e63e00] text-white px-6 py-3 rounded-full font-arabic font-medium btn-hover shadow-glow mt-4"
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