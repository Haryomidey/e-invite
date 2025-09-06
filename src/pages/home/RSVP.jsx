import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { CheckCircle2, XCircle } from "lucide-react";
import { images } from "../../assets/images";

const RSVP = () => {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("Will attend 🎉");
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (submitted || error) {
            const timer = setTimeout(() => {
                setSubmitted(false);
                setError("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [submitted, error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("Please enter your full name before submitting 💌");
            setSubmitted(false);
            return;
        }

        setError("");
        setSubmitted(true);
        setName("");
        setResponse("Will attend 🎉");

        if (response === "Will attend 🎉") {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 7000);
        } else {
            setShowConfetti(false);
        }
    };

    return (
        <section
            id="rsvp"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
        >
            <div className="absolute inset-0">
                <img
                    src={images.couple3}
                    alt="wedding bg"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </div>

            {showConfetti && (
                <Confetti recycle={false} numberOfPieces={1000} style={{zIndex: 11111}} />
            )}

            <div className="relative z-10 max-w-2xl w-full px-6 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-6xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-pink-200 drop-shadow-lg"
                >
                    Be Part of Our Forever 💍
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed"
                >
                    Your presence means the world to us.
                    Please let us know if you'll be joining the celebration. ✨
                </motion.p>

                <AnimatePresence>
                    {submitted && !error && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center flex-col gap-3 mt-8 bg-green-500/30 text-rose-100 px-6 rounded-xl shadow-xl font-semibold animate-fadeIn py-5 mb-4"
                        >
                            <CheckCircle2 size={84} className="text-rose-300 animate-pulse" />
                            🎊 Thank you, {name || "Guest"}! We can't wait to celebrate with you!
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="bg-black/50 backdrop-blur-lg px-5 md:px-8 py-8 rounded-2xl shadow-2xl border border-white/10 space-y-6"
                >
                    <div className="text-left">
                        <label className="text-pink-200 font-medium block mb-2">
                            Full Name <span className="text-rose-400">*</span>
                        </label>
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-white/20 rounded-lg p-3 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
                        />
                    </div>

                    <div className="text-left">
                        <label className="text-pink-200 font-medium block mb-2">
                            Will you attend?
                        </label>
                        <motion.select
                            whileFocus={{ scale: 1.02 }}
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            className="w-full border border-white/20 rounded-lg p-3 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-rose-400 transition"
                        >
                            <option className="text-gray-900">Will attend 🎉</option>
                            <option className="text-gray-900">Can't make it 💔</option>
                        </motion.select>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-rose text-lg font-semibold shadow-md hover:shadow-lg transition"
                    >
                        {response === "Will attend 🎉"
                            ? "Yes! I'll Be There 🎉"
                            : "Send My RSVP 💌"}
                    </motion.button>

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500/30 via-pink-500/20 to-red-500/30 text-red-200 px-5 py-3 rounded-xl mt-3 text-sm shadow-lg animate-fadeIn"
                            >
                                <XCircle size={20} className="text-red-300 animate-pulse" />
                                <span>{error}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>
            </div>
        </section>
    );
};

export default RSVP;