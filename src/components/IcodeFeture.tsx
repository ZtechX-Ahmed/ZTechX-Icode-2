import React from 'react';
import { CheckCircle, Percent, ShoppingCart, Car, BarChart3, Settings, Users, Store } from 'lucide-react';


export default function IcodeFeture() {
  return (
      <section id="icode-features" className="py-12 sm:py-16 lg:py-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#002A5C] mb-12 lg:mb-16 font-cairo"
            data-aos="fade-up"
          >
            مميزات <span className="text-[#F25022]">I</span>CODE
          </h2>

          <div className="relative max-w-5xl mx-auto h-[450px] sm:h-[550px] lg:h-[650px]">
            {/* Central Phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <img 
              src="./orange mockup.png"
              alt="ICODE Features Circle"
              className="w-[210px] sm:w-[220px] lg:w-[215px] h-auto object-contain"
              style={{
                filter: 'drop-shadow(0px 20px 60px rgba(0, 42, 92, 0.18)) drop-shadow(0px 8px 25px rgba(0, 0, 0, 0.10))',
                borderRadius: '2.5rem',
                background: 'none',
                backgroundColor: 'transparent',
                // Remove background and white by using mix-blend-mode if needed
                mixBlendMode: 'multiply',
              }}
              draggable={false}
              />
            </div>

            {/* Circular Features */}
            {[
              { icon: Percent, title: "عروض وخصومات", angle: 0, delay: 100 },
              { icon: CheckCircle, title: "الدفع الإلكتروني", angle: 45, delay: 200 },
              { icon: ShoppingCart, title: "طلب أونلاين", angle: 90, delay: 300 },
              { icon: Car, title: "الطلب من السيارة", angle: 135, delay: 400 },
              { icon: BarChart3, title: "تقارير المبيعات", angle: 180, delay: 500 },
              { icon: Settings, title: "تصميم حسب الهوية", angle: 225, delay: 600 },
              { icon: Users, title: "برنامج نقاط الولاء", angle: 270, delay: 700 },
              { icon: Store, title: "الطلب من المتجر", angle: 315, delay: 800 },
            ].map((feature, index) => {
              const radius = window.innerWidth < 640 ? 130 : window.innerWidth < 1024 ? 180 : 220;
              const angleRad = (feature.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={index}
                  className="absolute z-10 cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                  onClick={() => {
                    const detailsSection = document.getElementById('features-details');
                    if (detailsSection) {
                      detailsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <div className="relative group flex flex-col items-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border-4 border-gray-100 relative hover:scale-110 transition-all duration-300 hover:border-[#F25022] hover:shadow-[0px_8px_30px_rgba(242,80,34,0.3)]">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#F25022]" />
                      <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-[#F25022] opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs sm:text-sm font-medium text-[#002A5C] font-cairo whitespace-nowrap max-w-[100px] leading-tight">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Connecting Dashed Circle */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r={window.innerWidth < 640 ? "130" : window.innerWidth < 1024 ? "180" : "220"}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="2"
                strokeDasharray="10,5"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </section>
  )
}
