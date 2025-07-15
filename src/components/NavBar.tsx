import React, { useState, useEffect } from 'react';
import { Menu, X, QrCode } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F25022] rounded-lg flex items-center justify-center">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#002A5C] font-cairo">
              <span className="text-[#F25022]">I</span>CODE
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium">
              الرئيسية
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium">
              المميزات
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium">
              الخدمات
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium">
              من نحن
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium">
              تواصل معنا
            </a>
            <button className="bg-[#F25022] hover:bg-[#d63e1a] text-white px-6 py-2 rounded-lg font-cairo font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              ابدأ الآن
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#F25022] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2">
                الرئيسية
              </a>
              <a href="#features" className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2">
                المميزات
              </a>
              <a href="#services" className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2">
                الخدمات
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2">
                من نحن
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#F25022] transition-colors font-cairo font-medium py-2">
                تواصل معنا
              </a>
              <button className="w-full bg-[#F25022] hover:bg-[#d63e1a] text-white px-6 py-3 rounded-lg font-cairo font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-4">
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;