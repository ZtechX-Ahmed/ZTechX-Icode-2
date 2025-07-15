import React from "react";

const featuresLeft = [
  {
    title: "توفر دعمًا فنيًا متواصلاً",
    desc: "لضمان استمرار عملك وسلاسة تجربتك الرقمية.",
    icon: "/icons/support.svg",
  },
  {
    title: "تُفعل خاصية العروض والخصومات",
    desc: "لترويج ذكي ومثالي للخدمات داخل الصفحة الرئيسية.",
    icon: "/icons/discount.svg",
  },
  {
    title: "تنشئ نظام ولاء وربط نظام الدفع",
    desc: "لتعزيز عودة العملاء وتحفيزهم على التكرار.",
    icon: "/icons/loyalty.svg",
  },
  {
    title: "ربط المنصة بأنظمة نقاط البيع",
    desc: "لنسخ الطلبات مباشرة وإدارة ذكية.",
    icon: "/icons/pos.svg",
  },
];

const featuresRight = [
  {
    title: "تصمم كود خاص بك",
    desc: "تصمم QR كود مخصص لفتح الصفحة الرئيسية.",
    icon: "/icons/qrcode.svg",
  },
  {
    title: "تصمم منيو إلكتروني تفاعلي",
    desc: "لتنظيم عرض يعكس هوية علامتك التجارية.",
    icon: "/icons/menu.svg",
  },
  {
    title: "ربط المنيو بصفحة إلكترونية خاصة بمشروعك",
    desc: "لتشمل معلومات التواصل، الفروع، والخدمات.",
    icon: "/icons/page.svg",
  },
  {
    title: "تشغّل الطلب والدفع أونلاين",
    desc: "لتجربة سلسة وسريعة لعملائك، بدون عمولة.",
    icon: "/icons/order.svg",
  },
];

export default function FeatureCircle() {
  return (
    <section dir="rtl" className="bg-white py-16 px-4 md:px-24 font-sans">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-6">
          {featuresLeft.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full border-t-[5px] border-[#FF4A1C] shadow-md px-5 py-3 flex items-start gap-4"
            >
              <div className="min-w-10 min-h-10 bg-[#FF4A1C] text-white rounded-full flex items-center justify-center p-2">
                <img src={feature.icon} alt="" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B2A52]">{feature.title}</h3>
                <p className="text-sm text-[#0B2A52] opacity-80">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* QR Code in Center */}
        <div className="flex justify-center items-center">
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-white to-[#f1f5f9] shadow-inner flex items-center justify-center">
            <img src="/icons/qr-center.png" alt="QR Center" className="w-32" />
          </div>
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-6">
          {featuresRight.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full border-t-[5px] border-[#FF4A1C] shadow-md px-5 py-3 flex items-start gap-4"
            >
              <div className="min-w-10 min-h-10 bg-[#FF4A1C] text-white rounded-full flex items-center justify-center p-2">
                <img src={feature.icon} alt="" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#0B2A52]">{feature.title}</h3>
                <p className="text-sm text-[#0B2A52] opacity-80">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
