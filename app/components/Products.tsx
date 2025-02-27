import { motion } from 'framer-motion';

export default function Products() {
    return (
        <div>


            <div className='mx-auto max-w-7xl px-4 mb-16'>
                <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4 text-center mt-16 mb-12">
                    Top Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-52 mx-auto w-full max-w-md h-[500px] transition-all duration-300 shadow-xl cursor-pointer"
                    >
                        {/* Default Image */}
                        <motion.img
                            src="images/ex3.png"
                            alt="Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:hidden"
                        />
                        {/* Hover Image */}
                        <motion.img
                            src="images/ex4.png"
                            alt="Hovered Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 scale-110 hidden group-hover:block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>

                        {/* Product Info */}
                        <div className="z-10">
                            {/* Price */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl font-semibold text-white"
                            >
                                $40
                            </motion.p>

                            {/* Price and Button in the Same Row */}
                            <div className="flex items-center justify-between mt-3">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl font-semibold text-white"
                                >
                                    Whole Grain <br /> Bread
                                </motion.p>

                                {/* 🚀 Animated Add to Cart Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        boxShadow: "0px 4px 15px rgba(255,165,0,0.7)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-600 focus:outline-none"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-52 mx-auto w-full max-w-md h-[500px] transition-all duration-300 shadow-xl cursor-pointer"
                    >
                        {/* Default Image */}
                        <motion.img
                            src="images/ex3.png"
                            alt="Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:hidden"
                        />
                        {/* Hover Image */}
                        <motion.img
                            src="images/ex.png"
                            alt="Hovered Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 scale-110 hidden group-hover:block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>

                        {/* Product Info */}
                        <div className="z-10">
                            {/* Price */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl font-semibold text-white"
                            >
                                $40
                            </motion.p>

                            {/* Price and Button in the Same Row */}
                            <div className="flex items-center justify-between mt-3">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl font-semibold text-white"
                                >
                                    Whole Grain <br /> Bread
                                </motion.p>

                                {/* 🚀 Animated Add to Cart Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        boxShadow: "0px 4px 15px rgba(255,165,0,0.7)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-600 focus:outline-none"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 pt-52 mx-auto w-full max-w-md h-[500px] transition-all duration-300 shadow-xl cursor-pointer"
                    >
                        {/* Default Image */}
                        <motion.img
                            src="images/ex3.png"
                            alt="Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:hidden"
                        />
                        {/* Hover Image */}
                        <motion.img
                            src="images/ex4.png"
                            alt="Hovered Product Image"
                            className="absolute inset-0 h-full w-full object-cover transition-all duration-500 scale-110 hidden group-hover:block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50"></div>

                        {/* Product Info */}
                        <div className="z-10">
                            {/* Price */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-xl font-semibold text-white"
                            >
                                $40
                            </motion.p>

                            {/* Price and Button in the Same Row */}
                            <div className="flex items-center justify-between mt-3">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="text-xl font-semibold text-white"
                                >
                                    Whole Grain <br /> Bread
                                </motion.p>

                                {/* 🚀 Animated Add to Cart Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -5,
                                        boxShadow: "0px 4px 15px rgba(255,165,0,0.7)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg shadow-md transition-all duration-300 hover:bg-orange-600 focus:outline-none"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                   

                 



                </div>

            </div>
            <div className="mt-16 mb-16">
                <img src="images/banner.png" alt="Banner" className="w-full sm:w-full md:w-auto object-fit" />
            </div>

        </div>
    );
}