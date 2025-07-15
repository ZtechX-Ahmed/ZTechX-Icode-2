import React from 'react';
import { Monitor, Smartphone, CreditCard, Settings, Percent, Package, ShoppingCart, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
export default function FetureQrmiddleSection() {
    return (
<section className="relative flex items-center justify-center py-20 bg-gradient-to-br from-[#F9F9F9] to-[#e9ecf7]">
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
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'تصمم كود QR خاص بك',
          desc: 'تصمم QR كود مصمم لفتح الصفحة الرئيسية',
          iconClass: '-mr-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path d="M8 8h8v8H8z" stroke="#fff" strokeWidth="2"/></svg>,
          title: 'تصمم منيو إلكتروني تفاعلي',
          desc: 'بتصميم مميز يعكس هوية علامتك التجارية',
          iconClass: '-mr-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path d="M8 16h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'ربط المنيو بصفحة إلكترونية خاصة بمشروعك',
          desc: 'تتضمن معلومات التواصل والفروع',
          iconClass: '-mr-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path d="M16 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'تُفعل الطلب والدفع أونلاين',
          desc: 'لتجربة سلسلة وسريعة لعملائك بدون أي عمولة',
          iconClass: '-mr-2',
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
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            rotate: -2
          }}
          className="w-full"
            >
          <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-5 py-4 w-[340px] max-w-full border-b-4 border-[#23336A] border-t-4 border-t-[#F25022] relative overflow-hidden group">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F25022]/5 to-[#23336A]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            
            {/* Orange icon circle with pulse effect */}
            <div className={`w-12 h-12 rounded-full bg-[#F25022] flex items-center justify-center shadow-md border-4 border-white ${f.iconClass} relative z-10 group-hover:scale-110 transition-transform duration-300`}>
              <div className="absolute inset-0 rounded-full animate-ping bg-[#F25022] opacity-20 duration-1000"></div>
              {f.icon}
            </div>
            
            <div className="text-right flex-1 relative z-10">
              <div className="text-[#F25022] font-bold font-cairo text-base mb-1 group-hover:translate-y-[-2px] transition-transform duration-300">{f.title}</div>
              <div className="text-[#23336A] font-cairo text-xs leading-snug">{f.desc}</div>
            </div>
          </div>
            </motion.div>
          ))}
        </div>
        
        {/* QR Circle in center */}
        <motion.div 
          className="relative flex flex-col items-center justify-center z-10 my-8 md:my-0"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <motion.div 
            className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#e9ecf7] to-[#F9F9F9] shadow-2xl flex items-center justify-center"
            style={{ boxShadow: '0 0 80px 0 #e9ecf7, 0 0 0 40px #f9f9f9' }}
            animate={{ 
          boxShadow: ['0 0 60px 0 #e9ecf7, 0 0 0 30px #f9f9f9', '0 0 100px 0 #e9ecf7, 0 0 0 45px #f9f9f9', '0 0 60px 0 #e9ecf7, 0 0 0 30px #f9f9f9']
            }}
            transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
            }}
          >
            <motion.img
          src="./public/Circle-QR.png"
          alt="QR Circle"
          className="w-[120px] h-[120px] object-contain relative z-10"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          draggable={false}
            />
            
            {/* Decorative rotating rings */}
            <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-[#F25022]/20 animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-[#23336A]/20 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
          </motion.div>
        </motion.div>
        
        {/* Left cards */}
        <div className="flex flex-col gap-6 items-start flex-1">
          {[
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'توفر دعمًا فنيًا متواصلاً',
          desc: 'لضمان استقرار عملك وسلاسة تجربتك الرقمية',
          iconClass: '-ml-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'تُفعل خاصية العروض والخصومات',
          desc: 'ترويج ذكي وفعال لخدماتك لفتح الصفحة الرئيسية',
          iconClass: '-ml-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2"/><path d="M8 12h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
          title: 'تُنشئ نظام ولاء ونقاط للعملاء',
          desc: 'تعزيز عودتهم وتشجيعهم على التكرار',
          iconClass: '-ml-2',
            },
            {
          icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="2"/></svg>,
          title: 'ربط المنصة بأنظمة نقاط البيع',
          desc: 'لتصلك الطلبات مباشرة وأدق بكفاءة',
          iconClass: '-ml-2',
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
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            rotate: 2
          }}
          className="w-full"
            >
          <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-5 py-4 w-[340px] max-w-full border-b-4 border-[#23336A] border-t-4 border-t-[#F25022] relative overflow-hidden group">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#23336A]/5 to-[#F25022]/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            
            {/* Orange icon circle with pulse effect */}
            <div className={`w-12 h-12 rounded-full bg-[#F25022] flex items-center justify-center shadow-md border-4 border-white ${f.iconClass} relative z-10 group-hover:scale-110 transition-transform duration-300`}>
              <div className="absolute inset-0 rounded-full animate-ping bg-[#F25022] opacity-20 duration-1000"></div>
              {f.icon}
            </div>
            
            <div className="text-right flex-1 relative z-10">
              <div className="text-[#F25022] font-bold font-cairo text-base mb-1 group-hover:translate-y-[-2px] transition-transform duration-300">{f.title}</div>
              <div className="text-[#23336A] font-cairo text-xs leading-snug">{f.desc}</div>
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