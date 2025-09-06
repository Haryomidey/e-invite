import { motion } from "framer-motion";
import DetailRow from "./DetailRow";
import { useState } from "react";

const EventDetails = ({ venue, time, address, dressCode }) => {
    const [mapLoaded, setMapLoaded] = useState(false);

    return (
        <section className="max-w-6xl mx-auto my-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl px-5 md:px-10 py-10 relative border border-rose/20"
            >
                <h2 className="text-4xl font-playfair text-center text-rose font-semibold mb-10 drop-shadow-sm">
                    Event Details 💍
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <DetailRow label="Venue" value={venue} />
                    <DetailRow label="Time" value={time} />
                    <DetailRow label="Address" value={address} />
                    <DetailRow label="Dress Code" value={dressCode} />
                </div>

                <div className="mt-10 relative">
                    <h3 className="text-xl font-semibold font-playfair text-gray-700 mb-4">
                        Find Us on the Map 🗺️
                    </h3>

                    {!mapLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-ivory/80 backdrop-blur-md rounded-xl z-10">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                                className="w-12 h-12 border-4 border-rose border-t-transparent rounded-full animate-spin"
                            ></motion.div>
                        </div>
                    )}

                    <iframe
                        title="Wedding Venue Map"
                        className="w-full h-80 md:h-96 rounded-xl shadow-lg border border-rose/20"
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                            address
                        )}&output=embed`}
                        allowFullScreen
                        loading="lazy"
                        onLoad={() => setMapLoaded(true)}
                    ></iframe>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            address
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-8 py-3 rounded-full text-base font-semibold shadow-lg border border-gold bg-gold text-white hover:bg-rose hover:border-rose transition-all duration-300"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default EventDetails;