import React from 'react';

export default function HeroSection() {
  return (
    <section dir="rtl" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#FF4A1C] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">i</span>
              </div>
              <span className="text-2xl font-bold text-[#0B2A52]">CODE</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2A52] leading-tight">
              كل ما تحتاجه في <span className="text-[#FF4A1C]">كود واحد</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              حلّ متكامل لإنشاء منيو إلكتروني تفاعلي، مع نظام طلبات وإدارة متطورة. 
              صمم QR كود مخصص واربط منيوك بصفحة إلكترونية شاملة تعكس هوية علامتك التجارية.
            </p>

            <button className="bg-[#FF4A1C] hover:bg-[#e63e15] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              ابدأ الآن مجاناً
            </button>
          </div>

          {/* Phone Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-[#0B2A52] to-[#1e3a8a] rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-xl mb-4 mx-auto flex items-center justify-center">
                    <span className="text-3xl">📱</span>
                  </div>
                  <p className="text-sm opacity-80">ستضاف صورة الموبايل هنا</p>
                </div>
              </div>
              
              {/* Floating QR Code */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs">QR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}