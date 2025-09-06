import { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const RSVP = () => {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("Will attend 🎉");
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Please enter your name before submitting! 💌");
            return;
        }

        setSubmitted(true);

        if (response === "Will attend 🎉") {
            setShowConfetti(true);

            // Stop confetti after 5 seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
        } else {
            setShowConfetti(false);
        }

        setTimeout(() => {
            alert(`Thank you ${name}! Your response has been recorded 💕`);
        }, 500);
    };

    return (
        <section id="rsvp" className="relative bg-gradient-to-b from-pink-50 via-rose-50/30 to-white py-20">
            {showConfetti && <Confetti width={width} height={height} />}

            <div className="max-w-3xl mx-auto px-6 text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-playfair text-rose font-bold mb-6"
                >
                    Join Us For Our Special Day 💍
                </motion.h2>

                <p className="text-gray-600 mb-8 text-lg">
                    We'd love to have you celebrate this beautiful journey with us!  
                    Please RSVP below so we can prepare your special spot. ✨
                </p>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-2xl border border-pink-100 space-y-5"
                >
                    <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-pink-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                    />

                    <motion.select
                        whileFocus={{ scale: 1.02 }}
                        value={response}
                        onChange={(e) => setResponse(e.target.value)}
                        className="w-full border border-pink-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                    >
                        <option>Will attend 🎉</option>
                        <option>Can't make it 💔</option>
                    </motion.select>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300"
                    >
                        {response === "Will attend 🎉" ? "Yes! I'll Be There 🎉" : "Send My RSVP 💌"}
                    </motion.button>
                </motion.form>

                {submitted && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 text-lg text-emerald-600 font-medium"
                    >
                        🎊 Thank you, {name}! We can't wait to see you!
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default RSVP;