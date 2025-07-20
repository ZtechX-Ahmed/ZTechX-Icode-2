import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SecondPage = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center unified-bg section-spacing"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF4E00] rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#122E72] rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-responsive text-center">
        {/* Section Header */}
        <motion.div 
          className="mb-12 scroll-animate"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-responsive gradient-text mb-4">
            مميزات متقدمة
          </h2>
          <p className="body-responsive text-[#122E72] max-w-3xl mx-auto">
            اكتشف كيف يمكن لـ ICODE أن يحول تجربة عملائك ويزيد من أرباحك
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="relative scroll-animate"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="./second page.png"
            alt="QR Features"
            className="img-responsive max-w-4xl mx-auto shadow-enhanced rounded-2xl"
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ duration: 0.3 }}
            style={{
              filter: 'drop-shadow(0px 20px 60px rgba(0,42,92,0.2))',
            }}
          />
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -top-4 -left-4 w-8 h-8 bg-[#FF4E00] rounded-full opacity-60"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#122E72] rounded-full opacity-40"
            animate={{ 
              y: [0, 20, 0],
              scale: [1, 0.8, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* Feature Points */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 scroll-animate"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { title: "سهولة الاستخدام", desc: "واجهة بديهية وسهلة للعملاء" },
            { title: "أمان عالي", desc: "حماية متقدمة للبيانات والمدفوعات" },
            { title: "دعم مستمر", desc: "فريق دعم فني متاح 24/7" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-responsive-lg font-bold text-[#122E72] mb-3">
                {feature.title}
              </h3>
              <p className="text-responsive-sm text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecondPage;