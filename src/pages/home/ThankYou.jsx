import { motion } from "framer-motion";
import { images } from "../../assets/images";

const ThankYou = () => {
    return (
        <section className="relative py-24 text-center text-white overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={images.couple18}
                    alt="wedding celebration"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-rose drop-shadow-lg"
                >
                    Thank You for Your RSVP 💌
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto leading-relaxed mb-8"
                >
                    We're beyond thrilled to have you with us on this magical day.  
                    Your love, blessings, and presence mean the world to us.  
                    Let's create memories we'll cherish forever! ✨
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8 border border-white/10"
                >
                    <p className="text-lg text-gray-200 mb-3">
                        📅 <span className="text-pink-300 font-semibold">Date:</span> Saturday, 12th October 2025
                    </p>
                    <p className="text-lg text-gray-200 mb-3">
                        📍 <span className="text-pink-300 font-semibold">Venue:</span> The Grand Blossom Hall, Lagos
                    </p>
                    <p className="text-lg text-gray-200">
                        🎉 <span className="text-pink-300 font-semibold">Dress Code:</span> Elegant Pastel Glam ✨
                    </p>
                </motion.div>

                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="inline-block mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose text-white font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                    Back to Top
                </motion.a>
            </div>
        </section>
    );
};

export default ThankYou;
