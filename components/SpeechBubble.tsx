import { motion } from "framer-motion";

interface SpeechBubbleProps {
  title: string;
  description: string;
  position: string;
  direction?: "left" | "right";
  delay?: number;
}

export const SpeechBubble = ({ title, description, position, direction = "left", delay = 0 }: SpeechBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${position}`}
    >
      <div className={`relative bg-white rounded-xl p-4 shadow-lg max-w-xs ${direction === "right" ? "text-right" : "text-left"}`}>
        <h4 className="font-bold text-gray-800 text-sm mb-2">{title}</h4>
        <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
        <div className={`absolute top-6 ${direction === "left" ? "-right-2" : "-left-2"} w-4 h-4 bg-white transform rotate-45 shadow-lg`}></div>
      </div>
    </motion.div>
  );
};