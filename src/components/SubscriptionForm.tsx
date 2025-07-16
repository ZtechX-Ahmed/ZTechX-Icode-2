import React, { useState } from 'react';
import { ChevronDown, Store, Phone, Activity, Sparkles, Star } from 'lucide-react';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    phoneNumber: '',
    activity: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const activities = [
    'مطعم',
    'مقهى', 
    'حلويات',
    'مخبز',
    'عصائر',
    'وجبات سريعة',
    'أخرى'
  ];

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
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B2A52] via-[#1e3a8a] to-[#2563eb] py-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-[#FF4A1C] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FF4A1C] rounded-full animate-ping opacity-50"></div>
        <Sparkles className="absolute top-32 right-10 text-white/30 w-8 h-8 animate-spin" style={{animationDuration: '3s'}} />
        <Star className="absolute bottom-32 right-32 text-[#FF4A1C]/40 w-6 h-6 animate-pulse" />
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background image effect */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Restaurant background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <button className="bg-gradient-to-r from-[#FF4A1C] to-[#e63e1a] hover:from-[#e63e1a] hover:to-[#d63e1a] text-white font-arabic font-bold rounded-xl py-4 px-12 text-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-8 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            <span className="relative">اشترك الآن</span>
          </button>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-arabic animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            وابدأ في تطوير <span className="text-[#FF4A1C] animate-pulse">تجربة عملائك</span>
          </h2>
          
          <p className="text-blue-200 text-lg font-arabic mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            إدارة مطعمك بكل التفاصيل من خلال منصة واحدة
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto animate-fadeInUp shadow-2xl" style={{animationDelay: '0.6s'}}>
          {/* Form Header */}
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl py-4 px-6 mb-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-[#0B2A52] font-bold text-xl font-arabic">
              املأ النموذج وابدأ الآن
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
            {/* Restaurant Name */}
            <div className="relative animate-slideInRight group" style={{animationDelay: '0.8s'}}>
              <div className="relative">
                <Store className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 ${
                  focusedField === 'restaurantName' || formData.restaurantName 
                    ? 'text-[#FF4A1C] scale-110' 
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
                  className="w-full pr-14 pl-6 py-4 rounded-xl border-2 border-[#FF4A1C]/60 bg-white/5 text-white placeholder-blue-200 font-arabic text-lg focus:outline-none focus:border-[#FF4A1C] focus:ring-2 focus:ring-[#FF4A1C]/30 focus:bg-white/10 transition-all duration-300 transform focus:scale-105"
                  required
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4A1C]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'restaurantName' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="relative animate-slideInLeft group" style={{animationDelay: '1s'}}>
              <div className="relative">
                <Phone className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 ${
                  focusedField === 'phoneNumber' || formData.phoneNumber 
                    ? 'text-[#FF4A1C] scale-110 animate-pulse' 
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
                  className="w-full pr-14 pl-6 py-4 rounded-xl border-2 border-[#FF4A1C]/60 bg-white/5 text-white placeholder-blue-200 font-arabic text-lg focus:outline-none focus:border-[#FF4A1C] focus:ring-2 focus:ring-[#FF4A1C]/30 focus:bg-white/10 transition-all duration-300 transform focus:scale-105"
                  required
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4A1C]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'phoneNumber' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>

            {/* Activity Dropdown */}
            <div className="relative animate-slideInRight group" style={{animationDelay: '1.2s'}}>
              <div className="relative">
                <Activity className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 transition-all duration-300 z-10 ${
                  focusedField === 'activity' || formData.activity 
                    ? 'text-[#FF4A1C] scale-110 rotate-12' 
                    : 'text-blue-200'
                }`} />
                <select
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('activity')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pr-14 pl-12 py-4 rounded-xl border-2 border-[#FF4A1C]/60 bg-white/5 text-white font-arabic text-lg focus:outline-none focus:border-[#FF4A1C] focus:ring-2 focus:ring-[#FF4A1C]/30 focus:bg-white/10 transition-all duration-300 transform focus:scale-105 appearance-none cursor-pointer"
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
                  focusedField === 'activity' ? 'text-[#FF4A1C] rotate-180' : 'text-blue-200'
                }`} />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF4A1C]/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'activity' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="animate-fadeInUp" style={{animationDelay: '1.4s'}}>
              <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF4A1C] to-[#e63e1a] hover:from-[#e63e1a] hover:to-[#d63e1a] text-white font-arabic font-bold rounded-xl py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
              <span className="relative">
                اشترك الآن
              </span>
              </button>
            </div>
            </form>

          {/* Footer text */}
          <p className="text-blue-200 text-sm font-arabic mt-6 leading-relaxed animate-fadeInUp" style={{animationDelay: '1.6s'}}>
            اشترك الآن وابدأ تجربة فريدة تريح<br />
            من مبيعاتك وتزيد عملائك
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}