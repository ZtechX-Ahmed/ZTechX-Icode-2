import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Store, Phone, Activity, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    phoneNumber: '',
    activity: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  const activities = [
    'مطعم',
    'مقهى', 
    'حلويات',
    'مخبز',
    'عصائر',
    'وجبات سريعة',
    'أخرى'
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen unified-bg section-spacing overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-[#FF4E00] rounded-full opacity-60"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full opacity-40"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-3 h-3 bg-[#FF4E00] rounded-full opacity-50"
          animate={{ 
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <Sparkles className="absolute top-32 right-10 text-white/30 w-8 h-8 animate-rotate360" />
        <Star className="absolute bottom-32 right-32 text-[#FF4E00]/40 w-6 h-6 animate-pulse" />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#122E72]/80 via-[#1e3a8a]/70 to-[#2563eb]/60"></div>
      
      {/* Background image effect */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container-responsive text-center">
        {/* Header */}
        <motion.div 
          className="mb-12 scroll-animate"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-[#FF4E00] to-[#e63e00] hover:from-[#e63e00] hover:to-[#d63e00] text-white font-arabic font-bold rounded-xl py-4 px-12 text-responsive-lg shadow-enhanced btn-hover mb-8 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative">اشترك الآن</span>
          </motion.button>
          
          <motion.h2 
            className="text-responsive-3xl font-bold text-white mb-4 font-arabic"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            وابدأ في تطوير <span className="gradient-text animate-pulse">تجربة عملائك</span>
          </motion.h2>
          
          <motion.p 
            className="text-blue-200 text-responsive-lg font-arabic mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            إدارة مطعمك بكل التفاصيل من خلال منصة واحدة
          </motion.p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="glass-effect rounded-3xl p-8 border border-white/20 form-responsive shadow-enhanced scroll-animate"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Form Header */}
          <motion.div 
            className="bg-gradient-to-r from-white to-gray-50 rounded-xl py-6 px-8 mb-8 card-hover"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-[#122E72] font-bold text-responsive-xl font-arabic">
              املأ النموذج وابدأ الآن
            </h3>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
            {/* Restaurant Name */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="relative">
                <Store className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 z-10 ${
                  focusedField === 'restaurantName' || formData.restaurantName 
                    ? 'text-[#FF4E00] scale-110 animate-pulse' 
                    : 'text-blue-200'
                }`} />
                <input
                  type="text"
                  name="restaurantName"
                  placeholder="اسم المطعم"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('restaurantName')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pr-14 pl-6 py-4 rounded-xl border-2 border-[#FF4E00]/60 bg-white/5 text-white placeholder-blue-200 font-arabic text-responsive-base focus:outline-none focus:border-[#FF4E00] focus:ring-2 focus:ring-[#FF4E00]/30 focus:bg-white/10 transition-all duration-300 btn-hover"
                  required
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4E00]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'restaurantName' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="relative">
                <Phone className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 z-10 ${
                  focusedField === 'phoneNumber' || formData.phoneNumber 
                    ? 'text-[#FF4E00] scale-110 animate-pulse' 
                    : 'text-blue-200'
                }`} />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="رقم الجوال"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phoneNumber')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pr-14 pl-6 py-4 rounded-xl border-2 border-[#FF4E00]/60 bg-white/5 text-white placeholder-blue-200 font-arabic text-responsive-base focus:outline-none focus:border-[#FF4E00] focus:ring-2 focus:ring-[#FF4E00]/30 focus:bg-white/10 transition-all duration-300 btn-hover"
                  required
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4E00]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'phoneNumber' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </motion.div>

            {/* Activity Dropdown */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="relative">
                <Activity className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 z-10 ${
                  focusedField === 'activity' || formData.activity 
                    ? 'text-[#FF4E00] scale-110 rotate-12' 
                    : 'text-blue-200'
                }`} />
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('activity')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pr-14 pl-12 py-4 rounded-xl border-2 border-[#FF4E00]/60 bg-white/5 text-white font-arabic text-responsive-base focus:outline-none focus:border-[#FF4E00] focus:ring-2 focus:ring-[#FF4E00]/30 focus:bg-white/10 transition-all duration-300 btn-hover appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="text-gray-800 bg-white">النشاط</option>
                  {activities.map((activity, idx) => (
                    <option key={idx} value={activity} className="text-gray-800 bg-white">
                      {activity}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none transition-all duration-300 ${
                  focusedField === 'activity' ? 'text-[#FF4E00] rotate-180' : 'text-blue-200'
                }`} />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4E00]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'activity' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF4E00] to-[#e63e00] hover:from-[#e63e00] hover:to-[#d63e00] text-white font-arabic font-bold rounded-xl py-4 text-responsive-lg shadow-enhanced btn-hover relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
                <span className="relative">
                  ارسل البيانات
                </span>
              </motion.button>
            </motion.div>
          </form>

          {/* Footer text */}
          <motion.p 
            className="text-blue-200 text-responsive-sm font-arabic mt-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            اشترك الآن وابدأ تجربة فريدة تريح<br />
            من مبيعاتك وتزيد عملائك
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}