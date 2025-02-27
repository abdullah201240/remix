import { useState } from "react";
import { motion } from "framer-motion";

export default function Explore() {
    // Categories and product data
    const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart"];

    // Define a list of all products with their corresponding categories
    const allProducts = [
        { id: 1, name: "Chocolate Cake", category: "Cake", image: "/images/ex1.png" },
        { id: 2, name: "Vanilla Muffins", category: "Muffins", image: "/images/ex2.png" },
        { id: 3, name: "Croissant", category: "Croissant", image: "/images/ex5.png" },
        { id: 4, name: "Whole Grain Bread", category: "Bread", image: "/images/ex6.png" },
        { id: 5, name: "Strawberry Tart", category: "Tart", image: "/images/ex7.png" },
        { id: 6, name: "Lemon Cake", category: "Cake", image: "/images/ex8.png" },
    ];

    // State to store the selected category, defaults to 'All'
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter products based on the selected category
    const filteredProducts =
        selectedCategory === "All"
            ? allProducts
            : allProducts.filter((product) => product.category === selectedCategory);

    return (

        <div>


            <div className="mx-auto max-w-7xl px-4 mb-16">
                <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4 text-center mt-16 mb-12">
                    Explore More
                </h1>

                <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            type="button"
                            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === category ? "bg-gray-200" : ""
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Scroll reveal and image hover animation */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            className="relative"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Image with hover animation */}
                            <motion.img
                                className="h-auto max-w-full rounded-lg"
                                src={product.image}
                                alt={product.name}
                                initial={{ scale: 1 }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: 5,
                                    borderRadius: "50%",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

               
            </div>
            <div className="mt-16 mb-16">
                    <img src="images/banner1.png" alt="Banner" className="w-full sm:w-full md:w-auto object-fit" />
                </div>
        </div>
    );
}
