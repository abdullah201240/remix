import React from "react";

const HeroSection = React.memo(function HeroSection() {
    return (
        <div
            className="relative w-full h-screen overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero.png')" }} // Replace with your image path
        >
            {/* Shadow Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>

            {/* Content aligned with Navbar */}
            <div className="relative z-20 flex flex-col justify-center h-full text-left mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
                <div className="max-w-5xl w-full space-y-4">
                    <p className="text-[#E9BD8C] text-lg md:text-xl font-semibold">Delicious Cafe</p>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4">
                    Sweet Treats,<br/>
                       
                    </h1>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4">
                    
                        Perfect Eats
                    </h1>
                    <div>
                    <button className="mt-8 px-8 py-3 bg-[#E9BD8C] text-black text-lg font-semibold rounded-full hover:bg-[#D4A76A] transition duration-300">
                    Shop Now
                    </button>

                    </div>
                   
                   
                </div>
            </div>
        </div>
    );
});

export default HeroSection;
