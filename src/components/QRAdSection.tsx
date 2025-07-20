import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function QRAdSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center unified-bg section-spacing overflow-hidden" 
      dir="rtl"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#FF4E00]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-[#122E72]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="order-2 lg:order-1 text-center lg:text-right space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* ICODE Header */}
            <motion.h1
              className="heading-responsive gradient-text mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ICODE
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="subheading-responsive text-[#122E72] mb-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              كل ما تحتاجه في كود واحد.
            </motion.h2>

            <motion.p 
              className="body-responsive text-[#122E72] mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              نحن في <span className="font-bold gradient-text">ICODE</span> نبتكر حلولاً رقمية تُمكّن المطاعم والمقاهي من إدارة الطلبات والدفع أونلاين عبر منيو إلكتروني تفاعلي دون أي عمولة على المبيعات وتخصيص يعكس هوية كل علامة تجارية بشكل فريد.
            </motion.p>

            <motion.button 
              className="bg-[#FF4E00] hover:bg-[#e63e00] text-white font-arabic font-bold rounded-xl py-4 px-8 text-responsive-lg shadow-enhanced btn-hover animate-pulse-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              زود أرباحك مع ICODE
            </motion.button>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div 
            className="order-1 lg:order-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src="./first page.png"
                alt="ICODE QR Mockup"
                className="img-responsive phone-responsive animate-float"
                style={{
                  filter: 'drop-shadow(0px 20px 60px rgba(0,42,92,0.25)) drop-shadow(0px 8px 32px rgba(0,0,0,0.15))',
                  borderRadius: '2.5rem',
                }}
                draggable={false}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Enhanced Shadow */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-4 w-3/4 h-8 bg-black/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#FF4E00] rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-[#FF4E00] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}