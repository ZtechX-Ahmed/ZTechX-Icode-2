import React from 'react';

const stats = [
  {
    number: "500+",
    title: "عميل راضٍ",
    desc: "يثق في خدماتنا",
    image: "/images/clients.png"
  },
  {
    number: "50+",
    title: "مشروع منجز",
    desc: "بنجاح باهر",
    image: "/images/projects.png"
  },
  {
    number: "24/7",
    title: "دعم فني",
    desc: "متواصل دائماً",
    image: "/images/support.png"
  },
  {
    number: "99%",
    title: "نسبة الرضا",
    desc: "من عملائنا",
    image: "/images/satisfaction.png"
  }
];

export default function NumbersSection() {
  return (
    <section dir="rtl" className="bg-[#0B2A52] py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          بالأرقام <span className="text-[#FF4A1C]">ننجح معاً</span>
        </h2>
        <p className="text-blue-200 mb-16 text-lg">إنجازاتنا تتحدث عن نفسها</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <div className="text-center">
                {/* Image */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                  <img 
                    src={stat.image} 
                    alt={stat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-4xl font-bold text-[#FF4A1C] mb-2">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {stat.title}
                </h3>
                
                <p className="text-blue-200 text-sm">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              هل أنت مستعد للانضمام إلى قائمة عملائنا الناجحين؟
            </h3>
            <p className="text-blue-200 mb-6">
              ابدأ رحلتك الرقمية معنا اليوم واكتشف الفرق
            </p>
            <button className="bg-[#FF4A1C] hover:bg-[#e63e15] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              ابدأ مشروعك الآن
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}