import React from "react";

export default function QRAdSection() {
  return (
      <section className="relative min-h-[540px] flex items-center justify-center bg-gradient-to-br from-[#F9F9F9] to-gray-100 overflow-hidden py-8" dir="rtl">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16 px-4">
          {/* Right: Phone Mockup with QR - now on the left */}
          <div className="order-2 md:order-1 flex-1 flex items-center justify-center relative min-w-[360px]">
            {/* Phone with QR */}
            <div className="relative z-10 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0" 
               ref={(el) => {
                 if (el) {
                 const observer = new IntersectionObserver(
                   ([entry]) => {
                   if (entry.isIntersecting) {
                     el.classList.add('animate-in');
                   }
                   },
                   { threshold: 0.1 }
                 );
                 observer.observe(el);
                 }
               }}>
                <img
              src="./gpy mockup.png"
              alt="ICODE QR Mockup"
              className="w-[490px] md:w-[520px] max-w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0px 16px 48px rgba(0,42,92,0.18)) drop-shadow(0px 4px 32px rgba(0,0,0,0.13))',
                borderRadius: '2.5rem',
                background: 'none',
              }}
              draggable={false}
              />
            </div>
            {/* Shadow under phone */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-2 z-0 animate-[fadeIn_1s_ease-out_1.2s_both]"
              style={{
                width: '200px',
                height: '38px',
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.22) 60%, rgba(0,0,0,0.08) 100%)',
                borderRadius: '50%',
                opacity: 0.55,
                filter: 'blur(2px)',
              }}
            ></div>
          </div>
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center gap-4 max-w-xl text-right animate-[slideInRight_1s_ease-out_0.8s_both]">
            {/* ICODE Header */}
            <h1
              className="font-cairo font-extrabold text-[2.6rem] md:text-[3.2rem] text-[#23336A] mb-1"
              style={{
                textShadow: '0 2px 12px #e6e6e6, 0 1px 0 #fff',
                letterSpacing: '0.01em',
              }}
            >
              <span className="text-[#F25022]">I</span>
              <span className="text-[#23336A]">CODE</span>
            </h1>
            {/* Subtitle */}
            <h2
              className="font-cairo font-bold text-xl md:text-2xl text-[#23336A] mb-2"
              style={{
                textShadow: '0 2px 12px #e6e6e6, 0 1px 0 #fff',
              }}
            >
              كل ما تحتاجه في كود واحد.
            </h2>
            <p className="text-[#23336A] text-xs md:text-base font-cairo leading-relaxed mb-2 max-w-md" style={{textShadow: '0 1px 0 #fff'}}>
              نحن في <span className="font-bold text-[#23336A]">ICODE</span> نبتكر حلولاً رقمية تُمكّن المطاعم والمقاهي من إدارة الطلبات والدفع أونلاين عبر منيو إلكتروني تفاعلي دون أي عمولة على المبيعات وتخصيص يعكس هوية كل علامة تجارية بشكل فريد.
            </p>
            <button className="bg-[#F25022] hover:bg-[#d63e1a] text-white font-cairo font-bold rounded-xl py-3 px-10 text-lg shadow-[0_4px_24px_rgba(242,80,34,0.18)] mt-2 transition-all duration-200 animate-[bounceIn_0.8s_ease-out_1.5s_both]">
              زود أرباحك مع ICODE
            </button>
          </div>
        </div>
        
        <style>{`
          @keyframes slideDown {
            0% {
              transform: translateY(-100px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.55;
            }
          }
          
          @keyframes slideInRight {
            0% {
              transform: translateX(50px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
            }
            70% {
              transform: scale(0.9);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>
  );
}