import { motion } from "framer-motion";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

export const PhoneMockup = ({ children, className = "" }: PhoneMockupProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ y: -10, rotateY: 5 }}
      className={`relative ${className}`}
    >
      <div className="relative w-64 h-128 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-[3rem] shadow-2xl transform perspective-1000 rotateY-12">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
          <div className="absolute top-14 left-4 right-4 bottom-4 bg-white rounded-[2.5rem] overflow-hidden">
            {children}
          </div>
        </div>
        <div className="absolute -bottom-4 -left-8 -right-8 h-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 blur-xl rounded-full"></div>
      </div>
    </motion.div>
  );
};