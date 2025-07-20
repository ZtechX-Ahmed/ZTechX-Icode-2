import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ThirdPage: React.FC = () => {
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
      className="min-h-screen flex items-center justify-center unified-bg section-spacing overflow-hidden"
      dir="rtl"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <motion.div 
          className="absolute top-10 left-10 w-40 h-40 bg-[#FF4E00] rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 bg-[#122E72] rounded-full blur-3xl"
          animate={{ 
            scale: [1.5, 1, 1.5],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container-responsive">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div 
            className="text-center lg:text-right space-y-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="heading-responsive gradient-text"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              تجربة عملاء استثنائية
            </motion.h2>
            
            <motion.p 
              className="body-responsive text-[#122E72] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              نوفر لعملائك تجربة طلب سلسة ومريحة من خلال واجهة عصرية وسهلة الاستخدام، مع إمكانيات دفع متنوعة وآمنة.
            </motion.p>

            {/* Feature List */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                "طلب سريع وسهل",
                "دفع آمن ومتنوع",
                "تتبع الطلبات",
                "تقييم الخدمة"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-[#FF4E00] rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <span className="text-responsive-base text-[#122E72] font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              className="bg-[#FF4E00] hover:bg-[#e63e00] text-white font-arabic font-bold rounded-xl py-4 px-8 text-responsive-lg shadow-enhanced btn-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              اكتشف المزيد
            </motion.button>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.img
                src="./third page.png"
                alt="Customer Experience"
                className="img-responsive max-w-lg animate-float"
                style={{
                  filter: 'drop-shadow(0px 20px 60px rgba(0,42,92,0.25))',
                  borderRadius: '2rem',
                }}
                whileHover={{ scale: 1.05, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#FF4E00] rounded-full flex items-center justify-center text-white text-xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⭐
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#122E72] rounded-full flex items-center justify-center text-white text-2xl"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;