// // // // // import React from "react";

// // // // // export default function QRScanner() {
// // // // //   return (
// // // // //     <div className="flex items-center justify-center min-h-screen bg-gray-900">
// // // // //       <div className="relative w-64 h-64 bg-white rounded-lg p-4 shadow-lg">
// // // // //         {/* QR Code image */}
// // // // //         <img
// // // // //           src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld"
// // // // //           alt="QR Code"
// // // // //           className="w-full h-full object-contain rounded"
// // // // //         />

// // // // //         {/* Scanning line */}
// // // // //         <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded">
// // // // //           <div className="absolute top-0 left-0 w-full h-1 bg-green-400 animate-scan"></div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import { motion } from "framer-motion";

// // // // const messages = [
// // // //   { id: 1, text: "Hey, how are you?", side: "left" },
// // // //   { id: 2, text: "I’m good! You?", side: "right" },
// // // //   { id: 3, text: "Doing great, thanks!", side: "left" },
// // // //   { id: 4, text: "Awesome!", side: "right" },
// // // // ];

// // // // const bubbleVariants = {
// // // //   hidden: { opacity: 0, scale: 0.5, y: 50 },
// // // //   visible: (i: number) => ({
// // // //     opacity: 1,
// // // //     scale: 1,
// // // //     y: 0,
// // // //     transition: {
// // // //       delay: i * 0.3,
// // // //       type: "spring" as const,
// // // //       stiffness: 100,
// // // //     },
// // // //   }),
// // // // };

// // // // export default function PhoneMockup() {
// // // //   return (
// // // //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// // // //       <div className="w-80 h-[600px] bg-white rounded-3xl shadow-2xl border-4 border-gray-300 relative overflow-hidden">
// // // //         <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-300 h-1 w-16 rounded-full"></div>
// // // //         <div className="p-4 space-y-4 mt-10">
// // // //           {messages.map((msg, i) => (
// // // //             <motion.div
// // // //               key={msg.id}
// // // //               className={`max-w-[80%] px-4 py-2 rounded-2xl text-white shadow-md ${
// // // //                 msg.side === "left"
// // // //                   ? "bg-blue-500 self-start rounded-tl-none"
// // // //                   : "bg-green-500 self-end rounded-tr-none"
// // // //               }`}
// // // //               custom={i}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               variants={bubbleVariants}
// // // //             >
// // // //               {msg.text}
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React from "react";

// // // const PhoneMockup = () => {
// // //   return (
// // //     <div className="flex justify-center items-center min-h-screen bg-gray-900">
// // //       <div className="relative w-72 h-[500px] bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-black">
// // //         {/* Message bubbles */}
// // //         <div className="absolute left-[-160px] top-20 animate-pop-left">
// // //           <div className="bg-white text-black rounded-2xl shadow-lg px-4 py-2 w-40">
// // //             رسالة من اليسار 1
// // //           </div>
// // //         </div>

// // //         <div className="absolute right-[-160px] top-36 animate-pop-right">
// // //           <div className="bg-blue-500 text-white rounded-2xl shadow-lg px-4 py-2 w-40">
// // //             Message from right 1
// // //           </div>
// // //         </div>

// // //         <div className="absolute left-[-160px] top-60 animate-pop-left delay-500">
// // //           <div className="bg-white text-black rounded-2xl shadow-lg px-4 py-2 w-40">
// // //             رسالة من اليسار 2
// // //           </div>
// // //         </div>

// // //         <div className="absolute right-[-160px] top-80 animate-pop-right delay-500">
// // //           <div className="bg-blue-500 text-white rounded-2xl shadow-lg px-4 py-2 w-40">
// // //             Message from right 2
// // //           </div>
// // //         </div>
// // //       </div>s
// // //     </div>
// // //   );
// // // };

// // // export default PhoneMockup;
// // import React from "react";

// // export default function PhoneMockup() {
// //   return (
// //     <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center py-10">
// //       {/* العنوان */}
// //       <h2 className="text-2xl md:text-3xl font-bold text-[#0B2A52] mb-8 text-center font-arabic">
// //         لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
// //       </h2>

