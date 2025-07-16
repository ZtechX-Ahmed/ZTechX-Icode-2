import { useState, useEffect, useRef } from 'react';
import { CheckCircle, Percent, ShoppingCart, Car, BarChart3, Settings, Users, Store } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function IcodeFeture() {
  const [radius, setRadius] = useState(280);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Initialize AOS and handle scroll events
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Refresh AOS on scroll for better performance
      if (window.scrollY % 50 === 0) {
        AOS.refresh();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(180);
      } else if (window.innerWidth < 1024) {
        setRadius(240);
      } else {
        setRadius(280);
      }
    };
    
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const features = [
    { icon: Percent, title: "عروض وخصومات", delay: 100 },
    { icon: CheckCircle, title: "الدفع الإلكتروني", delay: 200 },
    { icon: ShoppingCart, title: "طلب أونلاين", delay: 300 },
    { icon: Car, title: "الطلب من السيارة", delay: 400 },
    { icon: BarChart3, title: "تقارير المبيعات", delay: 500 },
    { icon: Settings, title: "تصميم حسب الهوية", delay: 600 },
    { icon: Users, title: "برنامج نقاط الولاء", delay: 700 },
    { icon: Store, title: "الطلب من المتجر", delay: 800 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="icode-features" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f2f3f7] to-[#ffffff] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#002A5C] mb-12 lg:mb-16 font-cairo"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span 
            className="text-[#F25022] inline-block"
            data-aos="flip-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >I</span>
          <span
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >CODE</span>
          <span
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1000"
          > مميزات </span>
        </h2>

        <div 
          className="relative max-w-6xl mx-auto h-[500px] sm:h-[600px] lg:h-[700px]"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {/* Central Phone with parallax effect */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-float"
            data-aos="zoom-in"
            data-aos-duration="1500"
            style={{
              transform: `translate(-50%, calc(-50% + ${scrollY * 0.03}px))`,
            }}
          >
            <img 
              src="./orange mockup.png"
              alt="ICODE Features Circle"
              className="w-[210px] sm:w-[220px] lg:w-[215px] h-auto object-contain transition-all duration-700"
              style={{
                filter: 'drop-shadow(0px 20px 60px rgba(0, 42, 92, 0.18)) drop-shadow(0px 8px 25px rgba(0, 0, 0, 0.10))',
                borderRadius: '2.5rem',
                background: 'none',
                backgroundColor: 'transparent',
                mixBlendMode: 'multiply',
              }}
              draggable={false}
            />
          </div>

          {/* Circular Features */}
          {features.map((feature, index) => {
            const angle = (index * (360 / features.length)) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // Calculate dynamic animation based on index position
            const animationType = index % 2 === 0 ? "fade-right" : "fade-left";
            const animationDelay = 100 + (index * 150);

            return (
              <div
                key={index}
                className="absolute z-10 cursor-pointer transform-gpu transition-all duration-500 ease-in-out"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                data-aos={animationType}
                data-aos-delay={animationDelay}
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
                onClick={() => {
                  const detailsSection = document.getElementById('features-details');
                  if (detailsSection) {
                    detailsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div className="relative group flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center border-4 border-gray-100 relative 
                    transition-all duration-500 
                    hover:scale-110 hover:border-[#F25022] hover:shadow-[0px_8px_30px_rgba(242,80,34,0.3)]
                    group-hover:rotate-[360deg]"
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#F25022] transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 w-full h-full rounded-full border-2 border-dashed border-[#F25022] opacity-30 animate-spin" style={{ animationDuration: '8s' }}></div>
                  </div>
                  <div 
                    className="mt-3 text-center transform transition-all duration-300 group-hover:translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={animationDelay + 200}
                    data-aos-duration="800"
                  >
                    <p className="text-xs sm:text-sm font-medium text-[#002A5C] font-cairo whitespace-nowrap max-w-[100px] leading-tight group-hover:text-[#F25022] transition-colors duration-300">
                      {feature.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section divider with scroll animation */}
        <div 
          className="w-full overflow-hidden leading-[0] rotate-180"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px]"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              d="M321.39,56.39C195.29,90.45,48.47,88.21,0,74V120H1200V0C1136.93,14.82,1047.46,37.85,903.4,57.75,736.39,81.29,647.6,44.89,489.09,43.29,383.4,42.23,339.64,60.57,321.39,56.39Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes reveal {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .reveal-sequential > * {
          opacity: 0;
          animation: reveal 0.8s ease forwards;
        }
        
        .reveal-sequential > *:nth-child(1) { animation-delay: 0.1s; }
        .reveal-sequential > *:nth-child(2) { animation-delay: 0.2s; }
        .reveal-sequential > *:nth-child(3) { animation-delay: 0.3s; }
        .reveal-sequential > *:nth-child(4) { animation-delay: 0.4s; }
        .reveal-sequential > *:nth-child(5) { animation-delay: 0.5s; }
        .reveal-sequential > *:nth-child(6) { animation-delay: 0.6s; }
        .reveal-sequential > *:nth-child(7) { animation-delay: 0.7s; }
        .reveal-sequential > *:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
}
