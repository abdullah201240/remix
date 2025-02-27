import { motion } from "framer-motion";

export default function Explore() {
    // Define a list of all products with their corresponding categories
    const allProducts = [
        { id: 1, name: "Puff Pastry", price: "$8", category: "Cake", image: "/images/img1.png" },
        { id: 2, name: "Doughnuts", price: "$8", category: "Muffins", image: "/images/img2.png" },
        { id: 3, name: "Brownies", price: "$8", category: "Croissant", image: "/images/img3.png" },
    ];

    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 mb-16">
                <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-sansita pt-4 text-center mt-16 mb-12">
                    Featured Treats
                </h1>

                {/* Scroll reveal and image hover animation */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {allProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            className="relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Image with hover animation */}
                            <motion.img
                                className="h-auto max-w-full rounded-lg"
                                src={product.image}
                                alt={product.name}
                                whileHover={{
                                    scale: 1.05, // Slight scale on hover
                                    transition: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                            />

                            {/* Display product name and price in one row */}
                            <div className="mt-4 flex justify-between items-center">
                                <p className="text-lg font-semibold ml-4">{product.name}</p>
                                <p className="text-sm text-gray-600 mr-4">{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
