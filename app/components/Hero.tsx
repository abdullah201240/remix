import React from "react";
import { motion } from "framer-motion";

const HeroSection = React.memo(function HeroSection() {
    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/heroBg.png')" }} // Replace with your hero image path
        >
            {/* Background Image Animation */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/heroBg.png')" }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>

            {/* Shadow Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>

            {/* Content aligned with Navbar */}
            <div className="relative z-20 flex flex-col justify-center h-full text-left mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                <div className="max-w-5xl w-full space-y-4 relative">
                    {/* Spinning Image Around Text */}
                    <motion.img
                        src="/images/spinner.png"
                        alt="Spinner"
                        className="absolute"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        style={{
                            top: "clamp(-190px, -15vw, -150px)",  // Adjusts dynamically based on screen size
                            left: "clamp(-250px, -20vw, -190px)",
                            width: "clamp(300px, 90vw, 750px)",  // Ensures responsiveness
                            height: "clamp(300px, 90vw, 750px)",
                            zIndex: 10,  // Keeps text on top
                        }}
                    />




                    {/* Text Content */}
                    <motion.p
                        className="text-[#E9BD8C] text-lg md:text-xl font-semibold relative z-10"
                        initial={{ opacity: 0, y: 50, rotate: 180 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 120 }}
                    >
                        Delicious Cafe
                    </motion.p>

                    <motion.h1
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4 relative z-10"
                        initial={{ opacity: 0, y: 50, rotate: 180 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 1, type: "spring", stiffness: 120 }}
                    >
                        Sweet Treats,
                    </motion.h1>

                    <motion.h1
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4 relative z-10"
                        initial={{ opacity: 0, y: 50, rotate: 180 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 120 }}
                    >
                        Perfect Eats
                    </motion.h1>

                    <motion.div
                        className="mt-8 relative z-10"
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

            {/* Drop Image Animation */}
            <motion.img
                src="/images/drop.png"
                alt="Drop"
                className="absolute right-1 top-0 z-20"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: "10%" }}
                transition={{
                    delay: 0.3,
                    duration: 1.8,
                    ease: "easeInOut",
                }}
                style={{
                    maxWidth: "50%", // Adjust the max width to make it large but responsive
                    height: "auto", // Maintain aspect ratio
                }}
            />



        </div>
    );
});

export default HeroSection;
