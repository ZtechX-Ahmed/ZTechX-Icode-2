import React from 'react';

export default function FeaturesDetailsSection() {
  return (
    <section id="features-details" className="py-16 lg:py-20 bg-gradient-to-br from-[#F8F9FA] to-[#E3E6F0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF4A1C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#0B2A52]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2A52] mb-6 font-arabic" data-aos="fade-up">
            مميزات <span className="text-[#FF4A1C]">I</span>CODE
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-arabic" data-aos="fade-up" data-aos-delay="100">
            اكتشف كيف تساعدك منصة ICODE في تطوير عملك وزيادة أرباحك من خلال مميزات متقدمة ومتكاملة
          </p>
        </div>

        {/* Top Row - 4 Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="100">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-12">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-2xl p-4 text-white text-center shadow-lg">
                <h3 className="text-sm font-bold font-arabic">إمكانية الطلب اون لاين</h3>
              </div>
              
              {/* Blue Cards Stack */}
              <div className="relative">
                {/* Card 3 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4A5C8A] to-[#3B4371] rounded-b-2xl p-4 text-white transform translate-y-3 translate-x-2 shadow-xl z-10">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">ولاء وبينى علاقة</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#5A6B9A] to-[#4A5C8A] rounded-b-2xl p-4 text-white transform translate-y-2 translate-x-1 shadow-xl z-20">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">تحديث المنيو في أي وقت</p>
                  </div>
                </div>
                
                {/* Card 1 - Main */}
                <div className="bg-gradient-to-b from-[#6A7BAA] to-[#5A6B9A] rounded-b-2xl p-4 text-white shadow-2xl z-30 relative">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic">أرسل الطلبات أونلاين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="200">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-12">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-2xl p-4 text-white text-center shadow-lg">
                <h3 className="text-sm font-bold font-arabic">دمج الموقع مع نقطة البيع</h3>
              </div>
              
              {/* Blue Cards Stack */}
              <div className="relative">
                {/* Card 3 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4A5C8A] to-[#3B4371] rounded-b-2xl p-4 text-white transform translate-y-3 translate-x-2 shadow-xl z-10">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">ندمج مع نقطة البيع</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#5A6B9A] to-[#4A5C8A] rounded-b-2xl p-4 text-white transform translate-y-2 translate-x-1 shadow-xl z-20">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">نسحب تحديث أداء المنتجات</p>
                  </div>
                </div>
                
                {/* Card 1 - Main */}
                <div className="bg-gradient-to-b from-[#6A7BAA] to-[#5A6B9A] rounded-b-2xl p-4 text-white shadow-2xl z-30 relative">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic">تحديثات أداء المبيعات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="300">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-12">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-2xl p-4 text-white text-center shadow-lg">
                <h3 className="text-sm font-bold font-arabic">عمولة 0% على المبيعة الرئيسية</h3>
              </div>
              
              {/* Blue Cards Stack */}
              <div className="relative">
                {/* Card 3 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4A5C8A] to-[#3B4371] rounded-b-2xl p-4 text-white transform translate-y-3 translate-x-2 shadow-xl z-10">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">أرباحك كاملة بلا عمولات</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#5A6B9A] to-[#4A5C8A] rounded-b-2xl p-4 text-white transform translate-y-2 translate-x-1 shadow-xl z-20">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">أكبر نشاطات الطلبات والموقع</p>
                  </div>
                </div>
                
                {/* Card 1 - Main */}
                <div className="bg-gradient-to-b from-[#6A7BAA] to-[#5A6B9A] rounded-b-2xl p-4 text-white shadow-2xl z-30 relative">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic">تفعيل طلبات الموقع</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="400">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-12">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-2xl p-4 text-white text-center shadow-lg">
                <h3 className="text-sm font-bold font-arabic">مختص للطبعة الرئيسية</h3>
              </div>
              
              {/* Blue Cards Stack */}
              <div className="relative">
                {/* Card 3 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#4A5C8A] to-[#3B4371] rounded-b-2xl p-4 text-white transform translate-y-3 translate-x-2 shadow-xl z-10">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">تفعيل العروض والخصومات</p>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#5A6B9A] to-[#4A5C8A] rounded-b-2xl p-4 text-white transform translate-y-2 translate-x-1 shadow-xl z-20">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic opacity-90">تصميم يعكس علامتك التجارية</p>
                  </div>
                </div>
                
                {/* Card 1 - Main */}
                <div className="bg-gradient-to-b from-[#6A7BAA] to-[#5A6B9A] rounded-b-2xl p-4 text-white shadow-2xl z-30 relative">
                  <div className="h-16 flex items-center justify-center">
                    <p className="text-xs text-center font-arabic">تصميم حسب الهوية</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 2 Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Large Card 1 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="500">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-8">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-3xl p-6 text-white text-center shadow-lg">
                <h3 className="text-lg font-bold font-arabic">ولاء وبينى علاقة</h3>
              </div>
              
              {/* Content Card */}
              <div className="bg-gradient-to-b from-[#E5E7EB] to-[#D1D5DB] rounded-b-3xl p-8 shadow-2xl">
                <div className="space-y-4 text-gray-700 font-arabic">
                  <p className="text-sm leading-relaxed">
                    نحن نؤمن أن أرباحك من حقك وحدك. أرباحك كاملة ولا نأخذ أي نسبة من مبيعاتك. وكل وسائل الدفع ... وودائعك بالبنك!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>برنامج ولاء متقدم للعملاء</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>مكافآت وخصومات حصرية</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>تجربة عملاء مميزة</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic">مجاني - منصة الامتياز</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Card 2 */}
          <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="600">
            <div className="relative transform-style-preserve-3d transition-transform duration-700 hover:rotate-y-8">
              {/* Orange Header */}
              <div className="bg-gradient-to-r from-[#FF4A1C] to-[#ff6b47] rounded-t-3xl p-6 text-white text-center shadow-lg">
                <h3 className="text-lg font-bold font-arabic">دفع إلكتروني بدون تعقيد</h3>
              </div>
              
              {/* Content Card */}
              <div className="bg-gradient-to-b from-[#E5E7EB] to-[#D1D5DB] rounded-b-3xl p-8 shadow-2xl">
                <div className="space-y-4 text-gray-700 font-arabic">
                  <p className="text-sm leading-relaxed">
                    أفضل أنظمة الدفع الإلكتروني المتاحة للعملاء بسهولة ويسر، مع دعم جميع وسائل الدفع الحديثة والآمنة لضمان راحة عملائك.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>دفع آمن ومشفر</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>وسائل دفع متعددة</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 bg-[#FF4A1C] rounded-full"></div>
                      <span>تحويل فوري للحساب</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 italic">أمان عالي - تقنية حديثة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}