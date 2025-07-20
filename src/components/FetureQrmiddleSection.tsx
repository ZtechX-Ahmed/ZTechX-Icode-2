// src/pages/SecondPage.jsx
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.img
        src="./seconde page.png"
        alt="QR Features"
        className="w-full max-w-6xl px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
};

export default SecondPage;
