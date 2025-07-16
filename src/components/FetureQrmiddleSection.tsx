import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaQrcode, 
  FaDesktop, 
  FaMobile, 
  FaShoppingCart, 
  FaCogs, 
  FaPercentage, 
  FaGift, 
  FaTruck 
} from 'react-icons/fa';
import { 
  MdPayment, 
  MdSupport, 
  MdLoyalty, 
  MdIntegrationInstructions 
} from 'react-icons/md';

export default function FetureQrmiddleSection() {
  return (
    <section className="relative flex items-center justify-center py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F9F9F9]">
      <div className="relative flex flex-col items-center justify-center w-full min-h-[600px]">
        <motion.h2 
          className="text-center text-[#23336A] font-cairo font-bold text-4xl md:text-5xl mb-16 drop-shadow-lg flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <span className="text-[#F25022]">I</span>
          <span className="text-[#23336A]">CODE</span>
          <span className="mx-2"></span>
          <span className="text-[#23336A]">خدمات</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8">
          {/* Right cards */}
          <div className="flex flex-col gap-6 items-end flex-1">
            {[
              {
                icon: <MdPayment className="w-7 h-7" />,
                title: 'تصمم كود QR خاص بك',
                desc: 'تصمم QR كود مصمم لفتح الصفحة الرئيسية',
              },
              {
                icon: <FaDesktop className="w-7 h-7" />,
                title: 'تصمم منيو إلكتروني تفاعلي',
                desc: 'بتصميم مميز يعكس هوية علامتك التجارية',
              },
              {
                icon: <FaMobile className="w-7 h-7" />,
                title: 'ربط المنيو بصفحة إلكترونية خاصة بمشروعك',
                desc: 'تتضمن معلومات التواصل والفروع',
              },
              {
                icon: <FaShoppingCart className="w-7 h-7" />,
                title: 'تُفعل الطلب والدفع أونلاين',
                desc: 'لتجربة سلسلة وسريعة لعملائك بدون أي عمولة',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.15, 
                  type: "spring",
                  bounce: 0.4
                }}
                className="w-full group cursor-pointer"
              >
                <div className="flex items-center gap-6 bg-white rounded-3xl shadow-xl px-8 py-6 w-[380px] max-w-full border-2 border-gray-50 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#F25022]/20 group-hover:border-[#F25022]/20 group-hover:scale-105">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F25022]/0 via-[#F25022]/8 to-[#23336A]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced icon with luxury styling */}
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F25022] via-[#FF4500] to-[#FF6B35] flex items-center justify-center shadow-2xl border-3 border-white/80 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 20px 40px rgba(242, 80, 34, 0.4)"
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                    <div className="text-white relative z-10 filter drop-shadow-lg">{f.icon}</div>
                  </motion.div>
                  
                  <div className="text-right flex-1 relative z-10">
                    <motion.div 
                      className="text-[#23336A] font-bold font-cairo text-xl mb-3 transition-colors duration-300 group-hover:text-[#F25022] leading-tight"
                      whileHover={{ x: -8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {f.title}
                    </motion.div>
                    <div className="text-gray-600 font-cairo text-base leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced QR Center - Simplified and Luxurious */}
          <motion.div 
            className="relative flex flex-col items-center justify-center z-10 my-8 md:my-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          >
            {/* Main luxury container */}
            <motion.div 
              className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl flex items-center justify-center border-4 border-white/90 backdrop-blur-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 80px rgba(242, 80, 34, 0.2)"
              }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {/* Luxury QR Code */}
              <motion.div
                className="relative z-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <FaQrcode className="w-24 h-24 text-[#23336A]" />
              </motion.div>
              
              {/* Elegant glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F25022]/10 via-transparent to-[#23336A]/10 blur-xl"></div>
            </motion.div>
            
            {/* Luxury text below */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-[#23336A] font-cairo font-bold text-lg">اسكن الكود</div>
              <div className="text-gray-500 font-cairo text-sm mt-1">للوصول السريع</div>
            </motion.div>
          </motion.div>
          
          {/* Left cards */}
          <div className="flex flex-col gap-6 items-start flex-1">
            {[
              {
                icon: <MdSupport className="w-7 h-7" />,
                title: 'توفر دعمًا فنيًا متواصلاً',
                desc: 'لضمان استقرار عملك وسلاسة تجربتك الرقمية',
              },
              {
                icon: <FaPercentage className="w-7 h-7" />,
                title: 'تُفعل خاصية العروض والخصومات',
                desc: 'ترويج ذكي وفعال لخدماتك لفتح الصفحة الرئيسية',
              },
              {
                icon: <MdLoyalty className="w-7 h-7" />,
                title: 'تُنشئ نظام ولاء ونقاط للعملاء',
                desc: 'تعزيز عودتهم وتشجيعهم على التكرار',
              },
              {
                icon: <MdIntegrationInstructions className="w-7 h-7" />,
                title: 'ربط المنصة بأنظمة نقاط البيع',
                desc: 'لتصلك الطلبات مباشرة وأدق بكفاءة',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.15, 
                  type: "spring",
                  bounce: 0.4
                }}
                className="w-full group cursor-pointer"
              >
                <div className="flex items-center gap-6 bg-white rounded-3xl shadow-xl px-8 py-6 w-[380px] max-w-full border-2 border-gray-50 relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#23336A]/20 group-hover:border-[#23336A]/20 group-hover:scale-105">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-l from-[#23336A]/0 via-[#23336A]/8 to-[#F25022]/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced icon with luxury styling */}
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#23336A] via-[#2E4A8A] to-[#4A5B94] flex items-center justify-center shadow-2xl border-3 border-white/80 backdrop-blur-sm order-2"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      boxShadow: "0 20px 40px rgba(35, 51, 106, 0.4)"
                    }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent"></div>
                    <div className="text-white relative z-10 filter drop-shadow-lg">{f.icon}</div>
                  </motion.div>
                  
                  <div className="text-right flex-1 relative z-10 order-1">
                    <motion.div 
                      className="text-[#23336A] font-bold font-cairo text-xl mb-3 transition-colors duration-300 group-hover:text-[#F25022] leading-tight"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {f.title}
                    </motion.div>
                    <div className="text-gray-600 font-cairo text-base leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
