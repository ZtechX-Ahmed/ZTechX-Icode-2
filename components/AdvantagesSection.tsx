import React from 'react';

const advantages = [
  {
    title: "سهولة الاستخدام",
    desc: "واجهة بسيطة ومفهومة",
    icon: "🎯"
  },
  {
    title: "تصميم متجاوب",
    desc: "يعمل على جميع الأجهزة",
    icon: "📱"
  },
  {
    title: "أمان البيانات",
    desc: "حماية عالية للمعلومات",
    icon: "🔒"
  },
  {
    title: "دعم متواصل",
    desc: "فريق دعم فني 24/7",
    icon: "🎧"
  },
  {
    title: "تحديثات مجانية",
    desc: "تحسينات وميزات جديدة",
    icon: "🔄"
  },
  {
    title: "تكامل سهل",
    desc: "ربط مع الأنظمة الأخرى",
    icon: "🔗"
  }
];

export default function AdvantagesSection() {
  return (
    <section dir="rtl" className="bg-gray-50 py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0B2A52] mb-4">
          مميزات <span className="text-[#FF4A1C]">iCODE</span>
        </h2>
        <p className="text-gray-600 mb-16 text-lg">حلول متطورة لإدارة أعمالك بكفاءة</p>

        <div className="relative">
          {/* Center Image */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-80 bg-gradient-to-br from-[#0B2A52] to-[#1e3a8a] rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-xl mb-4 mx-auto flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
                <p className="text-sm opacity-80">صورة الموبايل</p>
              </div>
            </div>
          </div>

          {/* Circular Advantages - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {advantages.map((advantage, idx) => {
                const angle = (idx * 60) - 90; // 60 degrees apart, starting from top
                const radius = 280;
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={idx}
                    className="absolute w-48 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-4 border-2 border-[#FF4A1C]/20 hover:border-[#FF4A1C] transition-all duration-300 hover:shadow-xl">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#FF4A1C] text-white rounded-full mx-auto mb-3 flex items-center justify-center text-xl">
                          {advantage.icon}
                        </div>
                        <h3 className="font-bold text-[#0B2A52] mb-2">{advantage.title}</h3>
                        <p className="text-sm text-gray-600">{advantage.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grid Layout - Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-4 border-2 border-[#FF4A1C]/20 hover:border-[#FF4A1C] transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#FF4A1C] text-white rounded-full mx-auto mb-3 flex items-center justify-center text-xl">
                    {advantage.icon}
                  </div>
                  <h3 className="font-bold text-[#0B2A52] mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-600">{advantage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}