import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const activityOptions = [
  { value: '', label: 'النشاط' },
  { value: 'restaurant', label: 'مطعم' },
  { value: 'store', label: 'متجر' },
  { value: 'services', label: 'خدمات' },
  { value: 'other', label: 'أخرى' },
];

const OrangeHeroFormSection = () => {
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
    <section className="relative min-h-[100vh] flex items-center justify-center bg-[#23336A] overflow-hidden" style={{ direction: 'rtl' }}>
      {/* Background overlay image */}
      <div className="absolute inset-0 z-0">
        <img src="/bg-restaurant.jpg" alt="bg" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-[#23336A]/80" />
      </div>
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 px-4 py-12">
        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-start justify-center gap-6 max-w-xl"
        >
          <button className="bg-[#F25022] hover:bg-[#d63e1a] text-white font-cairo font-bold rounded-lg py-3 px-12 text-lg shadow-lg mb-2 transition-all duration-200">
            اشترك الآن
          </button>
          <h2 className="text-[#F25022] text-2xl sm:text-3xl font-bold font-cairo mb-1 leading-tight">
            وابدأ في تطوير تجربة عملائك
          </h2>
          <p className="text-white text-base font-cairo mb-2">
            إدارة مطعمك بكل التفاصيل من خلال منصة واحدة
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white text-[#23336A] font-cairo font-bold rounded-lg py-2 px-8 text-base shadow-md mb-4 border-2 border-white hover:bg-gray-100 transition-all duration-200"
            style={{ boxShadow: '0 2px 12px 0 rgba(31,38,135,0.10)' }}
          >
            املأ النموذج وابدأ الآن
          </motion.button>
        </motion.div>
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-transparent rounded-xl p-0 w-full max-w-xs min-w-[270px]"
        >
          <div className="flex flex-col gap-1">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-2 border-[#F25022] rounded-lg text-right font-cairo text-base text-white placeholder:text-[#F25022] px-4 py-3 focus:outline-none focus:border-white transition-all duration-200"
              required
              autoComplete="off"
              placeholder="اسم المطعم"
              style={{ fontWeight: 600 }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-2 border-[#F25022] rounded-lg text-right font-cairo text-base text-white placeholder:text-[#F25022] px-4 py-3 focus:outline-none focus:border-white transition-all duration-200"
              required
              autoComplete="off"
              placeholder="رقم الجوال"
              style={{ fontWeight: 600 }}
            />
          </div>
          <div className="flex flex-col gap-1 relative">
            <select
              id="activity"
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              className="appearance-none bg-transparent border-2 border-[#F25022] rounded-lg text-right font-cairo text-base text-white px-4 py-3 focus:outline-none focus:border-white transition-all duration-200 pr-8"
              required
              style={{ fontWeight: 600 }}
            >
              {activityOptions.map(opt => (
                <option key={opt.value} value={opt.value} className="text-[#23336A]">{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F25022] pointer-events-none" />
          </div>
          <button
            type="submit"
            className="bg-[#F25022] hover:bg-[#d63e1a] text-white font-cairo font-bold rounded-lg py-3 mt-2 transition-all duration-200 shadow-md text-base w-full"
            style={{ fontSize: '1.1rem' }}
          >
            اشترك الآن
          </button>
          <p className="text-white text-center text-sm font-cairo mt-2">
            اشترك الآن وابدأ تجربة رقمية ترفع من مبيعاتك ويشعر عملاءك
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default OrangeHeroFormSection;
