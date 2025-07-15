import React, { useEffect, useRef, useState } from 'react';
import { Store, ShoppingCart, Users, Smartphone } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Counter hook for animated numbers
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

// Counter component
const AnimatedCounter: React.FC<{ 
  value: number; 
  suffix?: string; 
  delay?: number;
}> = ({ value, suffix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { count, setIsVisible } = useCountUp(value);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, setIsVisible]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function PartnersSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsData = [
    { icon: Store, value: 300, label: 'مطعم', delay: 0 },
    { icon: ShoppingCart, value: 600, suffix: ' ألف', label: 'طلب', delay: 200 },
    { icon: Users, value: 10, suffix: ' مليون', label: 'مستخدم', delay: 400 },
    { icon: Smartphone, value: 15, suffix: ' مليون', label: 'استخدام', delay: 600 }
  ];

  return (
    <>
      {/* Success Partners - Image */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F9F9F9] to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#FF4A1C] mb-12 lg:mb-16 font-arabic"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            data-aos="fade-up"
          >
            شركاء النجاح
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {/* Custom Image with enhanced animation */}
            <motion.div 
              className="flex justify-center items-center mb-12 lg:mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2 
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.img 
                src="./public/partenares.png" 
                alt="شركاء النجاح" 
                className="w-full max-w-2xl rounded-3xl shadow-lg object-cover h-64"
                initial={{ opacity: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                data-aos="zoom-in"
                data-aos-delay="100"
              />
            </motion.div>

            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 font-arabic">
                بالأرقام ننجح معاً
              </h3>
            </motion.div>

            <motion.div 
              ref={ref}
              className="bg-[#0B2A52] rounded-3xl p-6 lg:p-8 text-white text-center shadow-xl overflow-hidden relative"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
                {statsData.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center"
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-2 shadow"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.6 }
                        }}
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-[#0B2A52]" />
                      </motion.div>
                      
                      <motion.h4 
                        className="text-2xl lg:text-3xl font-bold mb-1 font-arabic text-white"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + 0.3,
                          type: "spring",
                          stiffness: 100
                        }}
                      >
                        <AnimatedCounter 
                          value={stat.value} 
                          suffix={stat.suffix || ''} 
                          delay={stat.delay}
                        />
                      </motion.h4>
                      
                      <motion.p 
                        className="text-blue-200 font-arabic text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + 0.5 
                        }}
                      >
                        {stat.label}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}