// //       {/* الموبايل */}
// //       <div className="relative w-72 h-[500px] bg-[#293B70] rounded-[40px] shadow-2xl overflow-hidden">
// //         {/* Logo */}
// //         <div className="absolute bottom-10 w-full text-center text-white font-bold text-xl tracking-wider font-sans">
// //           <span className="text-[#FF4A1C]">I</span>code
// //         </div>

// //         {/* الرسائل السحابية */}
// //         {/* Top Left */}
// //         <div className="absolute -left-44 top-14 animate-cloud-left">
// //           <div className="bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] text-sm text-[#293B70] font-arabic">
// //             <span className="font-bold text-[#FF4A1C] block">جاهزون دائمًا لدعمك</span>
// //             <span>فريق دعم متواجد على مدار الساعة لضمان سير العمل بسلاسة</span>
// //             <div className="absolute top-1/2 right-[-10px] w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md"></div>
// //           </div>
// //         </div>

// //         {/* Bottom Left */}
// //         <div className="absolute -left-44 bottom-16 animate-cloud-left delay-500">
// //           <div className="bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] text-sm text-[#293B70] font-arabic">
// //             <span className="font-bold text-[#FF4A1C] block">أرباحك كاملة بلا عمولات</span>
// //             <span>نحن نؤمن أن دخلك من حقك وحدك، لذلك لا نأخذ أي نسبة من مبيعاتك</span>
// //             <div className="absolute top-1/2 right-[-10px] w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md"></div>
// //           </div>
// //         </div>

// //         {/* Top Right */}
// //         <div className="absolute -right-44 top-20 animate-cloud-right">
// //           <div className="bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] text-sm text-[#293B70] font-arabic text-right">
// //             <span className="font-bold text-[#FF4A1C] block">أبهر عملائك بتصميم مميز</span>
// //             <span>نوفر لك لوحة تصميم مرنة لتكون انعكاسًا لاحترافية أعمالك</span>
// //             <div className="absolute top-1/2 left-[-10px] w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md"></div>
// //           </div>
// //         </div>

// //         {/* Bottom Right */}
// //         <div className="absolute -right-44 bottom-24 animate-cloud-right delay-500">
// //           <div className="bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] text-sm text-[#293B70] font-arabic text-right">
// //             <span className="font-bold text-[#FF4A1C] block">منصة واحدة لكل ما تحتاج</span>
// //             <span>تجمع بين الطلبات، المخزون، التنبيهات، الكوبونات، وعرض النتائج في صفحة متابعة واحدة</span>
// //             <div className="absolute top-1/2 left-[-10px] w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from "react";

// export default function PhoneMockup() {
//   return (
//     <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center py-10 overflow-hidden relative">
//       {/* العنوان */}
//       <h2 className="text-2xl md:text-3xl font-bold text-[#0B2A52] mb-8 text-center font-arabic">
//         لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
//       </h2>

//       {/* حاوية خارجية للموبايل + الرسائل */}
//       <div className="relative w-[400px] max-w-full flex justify-center">
//         {/* الرسائل اليسار */}
//         <div className="absolute -left-36 top-8 animate-pop-left z-20">
//           <MessageBubble side="left" title="جاهزون دائمًا لدعمك" desc="فريق متواجد على مدار الساعة لضمان سير العمل بسلاسة" />
//         </div>

//         <div className="absolute -left-40 bottom-14 animate-pop-left delay-500 z-20">
//           <MessageBubble side="left" title="أرباحك كاملة بلا عمولات" desc="نحن نؤمن أن دخلك من حقك وحدك، لذلك لا نأخذ أي نسبة من مبيعاتك" />
//         </div>

//         {/* الرسائل اليمين */}
//         <div className="absolute -right-40 top-14 animate-pop-right z-20">
//           <MessageBubble side="right" title="أبهر عملائك بتصميم مميز" desc="نقدم لك تصميم مرن يعكس احترافية عملك" />
//         </div>

//         <div className="absolute -right-44 bottom-20 animate-pop-right delay-500 z-20">
//           <MessageBubble side="right" title="منصة واحدة لكل ما تحتاج" desc="تجمع بين الطلبات، التنبيهات، الكوبونات، والنتائج في منصة متابعة موحدة" />
//         </div>

