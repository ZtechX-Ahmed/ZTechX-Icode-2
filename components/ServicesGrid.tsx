import React from 'react';
import { 
  Smartphone, 
  ShoppingCart, 
  CreditCard, 
  Settings,
  BarChart3,
  Users,
  Package,
  Truck,
  Monitor,
  Percent,
  Store,
  Car
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: "تطوير تجربة عملائك",
      description: "نوفر تجربة مستخدم متميزة تضمن رضا العملاء وزيادة المبيعات",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "دعم لجميع أنواع الأعمال",
      description: "حلول متكاملة تناسب جميع أنواع الأعمال التجارية",
      icon: Store,
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "طلب المنتجات بسهولة",
      description: "نظام طلبات سهل وسريع يوفر الوقت والجهد",
      icon: ShoppingCart,
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "مدفوعات آمنة",
      description: "نظام دفع آمن ومتعدد الطرق لضمان راحة العملاء",
      icon: CreditCard,
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      title: "تصميم حسب الهوية",
      description: "تصميم مخصص يعكس هوية علامتك التجارية",
      icon: Settings,
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600"
    },
    {
      title: "تحليلات وتقارير",
      description: "تقارير مفصلة لمتابعة أداء أعمالك وزيادة الأرباح",
      icon: BarChart3,
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      title: "إدارة المخزون",
      description: "نظام متطور لإدارة المخزون وتتبع المنتجات",
      icon: Package,
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      title: "خدمة التوصيل",
      description: "ربط مع خدمات التوصيل لضمان وصول الطلبات",
      icon: Truck,
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      title: "واجهة إدارية",
      description: "لوحة تحكم شاملة لإدارة جميع جوانب أعمالك",
      icon: Monitor,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      title: "عروض وخصومات",
      description: "نظام عروض متطور لزيادة المبيعات وجذب العملاء",
      icon: Percent,
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      title: "تطبيق موبايل",
      description: "تطبيق جوال متكامل لإدارة أعمالك من أي مكان",
      icon: Smartphone,
      color: "bg-gradient-to-br from-violet-500 to-violet-600"
    },
    {
      title: "طلب من السيارة",
      description: "خدمة Drive-Through لتسهيل عملية الطلب والاستلام",
      icon: Car,
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002A5C] mb-4 font-cairo"
            data-aos="fade-up"
          >
            مميزات <span className="text-[#F25022]">I</span>CODE
          </h2>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto font-cairo"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            اكتشف جميع المميزات التي تجعل ICODE الخيار الأمثل لنمو أعمالك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-cairo group-hover:text-[#F25022] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-cairo">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;