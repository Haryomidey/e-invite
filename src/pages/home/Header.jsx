import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`sticky top-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-lg"
                    : "bg-transparent backdrop-blur-sm"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 cursor-pointer"
                >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-rose bg-white shadow-lg hover:scale-105 transition-transform duration-300">
                        <span className="font-playfair text-rose font-bold text-lg">
                            B & T
                        </span>
                    </div>
                    <span className="hidden md:block font-playfair text-xl text-gray-800 font-semibold tracking-wide">
                        Bolanle & Timilehin
                    </span>
                </motion.div>

                <ul className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href={link.href}
                                className="relative text-base font-medium text-gray-700 hover:text-rose transition duration-300 group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-rose group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <motion.a
                    href="#gallery"
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: "#E63946",
                        color: "#fff",
                        boxShadow: "0px 4px 15px rgba(230, 57, 70, 0.5)",
                    }}
                    className="hidden md:inline-block px-5 py-2 rounded-full border border-rose text-sm font-medium text-rose hover:bg-rose hover:text-white transition-all duration-300"
                >
                    #BolaTilehin2025
                </motion.a>
            </nav>
        </motion.header>
    );
};

export default Header;
