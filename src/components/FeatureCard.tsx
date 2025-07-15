import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: typeof LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 text-right">
          <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};