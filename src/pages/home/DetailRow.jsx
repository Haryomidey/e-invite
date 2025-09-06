import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaMapSigns, FaTshirt } from "react-icons/fa";

const icons = {
    Venue: <FaMapMarkerAlt className="text-rose w-5 h-5" />,
    Time: <FaClock className="text-emerald w-5 h-5" />,
    Address: <FaMapSigns className="text-gold w-5 h-5" />,
    "Dress Code": <FaTshirt className="text-gray-700 w-5 h-5" />,
};

const DetailRow = ({ label, value }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start gap-4 bg-white rounded-xl shadow-md p-4 border border-gray-100 hover:border-rose/40 transition-all duration-300"
    >
        <div className="flex-shrink-0">{icons[label]}</div>

        <div>
            <div className="text-sm uppercase text-gray-500 font-medium tracking-wide">
                {label}
            </div>
            <div className="text-gray-800 font-semibold text-base mt-1">
                {value}
            </div>
        </div>
    </motion.div>
);

export default DetailRow;
