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
                backgroundImage: `url(${coverImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-rose/50 via-black/40 to-ivory/20"></div>

            <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase tracking-[5px] text-sm md:text-base text-gold font-montserrat mb-4 drop-shadow-md bg-white w-fit mx-auto md:mx-0 px-1"
                    >
                        <p>You're Invited To</p>
                    </motion.div>

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
                        className="mt-3 text-base md:text-lg text-white/85 px-1 italic font-semibold drop-shadow-md"
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
                            className="px-10 py-3 rounded-full text-base font-semibold shadow-lg border border-gold bg-gold text-white hover:bg-rose hover:border-rose transition-all duration-300 ease-in-out"
                        >
                            RSVP Now
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="relative md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white/70 z-10 group"
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
