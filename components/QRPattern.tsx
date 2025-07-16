import { motion } from "framer-motion";

export const QRPattern = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="absolute top-20 right-10 w-64 h-64 opacity-20"
    >
      <div className="grid grid-cols-8 gap-1 w-full h-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.random() > 0.5 ? 1 : 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.02,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
            className="bg-blue-600 rounded-sm"
          />
        ))}
      </div>
    </motion.div>
  );
};