import React from 'react';
import { QrCode } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import '@lottiefiles/dotlottie-react/dist/index.css';

export default function PackagesSection() {
  return ( 
  <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-16 left-16 w-24 h-24 border border-gray-300 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-20 h-20 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 border border-gray-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A52] mb-4 font-arabic" data-aos="fade-up">
            باقــات <span className="text-[#FF4A1C]">ICODE</span>
          </h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">

          {[
            {
              title: "الباقة الذهبية",
              colorBar: "from-[#FFD700] to-[#FFA500]",
              qrData: "GoldenPackage",
              features: [
                "كل مميزات الباقة الفضية",
                "طلب من الطاولة",
                "برنامج ولاء ونقاط",
                "تفعيل الدفع الإلكتروني",
                "تسويق إلكتروني",
              ],
              delay: "100",
            },
            {
              title: "الباقة الفضية",
              colorBar: "from-[#C0C0C0] to-[#A8A8A8]",
              qrData: "SilverPackage",
              features: [
                "مميزات الباقة الأساسية",
                "تفعيل طلبات أونلاين",
                "تطبيق استقبال الطلبات",
                "منو لطفائي إلكتروني",
                "دعم فني على مدار الساعة",
              ],
              delay: "200",
            },
            {
              title: "الباقة الأساسية",
              colorBar: "from-[#FF4A1C] to-[#ff6b47]",
              qrData: "BasicPackage",
              features: [
                "تصميم QR كود",
                "موقع إلكتروني",
                "صفحة رئيسية",
                "منو لطفائي إلكتروني",
                "دعم فني مدار الساعة",
              ],
              delay: "300",
            },
          ].map((pkg, index) => (
            <div className="group" key={index} data-aos="fade-up" data-aos-delay={pkg.delay}>
              <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.18)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* QR Section */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center items-center border-4 border-white rounded-t-2xl">
                  <div className="relative">
                    {/* Frame Corners */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-[#0B2A52] rounded-tl-lg"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-[#0B2A52] rounded-tr-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-[#0B2A52] rounded-bl-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-[#0B2A52] rounded-br-lg"></div>

                    {/* QR Code + Animation */}
                    <div className="relative w-24 h-24 bg-white rounded-lg p-1 shadow-lg overflow-hidden">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pkg.qrData}`}
                        alt="QR Code"
                        className="w-full h-full object-contain rounded"
                      />
                      <div className="absolute left-0 w-full h-full top-0 overflow-hidden rounded">
                        <div className="absolute left-0 w-full h-[2px] bg-green-400 animate-scan"></div>
                      </div>
                    </div>

                    {/* Colored Bottom Bar */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.colorBar} rounded-b-lg`}></div>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center py-4 bg-white">
                  <h3 className="text-xl font-bold text-[#FF4A1C] font-arabic">{pkg.title}</h3>
                </div>

                {/* Features */}
                <div className="bg-white px-6 pb-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[#0B2A52] font-arabic">
                        <div className="w-2 h-2 bg-[#FF4A1C] rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}