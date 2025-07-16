import { motion } from "framer-motion";

interface PuzzlePieceProps {
  children: React.ReactNode;
  position: "left" | "center" | "right";
  delay?: number;
}

export const PuzzlePiece = ({ children, position, delay = 0 }: PuzzlePieceProps) => {
  const getShapeClass = () => {
    switch (position) {
      case "left":
        return "rounded-l-3xl";
      case "center":
        return "";
      case "right":
        return "rounded-r-3xl";
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="relative"
    >
      <div className={`bg-white p-8 ${getShapeClass()} shadow-xl relative z-10`}>
        {children}
      </div>
      {position === "center" && (
        <>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full"></div>
        </>
      )}
    </motion.div>
  );
};