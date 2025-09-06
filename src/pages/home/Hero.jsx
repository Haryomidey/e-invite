import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = ({ names, date, coverImg }) => {
    const texts = [
        "Join us for a magical celebration of love!",
        "Two hearts, one journey, endless memories.",
        "Your presence will make our day even more special."
    ];

    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const cursor = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(cursor);
    }, []);

    useEffect(() => {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + texts[textIndex][charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, 60);
                return () => clearTimeout(timeout);
            } else {
                const pause = setTimeout(() => {
                    setDisplayText("");
                    setCharIndex(0);
                    setTextIndex((prev) => prev + 1);
                }, 2000);
                return () => clearTimeout(pause);
            }
        } else {
            const restart = setTimeout(() => {
                setTextIndex(0);
                setDisplayText("");
                setCharIndex(0);
            }, 3000);
            return () => clearTimeout(restart);
        }
    }, [charIndex, textIndex]);

    return (
        <section
            id="home"
            className="relative py-28 md:py-36 text-center md:text-left overflow-hidden"
            style={{
                backgroundImage: `url(${coverImg || "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-rose/50 via-black/40 to-ivory/20"></div>

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 z-10">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase tracking-[5px] text-sm md:text-base text-gold font-montserrat mb-4 drop-shadow-md"
                    >
                        You're Invited To
                    </motion.p>

                    <motion.h1
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-playfair text-5xl md:text-7xl font-bold text-white drop-shadow-xl"
                    >
                        {names}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-lg md:text-xl text-white font-light tracking-wide drop-shadow-md min-h-[60px]"
                    >
                        {displayText}
                        <span className={`${showCursor ? "inline-block" : "hidden"} animate-pulse`}>|</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-3 text-base md:text-lg text-gold italic font-semibold drop-shadow-md"
                    >
                        {date.toLocaleDateString(undefined, {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8"
                    >
                        <a
                            href="#rsvp"
                            className="px-10 py-3 rounded-full text-base font-semibold shadow-lg border border-gold bg-gold text-white hover:bg-emerald hover:border-emerald transition-all duration-300 ease-in-out"
                        >
                            RSVP Now
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/70 z-10 group"
                >
                    <img
                        src={coverImg}
                        alt="couple"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
