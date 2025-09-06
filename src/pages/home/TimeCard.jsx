import { motion } from "framer-motion";

const TimeCard = ({ label, value }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{
            scale: 1.08,
            boxShadow: "0 10px 30px rgba(230, 57, 70, 0.3)",
        }}
        className="relative p-6 rounded-2xl shadow-lg bg-white/80 backdrop-blur-lg border border-rose/20"
    >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-rose/10 via-gold/5 to-emerald/10 opacity-60 blur-xl -z-10"></div>

        <div className="text-4xl md:text-5xl font-bold font-playfair text-rose drop-shadow-md">
            {value.toString().padStart(2, "0")}
        </div>

        <div className="text-xs md:text-sm uppercase tracking-wider mt-3 text-gray-700 font-semibold">
            {label}
        </div>
    </motion.div>
);

export default TimeCard;