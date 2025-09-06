import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const fallbackImage = "https://via.placeholder.com/600x800?text=Wedding+Moment";

const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1604014237827-0e85f93a0c2e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600181954231-12b56c3d05d9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1530023367847-a683933f4174?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
];

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex !== null) {
                if (e.key === "ArrowLeft") {
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                } else if (e.key === "ArrowRight") {
                    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                } else if (e.key === "Escape") {
                    setSelectedIndex(null);
                }
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    return (
        <section className="relative py-20 bg-gradient-to-b from-pink-50 via-rose-50/30 to-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-playfair text-rose font-bold mb-12"
                >
                    Our Cinematic Moments 🎞️
                </motion.h2>

                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04 }}
                            onClick={() => setSelectedIndex(i)}
                            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
                        >
                            {!loadedImages[i] && (
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl" />
                            )}

                            <img
                                src={src}
                                alt={`Gallery ${i}`}
                                onLoad={() => setLoadedImages((prev) => [...prev, i])}
                                onError={(e) => (e.target.src = fallbackImage)}
                                className={`w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl ${
                                    !loadedImages[i] ? "opacity-0" : "opacity-100"
                                }`}
                            />

                            <motion.div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                <span className="text-white text-lg font-semibold">View ❤️</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center"
                    >
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-6 right-6 bg-white/90 text-gray-700 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <X size={28} />
                        </button>

                        <button
                            onClick={() =>
                                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
                            }
                            className="absolute left-6 bg-white/70 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={() =>
                                setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
                            }
                            className="absolute right-6 bg-white/70 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <ChevronRight size={28} />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            src={images[selectedIndex] || fallbackImage}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="max-h-[85vh] max-w-5xl rounded-2xl shadow-2xl object-contain"
                            onError={(e) => (e.target.src = fallbackImage)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
