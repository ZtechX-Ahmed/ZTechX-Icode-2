import { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion, useInView, easeOut } from 'framer-motion';
import { useRef } from 'react';

const bubbleMessages = [
  {
    title: "تصميم واحد لكل ما تحتاج",
    desc: "منيو إلكتروني تفاعلي مع تصميم يعكس هوية علامتك التجارية",
    position: "right",
    delay: 0.5
  },
  {
    title: "السعر عندك بتصميم صغير", 
    desc: "حلول مرنة تناسب جميع الميزانيات مع أفضل جودة",
    position: "right",
    delay: 1
  },
  {
    title: "جاهزون دائماً لدعمك",
    desc: "فريق دعم فني متخصص متاح 24/7 لمساعدتك",
    position: "left",
    delay: 1.5
  },
  {
    title: "أرباحك كاملة بلا عمولات",
    desc: "احتفظ بكامل أرباحك دون أي رسوم أو عمولات إضافية",
    position: "left", 
    delay: 2
  }
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    // Animation triggers are handled by framer-motion variants
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.3
      }
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
    visible: (custom: { delay: number; isRight: boolean }) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom.delay,
        ease: easeOut,
        type: "spring" as const,
        stiffness: 100
      }
    })
  };

  const heartVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 2.5,
        ease: easeOut,
        type: "spring" as const,
        stiffness: 200
      }
    }
  };

  const mobileCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.8,
        ease: easeOut
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      className="bg-gradient-to-br from-gray-100 to-gray-200 py-12 sm:py-16 lg:py-20 px-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-arabic">
            <span className="text-[#0B2A52]">لماذا تختار </span>
            <span className="text-[#FF4A1C]">I</span>
            <span className="text-[#0B2A52]">CODE؟</span>
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden xl:block relative">
          {/* Phone Container - Centered */}
          <div className="flex justify-center">
            <motion.div 
              className="relative z-10"
              variants={phoneVariants}
            >
              {/* Phone */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-[#4A5B8C] to-[#2E3C7E] rounded-[3rem] shadow-2xl p-4 relative overflow-hidden animate-float">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white text-xs mb-4 px-2">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                    <div className="w-4 h-2 bg-white rounded-sm opacity-80"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Phone Screen */}
                <div className="w-full h-full bg-[#2E3C7E] rounded-[2.5rem] flex flex-col items-center justify-center relative">
                  {/* ICODE Logo */}
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold font-arabic text-white">
                      <span className="text-[#FF4A1C]">I</span>CODE
                    </h3>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-8 flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Phone Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-8 bg-black/20 rounded-full blur-md"></div>
            </motion.div>
          </div>

          {/* Speech Bubbles - Better positioning */}
          {bubbleMessages.map((bubble, idx) => {
            const isRight = bubble.position === 'right';
            const positions = {
              0: isRight ? 'top-12 -right-4' : 'top-12 -left-4', // أول فقاعة
              1: isRight ? 'top-80 -right-12' : 'top-80 -left-12', // ثاني فقاعة
              2: isRight ? 'bottom-80 -right-12' : 'bottom-80 -left-12', // ثالث فقاعة
              3: isRight ? 'bottom-12 -right-4' : 'bottom-12 -left-4', // رابع فقاعة
            };
            
            return (
              <motion.div
                key={idx}
                className={`absolute ${positions[idx as keyof typeof positions]} z-20`}
                variants={bubbleVariants}
                custom={{ delay: bubble.delay, isRight }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-gray-200 w-72 relative">
                  <h4 className="font-bold text-[#0B2A52] mb-3 font-arabic text-base">
                    {bubble.title}
                  </h4>
                  <p className="text-gray-600 text-sm font-arabic leading-relaxed">
                    {bubble.desc.split('تصميم').map((part, i) => 
                      i === 0 ? part : (
                        <span key={i}>
                          <span className="text-[#FF4A1C] font-medium">تصميم</span>
                          {part}
                        </span>
                      )
                    )}
                  </p>
                  
                  {/* Speech Bubble Arrow */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isRight 
                      ? '-left-4 w-0 h-0 border-r-[16px] border-r-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent'
                      : '-right-4 w-0 h-0 border-l-[16px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent'
                  }`}></div>
                  
                  {/* Small decorative dot */}
                  <div className={`absolute ${
                    isRight ? '-left-2' : '-right-2'
                  } top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md`}></div>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative Heart */}
          <motion.div 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
            variants={heartVariants}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl flex items-center justify-center animate-pulse-slow">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="xl:hidden">
          {/* Phone */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={phoneVariants}
          >
            <div className="relative z-10">
              <div className="w-64 h-96 bg-gradient-to-b from-[#4A5B8C] to-[#2E3C7E] rounded-[2.5rem] shadow-2xl p-3 relative overflow-hidden animate-float">
                {/* Status Bar */}
                <div className="flex justify-between items-center text-white text-xs mb-3 px-2">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-sm opacity-60"></div>
                    <div className="w-3 h-1.5 bg-white rounded-sm opacity-80"></div>
                    <div className="w-3 h-1.5 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Phone Screen */}
                <div className="w-full h-full bg-[#2E3C7E] rounded-[2rem] flex flex-col items-center justify-center relative">
                  {/* ICODE Logo */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold font-arabic text-white">
                      <span className="text-[#FF4A1C]">I</span>CODE
                    </h3>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-6 flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Phone Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black/20 rounded-full blur-md"></div>
            </div>
          </motion.div>

          {/* Mobile Bubbles Grid */}
          <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mb-8">
            {bubbleMessages.map((bubble, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white/95 rounded-xl p-4 shadow-lg border border-gray-200"
                variants={mobileCardVariants}
                custom={idx}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h4 className="font-bold text-[#0B2A52] mb-2 font-arabic text-sm">
                  {bubble.title}
                </h4>
                <p className="text-gray-600 text-xs font-arabic leading-relaxed">
                  {bubble.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Heart */}
          <motion.div 
            className="flex justify-center"
            variants={heartVariants}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl flex items-center justify-center animate-pulse-slow">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}