//         {/* الموبايل */}
//         <div className="w-72 h-[500px] bg-[#293B70] rounded-[40px] shadow-2xl border-[6px] border-white z-10 relative overflow-hidden">
//           {/* Logo */}
//           <div className="absolute bottom-10 w-full text-center text-white font-bold text-xl tracking-wider font-sans">
//             <span className="text-[#FF4A1C]">I</span>code
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ✅ مكون الرسالة
// interface Props {
//   title: string;
//   desc: string;
//   side: "left" | "right";
// }

// const MessageBubble = ({ title, desc, side }: Props) => {
//   return (
//     <div
//       className={`bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] text-sm text-[#293B70] font-arabic ${
//         side === "right" ? "text-right" : ""
//       }`}
//     >
//       <span className="font-bold text-[#FF4A1C] block">{title}</span>
//       <span>{desc}</span>
//       <div
//         className={`absolute top-1/2 ${
//           side === "right" ? "left-[-10px]" : "right-[-10px]"
//         } w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md`}
//       ></div>
//     </div>
//   );
// };

// import React from "react";

// export default function PhoneMockup() {
//   return (
//     <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center py-10 overflow-hidden px-4 relative">
//       {/* العنوان */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A52] mb-8 text-center font-arabic leading-snug">
//         لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
//       </h2>

//       {/* الحاوية الكاملة */}
//       <div className="relative w-full max-w-md flex justify-center items-center">
//         {/* Left Messages */}
//         <div className="absolute top-10 -translate-x-[105%] sm:-translate-x-[120%] animate-pop-left z-20">
//           <MessageBubble side="left" title="جاهزون دائمًا لدعمك" desc="فريق دعم متواجد على مدار الساعة لضمان سير العمل بسلاسة" />
//         </div>

//         <div className="absolute bottom-10 -translate-x-[110%] sm:-translate-x-[125%] animate-pop-left delay-500 z-20">
//           <MessageBubble side="left" title="أرباحك كاملة بلا عمولات" desc="دخلك من حقك وحدك، لا نأخذ أي نسبة من مبيعاتك" />
//         </div>

//         {/* Right Messages */}
//         <div className="absolute top-14 translate-x-[105%] sm:translate-x-[120%] animate-pop-right z-20">
//           <MessageBubble side="right" title="أبهر عملائك بتصميم مميز" desc="لوحة تصميم مرنة تعكس احترافية عملك" />
//         </div>

//         <div className="absolute bottom-20 translate-x-[110%] sm:translate-x-[125%] animate-pop-right delay-500 z-20">
//           <MessageBubble side="right" title="منصة واحدة لكل ما تحتاج" desc="طلبات، تنبيهات، كوبونات، متابعة... في مكان واحد" />
//         </div>

//         {/* الهاتف */}
//         <div className="w-[260px] sm:w-[300px] h-[500px] bg-[#293B70] rounded-[40px] shadow-2xl border-[6px] border-white z-10 relative overflow-hidden flex items-end justify-center pb-10">
//           {/* Logo */}
//           <div className="text-white font-bold text-xl tracking-wider font-sans">
//             <span className="text-[#FF4A1C]">I</span>code
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface Props {
//   title: string;
//   desc: string;
//   side: "left" | "right";
// }

// const MessageBubble = ({ title, desc, side }: Props) => {
//   return (
//     <div
//       className={`bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] w-[180px] sm:w-[200px] text-sm text-[#293B70] font-arabic ${
//         side === "right" ? "text-right" : ""
//       }`}
//     >
//       <span className="font-bold text-[#FF4A1C] block mb-1">{title}</span>
//       <span>{desc}</span>
//       <div
//         className={`absolute top-1/2 ${
//           side === "right" ? "left-[-10px]" : "right-[-10px]"
//         } w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md`}
//       ></div>
//     </div>
//   );
// };

// import React from "react";

// export default function PhoneMockup() {
//   return (
//     <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center py-10 overflow-hidden px-4 relative">
//       {/* العنوان */}
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A52] mb-8 text-center font-arabic leading-snug">
//         لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
//       </h2>

//       {/* الحاوية الكاملة */}
//       <div className="relative w-full max-w-md flex justify-center items-center">
//         {/* Left Messages */}
//         <div className="absolute top-10 -translate-x-[clamp(120px,20vw,200px)] animate-pop-left z-20">
//           <MessageBubble side="left" title="جاهزون دائمًا لدعمك" desc="فريق دعم متواجد على مدار الساعة لضمان سير العمل بسلاسة" />
//         </div>

