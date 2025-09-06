import { useEffect, useState } from "react";
import TimeCard from "./TimeCard";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    function getTimeLeft() {
        const now = new Date();
        const diff = Math.max(0, targetDate - now);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative w-full max-w-3xl mx-auto mt-14 text-center px-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-b from-rose/10 via-ivory/30 to-white/20 blur-2xl -z-10"
            ></motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-playfair text-3xl md:text-4xl text-rose font-semibold drop-shadow-lg"
            >
                The Countdown to Our Special Day ❤️
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-gray-700 text-sm md:text-base max-w-lg mx-auto"
            >
                We can't wait to celebrate with you! Save the date and join us for a
                magical day filled with love, laughter, and unforgettable memories.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-8"
            >
                <TimeCard label="Days" value={timeLeft.days} />
                <TimeCard label="Hours" value={timeLeft.hours} />
                <TimeCard label="Minutes" value={timeLeft.minutes} />
                <TimeCard label="Seconds" value={timeLeft.seconds} />
            </motion.div>
        </section>
    );
};

export default CountdownTimer;
