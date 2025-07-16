import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import React from "react";

interface CircularFeatureProps {
  icon: React.ElementType;
  title: string;
  position: string;
  delay?: number;
}

export const CircularFeature = ({ icon: Icon, title, position, delay = 0 }: CircularFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${position}`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative"
      >
        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
          <Icon className="w-8 h-8 text-orange-500" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap"
        >
          {title}
        </motion.div>
        <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-orange-300 animate-spin-slow"></div>
      </motion.div>
    </motion.div>
  );
};