//         <div className="absolute bottom-10 -translate-x-[clamp(120px,20vw,200px)] animate-pop-left delay-500 z-20">
//           <MessageBubble side="left" title="أرباحك كاملة بلا عمولات" desc="دخلك من حقك وحدك، لا نأخذ أي نسبة من مبيعاتك" />
//         </div>

//         {/* Right Messages */}
//         <div className="absolute top-14 translate-x-[clamp(120px,20vw,200px)] animate-pop-right z-20">
//           <MessageBubble side="right" title="أبهر عملائك بتصميم مميز" desc="لوحة تصميم مرنة تعكس احترافية عملك" />
//         </div>

//         <div className="absolute bottom-20 translate-x-[clamp(120px,20vw,200px)] animate-pop-right delay-500 z-20">
//           <MessageBubble side="right" title="منصة واحدة لكل ما تحتاج" desc="طلبات، تنبيهات، كوبونات، متابعة... في مكان واحد" />
//         </div>

//         {/* الهاتف */}
//         <div className="w-[260px] sm:w-[300px] h-[500px] bg-[#293B70] rounded-[40px] shadow-2xl border-[6px] border-white z-10 relative overflow-hidden flex items-end justify-center pb-10">
//           {/* Logo */}
//           <div className="text-white font-bold text-xl tracking-wider font-sans">
//             <span className="text-[#FF4A1C]">I</span>code
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface Props {
//   title: string;
//   desc: string;
//   side: "left" | "right";
// }

// const MessageBubble = ({ title, desc, side }: Props) => {
//   return (
//     <div
//       className={`bg-white shadow-md px-4 py-2 rounded-[25px] relative max-w-[200px] w-[180px] sm:w-[200px] text-sm text-[#293B70] font-arabic ${
//         side === "right" ? "text-right" : ""
//       }`}
//     >
//       <span className="font-bold text-[#FF4A1C] block mb-1">{title}</span>
//       <span>{desc}</span>
//       <div
//         className={`absolute top-1/2 ${
//           side === "right" ? "left-[-10px]" : "right-[-10px]"
//         } w-5 h-5 bg-white rotate-45 -translate-y-1/2 shadow-md`}
//       ></div>
//     </div>
//   );
// };
// "use client";

// import React from "react";
// import { cn } from "..//lib/utils";
// import { AnimatedList } from './magicui/animated-list';
// import Iphone15Pro from "./magicui/iphone-15-pro";

// interface Item {
//     title: string;
//     description: string;
//     icon: string;
//     color: string;
//     time: string;
// }

// let messages = [
//     {
//         title: "دعم مستمر",
//         description: "فريق متاح 24/7",
//         time: "الآن",
//         icon: "🎧",
//         color: "#FF4A1C",
//     },
//     {
//         title: "بلا عمولات",
//         description: "أرباحك كاملة",
//         time: "مباشر",
//         icon: "💰",
//         color: "#00C9A7",
//     },
//     {
//         title: "تصميم مميز",
//         description: "يعكس احترافيتك",
//         time: "فوري",
//         icon: "🎨",
//         color: "#FFB800",
//     },
//     {
//         title: "منصة شاملة",
//         description: "كل ما تحتاجه",
//         time: "متاح",
//         icon: "🚀",
//         color: "#1E86FF",
//     },
// ];

// messages = Array.from({ length: 6 }, () => messages).flat();

// const MessageNotification = ({ title, description, icon, color, time }: Item) => {
//     return (
//         <figure
//             className={cn(
//                 "relative mx-auto min-h-fit w-full max-w-[200px] cursor-pointer overflow-hidden rounded-2xl p-3",
//                 // animation styles
//                 "transition-all duration-200 ease-in-out hover:scale-[103%]",
//                 // light styles
//                 "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
//                 // Arabic text alignment
//                 "text-right font-arabic",
//             )}
//         >
//             <div className="flex flex-row-reverse items-center gap-2">
//                 <div
//                     className="flex size-8 items-center justify-center rounded-xl"
//                     style={{
//                         backgroundColor: color,
//                     }}
//                 >
//                     <span className="text-sm">{icon}</span>
//                 </div>
//                 <div className="flex flex-col overflow-hidden">
//                     <figcaption className="flex flex-row-reverse items-center whitespace-pre text-sm font-bold text-[#0B2A52]">
//                         <span className="text-xs sm:text-sm">{title}</span>
//                         <span className="mx-1">·</span>
//                         <span className="text-xs text-gray-500">{time}</span>
//                     </figcaption>
//                     <p className="text-xs font-normal text-gray-600">
//                         {description}
//                     </p>
//                 </div>
//             </div>
//         </figure>
//     );
// };

// export default function PhoneMockup() {
//     return (
//         <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center py-10 px-4 relative overflow-hidden">
//             {/* العنوان */}
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0B2A52] mb-8 text-center font-arabic leading-snug">
//                 لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
//             </h2>

