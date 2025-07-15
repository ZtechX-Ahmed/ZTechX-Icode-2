import React from 'react';

const features = [
  {
    title: "إمكانية الطلب عبر الهاتف",
    subtitle: "بدون تطبيق",
    items: ["لا تحتاج تطبيقات", "الوصول بسهولة"]
  },
  {
    title: "دفع إلكتروني آمن ومتنوع",
    subtitle: "متعدد",
    items: ["تطبيقات دفع متعددة", "آمن"]
  },
  {
    title: "عمولة 0% على المبيعات الرقمية",
    subtitle: "في أول وقت",
    items: ["لا توجد عمولة للمطاعم", "مجاني بالكامل"]
  },
  {
    title: "QR مخصص للمطعم الرقمي",
    subtitle: "والخصوصية",
    items: ["تصميم مخصص", "هوية مطعمك"]
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
            مميزات <span className="text-[#FF4A1C]">ICODE</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="relative group h-80"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              {/* Orange Header Card */}
              <div className="relative z-30 bg-[#FF4A1C] rounded-t-xl px-4 py-3 shadow-lg">
                <h3 className="text-white font-bold text-sm leading-tight text-center">
                  {feature.title}
                </h3>
              </div>

              {/* Blue Subtitle Card */}
              <div className="relative z-20 bg-[#1a365d] rounded-none px-4 py-2 shadow-lg">
                <p className="text-white font-semibold text-xs text-center">
                  {feature.subtitle}
                </p>
              </div>

              {/* White Content Card */}
              <div className="relative z-10 bg-white rounded-b-xl px-4 py-6 shadow-xl border-l-4 border-r-4 border-b-4 border-gray-100 h-48">
                <div className="space-y-3 mt-4">
                  {feature.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx}
                      className="text-[#1a365d] font-medium text-xs text-center leading-relaxed"
                    >
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Shadow effect */}
              <div className="absolute inset-0 bg-gray-200 rounded-xl transform translate-x-2 translate-y-2 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
