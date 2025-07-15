import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    phoneNumber: '',
    activity: ''
  });

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
          <button className="bg-gradient-to-r from-[#FF4A1C] to-[#e63e1a] hover:from-[#e63e1a] hover:to-[#d63e1a] text-white font-arabic font-bold rounded-xl py-4 px-12 text-lg shadow-lg transition-all duration-300 transform hover:scale-105 mb-8">
            اشترك الآن
          </button>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-arabic animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            وابدأ في تطوير <span className="text-[#FF4A1C]">تجربة عملائك</span>
          </h2>
          
          <p className="text-blue-200 text-lg font-arabic mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            إدارة مطعمك بكل التفاصيل من خلال منصة واحدة
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          {/* Form Header */}
          <div className="bg-white rounded-xl py-4 px-6 mb-8">
            <h3 className="text-[#0B2A52] font-bold text-xl font-arabic">
              املأ النموذج وابدأ الآن
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
            {/* Restaurant Name */}
            <div className="animate-slideInRight" style={{animationDelay: '0.8s'}}>
              <input
                type="text"
                name="restaurantName"
                placeholder="اسم المطعم"
                value={formData.restaurantName}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#FF4A1C] bg-transparent text-white placeholder-blue-200 font-arabic text-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="animate-slideInLeft" style={{animationDelay: '1s'}}>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="رقم الجوال"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#FF4A1C] bg-transparent text-white placeholder-blue-200 font-arabic text-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300"
                required
              />
            </div>

            {/* Activity Dropdown */}
            <div className="relative animate-slideInRight" style={{animationDelay: '1.2s'}}>
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-xl border-2 border-[#FF4A1C] bg-transparent text-white font-arabic text-lg focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-300 appearance-none cursor-pointer"
                required
              >
                <option value="" className="text-gray-800 bg-white">النشاط</option>
                {activities.map((activity, idx) => (
                  <option key={idx} value={activity} className="text-gray-800 bg-white">
                    {activity}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-200 w-6 h-6 pointer-events-none" />
            </div>

            {/* Submit Button */}
            <div className="animate-fadeInUp" style={{animationDelay: '1.4s'}}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF4A1C] to-[#e63e1a] hover:from-[#e63e1a] hover:to-[#d63e1a] text-white font-arabic font-bold rounded-xl py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                اشترك الآن
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
    </section>
  );
}