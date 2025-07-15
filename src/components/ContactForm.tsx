import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const activityOptions = [
  { value: '', label: 'النشاط:' },
  { value: 'restaurant', label: 'مطعم' },
  { value: 'store', label: 'متجر' },
  { value: 'services', label: 'خدمات' },
  { value: 'other', label: 'أخرى' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    activity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <section className="py-10 bg-gradient-to-br from-[#f9f9f9] to-[#e9ecf7] flex flex-col items-center min-h-[100vh]">
      {/* Headline */}
      <div className="text-center mb-6">
        <h2 className="text-[#23336A] text-2xl sm:text-3xl font-bold font-cairo mb-2 leading-tight">
          هل أنت مستعد لإحداث تحول مميز في تجربة عملائك؟
        </h2>
        <h3 className="text-[#F25022] text-xl sm:text-2xl font-bold font-cairo leading-tight">
          املأ النموذج وابدأ الآن!
        </h3>
      </div>
      {/* Phone Mockup */}
      <div className="relative flex justify-center items-center w-full" style={{ minHeight: '650px' }}>
        {/* Shadow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[630px] rounded-[2.5rem] bg-[#23336A]/30" style={{ filter: 'blur(32px)', zIndex: 0 }} />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Phone Frame */}
          <div className="w-[300px] h-[600px] mx-auto rounded-[2.2rem] border-[7px] border-[#23336A] bg-gradient-to-b from-white to-[#eaf2fb] shadow-2xl overflow-hidden flex flex-col" style={{ boxShadow: '0 12px 60px 0 rgba(31,38,135,0.18)' }}>
            {/* Status Bar */}
            <div className="bg-[#F25022] h-8 flex items-center justify-between px-4 text-white text-xs font-medium select-none">
              <span className="font-cairo">12:00</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-white rounded-sm">
                  <div className="w-full h-full bg-white rounded-sm"></div>
                </div>
                <span>4G</span>
                {/* WiFi Icon */}
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="ml-1"><path d="M2.93 7.93a10 10 0 0 1 14.14 0M5.76 10.76a6 6 0 0 1 8.48 0M8.59 13.59a2 2 0 0 1 2.82 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="16" r="1" fill="white"/></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="7" width="2" height="6" rx="1" fill="white"/><rect x="5" y="5" width="2" height="8" rx="1" fill="white"/><rect x="9" y="3" width="2" height="10" rx="1" fill="white"/><rect x="13" y="1" width="2" height="12" rx="1" fill="white"/></svg>
              </div>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 px-8 pt-10 pb-6 flex-1 justify-center">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[#23336A] text-base font-cairo text-right mb-1">اسم المطعم:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b-[3px] border-[#23336A] focus:border-[#F25022] focus:ring-0 text-right font-cairo text-lg text-[#23336A] placeholder:text-gray-400 rounded-none px-0 py-1"
                  required
                  autoComplete="off"
                  style={{ fontWeight: 600 }}
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-[#23336A] text-base font-cairo text-right mb-1">رقم الجوال:</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-0 border-b-[3px] border-[#23336A] focus:border-[#F25022] focus:ring-0 text-right font-cairo text-lg text-[#23336A] placeholder:text-gray-400 rounded-none px-0 py-1"
                  required
                  autoComplete="off"
                  style={{ fontWeight: 600 }}
                />
              </div>
              {/* Activity */}
              <div className="flex flex-col gap-1 relative">
                <label htmlFor="activity" className="text-[#23336A] text-base font-cairo text-right mb-1">النشاط:</label>
                <div className="relative">
                  <select
                    id="activity"
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-0 border-b-[3px] border-[#23336A] focus:border-[#F25022] focus:ring-0 text-right font-cairo text-lg text-[#23336A] rounded-none px-0 py-1 w-full pr-6"
                    required
                    style={{ fontWeight: 600 }}
                  >
                    {activityOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute left-1 top-2 w-4 h-4 text-[#23336A] pointer-events-none" />
                </div>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="bg-[#F25022] hover:bg-[#d63e1a] text-white font-cairo font-bold rounded-lg py-2 mt-2 transition-all duration-200 shadow-md text-base w-full"
                style={{ fontSize: '1.1rem' }}
              >
                ارسل البيانات
              </button>
              {/* Logo */}
              <div className="flex justify-center items-center mt-2 select-none">
                <span className="text-[#F25022] font-bold text-lg font-cairo">I</span>
                <span className="text-[#23336A] font-bold text-lg font-cairo ml-1">CODE</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;