//             {/* الحاوية الكاملة */}
//             <div className="relative w-full max-w-6xl flex justify-center items-center">
//                 {/* الهاتف في المنتصف مع الرسائل بداخله */}
//                 <div className="relative">
//                     <Iphone15Pro className="size-full" src="https://via.placeholder.com/430x880">
//                         <div className="absolute inset-0 p-4 flex flex-col justify-start gap-2 overflow-y-auto">
//                             <AnimatedList>
//                                 {messages.map((item, idx) => (
//                                     <MessageNotification {...item} key={idx} />
//                                 ))}
//                             </AnimatedList>
//                         </div>
//                     </Iphone15Pro>
//                 </div>
//             </div>
//         </div>
//     );
// }
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function PhoneMockup() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-[#e5e5e5] flex flex-col items-center justify-center py-10 overflow-hidden px-4 relative">
      {/* العنوان */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2A52] mb-12 text-center font-[Cairo] leading-snug"
      >
        لماذا تختار <span className="text-[#FF4A1C]">ICODE</span>؟
      </motion.h2>

      {/* الحاوية الكاملة */}
      <div className="relative w-full max-w-md flex justify-center items-center">
        {/* Left Messages */}
        <AnimatedMessage
          delay={0.5}
          side="left"
          top="top-10"
          offset="-translate-x-[110%] sm:-translate-x-[130%]"
          title="جاهزون دائمًا لدعمك"
          desc="فريق دعم متواجد على مدار الساعة لضمان سير العمل بسلاسة"
        />

        <AnimatedMessage
          delay={1.1}
          side="left"
          top="bottom-10"
          offset="-translate-x-[120%] sm:-translate-x-[135%]"
          title="أرباحك كاملة بلا عمولات"
          desc="نحن نؤمن أن دخلك من حقك وحدك، لذلك لا نأخذ أي نسبة من مبيعاتك"
        />

        {/* Right Messages */}
        <AnimatedMessage
          delay={0.8}
          side="right"
          top="top-14"
          offset="translate-x-[110%] sm:translate-x-[130%]"
          title="أبهر عملائك بتصميم مميز"
          desc="تصميم مرن يليق بمنتجاتك ليكون انعكاسًا لتجربة العمل معك"
        />

        <AnimatedMessage
          delay={1.4}
          side="right"
          top="bottom-20"
          offset="translate-x-[120%] sm:translate-x-[135%]"
          title="منصة واحدة لكل ما تحتاج"
          desc="احدى بين الطلبات، المخزونات، التنبيهات، الكوبونات في منصة متكاملة تحت إدارتك"
        />

        {/* الهاتف */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[260px] sm:w-[300px] h-[500px] bg-[#293B70] rounded-[40px] shadow-2xl border-[6px] border-white z-10 relative overflow-hidden flex items-end justify-center pb-10"
        >
          <div className="text-white font-bold text-xl tracking-wider font-[Cairo]">
            <span className="text-[#FF4A1C]">I</span>code
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface Props {
  title: string;
  desc: string;
  side: "left" | "right";
  delay: number;
  top: string;
  offset: string;
}

const AnimatedMessage = ({ title, desc, side, delay, top, offset }: Props) => {
  return (
    <motion.div
      className={`absolute ${top} ${offset} z-20`}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <div
        className={`bg-white backdrop-blur-sm bg-opacity-80 shadow-xl px-5 py-3 rounded-[30px] relative max-w-[220px] w-[200px] text-sm text-[#293B70] font-[Cairo] ${
          side === "right" ? "text-right" : "text-left"
        }`}
      >
        <span className="font-bold text-[#FF4A1C] block mb-1">{title}</span>
        <span>{desc}</span>
        <div
          className={`absolute top-1/2 ${
            side === "right" ? "left-[-10px]" : "right-[-10px]"
          } w-5 h-5 bg-white bg-opacity-80 rotate-45 -translate-y-1/2 shadow-md`}
        ></div>
      </div>
    </motion.div>
  );
};

// import React from "react";

// export default function PhoneMockup() {
//   return (
//     <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
//         <div className="absolute top-16 left-16 w-24 h-24 border border-gray-300 rounded-full"></div>
//         <div className="absolute top-32 right-20 w-16 h-16 border border-gray-300 rounded-full"></div>
//         <div className="absolute bottom-20 left-32 w-20 h-20 border border-gray-300 rounded-full"></div>
//         <div className="absolute bottom-32 right-16 w-12 h-12 border border-gray-300 rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-[#0B2A52] mb-4 font-arabic" data-aos="fade-up">
//             باقــات <span className="text-[#FF4A1C]">ICODE</span>
//           </h2>
//         </div>

//         {/* Package Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">

//           {[
//             {
//               title: "الباقة الذهبية",
//               colorBar: "from-[#FFD700] to-[#FFA500]",
//               qrData: "GoldenPackage",
//               features: [
//                 "كل مميزات الباقة الفضية",
//                 "طلب من الطاولة",
//                 "برنامج ولاء ونقاط",
//                 "تفعيل الدفع الإلكتروني",
//                 "تسويق إلكتروني",
//               ],
//               delay: "100",
//             },
//             {
//               title: "الباقة الفضية",
//               colorBar: "from-[#C0C0C0] to-[#A8A8A8]",
//               qrData: "SilverPackage",
//               features: [
//                 "مميزات الباقة الأساسية",
//                 "تفعيل طلبات أونلاين",
//                 "تطبيق استقبال الطلبات",
//                 "منو لطفائي إلكتروني",
//                 "دعم فني على مدار الساعة",
//               ],
//               delay: "200",
//             },
//             {
//               title: "الباقة الأساسية",
//               colorBar: "from-[#FF4A1C] to-[#ff6b47]",
//               qrData: "BasicPackage",
//               features: [
//                 "تصميم QR كود",
//                 "موقع إلكتروني",
//                 "صفحة رئيسية",
//                 "منو لطفائي إلكتروني",
//                 "دعم فني مدار الساعة",
//               ],
//               delay: "300",
//             },
//           ].map((pkg, index) => (
//             <div className="group" key={index} data-aos="fade-up" data-aos-delay={pkg.delay}>
//               <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.18)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
//                 {/* QR Section */}
//                 <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex justify-center items-center border-4 border-white rounded-t-2xl">
//                   <div className="relative">
//                     {/* Frame Corners */}
//                     <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-[#0B2A52] rounded-tl-lg"></div>
//                     <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-[#0B2A52] rounded-tr-lg"></div>
//                     <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-[#0B2A52] rounded-bl-lg"></div>
//                     <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-[#0B2A52] rounded-br-lg"></div>

//                     {/* QR Code + Animation */}
//                     <div className="relative w-24 h-24 bg-white rounded-lg p-1 shadow-lg overflow-hidden">
//                       <img
//                         src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pkg.qrData}`}
//                         alt="QR Code"
//                         className="w-full h-full object-contain rounded"
//                       />
//                       <div className="absolute left-0 w-full h-full top-0 overflow-hidden rounded">
//                         <div className="absolute left-0 w-full h-[2px] bg-green-400 animate-scan"></div>
//                       </div>
//                     </div>

//                     {/* Colored Bottom Bar */}
//                     <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.colorBar} rounded-b-lg`}></div>
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <div className="text-center py-4 bg-white">
//                   <h3 className="text-xl font-bold text-[#FF4A1C] font-arabic">{pkg.title}</h3>
//                 </div>

//                 {/* Features */}
//                 <div className="bg-white px-6 pb-6">
//                   <div className="space-y-3">
//                     {pkg.features.map((feature, i) => (
//                       <div key={i} className="flex items-start gap-3 text-sm text-[#0B2A52] font-arabic">
//                         <div className="w-2 h-2 bg-[#FF4A1C] rounded-full mt-2 flex-shrink-0"></div>
//                         <span>{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
