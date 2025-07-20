import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Section Header */}
      <div className="flex items-center mb-4 w-full max-w-xs">
        {/* You can add header content here if needed */}
      </div>
      <motion.img
        src="./second page.png"
        alt="QR Features"
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain rounded-lg shadow"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ maxHeight: "60vh" }}
      />
    </div>
  );
};

export default SecondPage;
