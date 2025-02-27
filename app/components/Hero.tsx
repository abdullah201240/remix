import React from "react";
import { motion } from "framer-motion";

const HeroSection = React.memo(function HeroSection() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }} // Replace with your hero image path
    >
      {/* Background Image Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      {/* Shadow Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>

      {/* Content aligned with Navbar */}
      <div className="relative z-20 flex flex-col justify-center h-full text-left mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="max-w-5xl w-full space-y-4">
          <motion.p
            className="text-[#E9BD8C] text-lg md:text-xl font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Delicious Cafe
          </motion.p>

          <motion.h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 120 }}
          >
            Sweet Treats,
          </motion.h1>

          <motion.h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 120 }}
          >
            Perfect Eats
          </motion.h1>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
          >
            <div className="pt-8">
            <button className="px-8 py-3 bg-[#E9BD8C] text-black text-lg font-semibold rounded-full hover:bg-[#D4A76A] transition duration-300">
              Shop Now
            </button>

            </div>
           
          </motion.div>
        </div>

       
      </div>
    </div>
  );
});

export default HeroSection;
