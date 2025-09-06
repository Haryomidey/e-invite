import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images as Images } from "../../assets/images";

const fallbackImage = "https://via.placeholder.com/600x800?text=Wedding+Moment";

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    const [direction, setDirection] = useState(0);

    const galleryImages = useMemo(() => {
        return Object.keys(Images)
            .filter((key) => key.startsWith("couple"))
            .map((key) => Images[key]);
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex !== null) {
                if (e.key === "ArrowLeft") {
                    setDirection(-1);
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                } else if (e.key === "ArrowRight") {
                    setDirection(1);
                    setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                } else if (e.key === "Escape") {
                    setSelectedIndex(null);
                }
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex, galleryImages]);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 })
    };

    const handleDragEnd = (event, info) => {
        if (info.offset.x < -100) {
            setDirection(1);
            setSelectedIndex((prev) =>
                prev < galleryImages.length - 1 ? prev + 1 : 0
            );
        } else if (info.offset.x > 100) {
            setDirection(-1);
            setSelectedIndex((prev) =>
                prev > 0 ? prev - 1 : galleryImages.length - 1
            );
        }
    };

    return (
        <section id="gallery" className="relative py-20 bg-gradient-to-b from-pink-50 via-rose-50/30 to-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-playfair text-rose font-bold mb-12"
                >
                    Our Moments 🎞️
                </motion.h2>

                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {galleryImages.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04 }}
                            onClick={() => {
                                setDirection(1);
                                setSelectedIndex(i);
                            }}
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

            <AnimatePresence mode="wait" initial={false} custom={direction}>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center"
                    >
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-6 right-6 bg-white/90 text-gray-700 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <X size={28} />
                        </button>

                        <button
                            onClick={() => {
                                setDirection(-1);
                                setSelectedIndex((prev) =>
                                    prev > 0 ? prev - 1 : galleryImages.length - 1
                                );
                            }}
                            className="absolute left-6 bg-white/70 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={() => {
                                setDirection(1);
                                setSelectedIndex((prev) =>
                                    prev < galleryImages.length - 1 ? prev + 1 : 0
                                );
                            }}
                            className="absolute right-6 bg-white/70 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition"
                        >
                            <ChevronRight size={28} />
                        </button>

                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img
                                key={selectedIndex}
                                src={galleryImages[selectedIndex] || fallbackImage}
                                onError={(e) => (e.target.src = fallbackImage)}
                                className="max-h-[85vh] max-w-5xl rounded-2xl shadow-2xl object-contain"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "tween", duration: 0.5 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={handleDragEnd}
                            />
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
