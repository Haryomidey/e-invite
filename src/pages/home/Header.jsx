import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Story", href: "#story" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkColor = isScrolled ? "text-gray-700 hover:text-rose" : "text-white hover:text-rose";
    const logoTextColor = isScrolled ? "text-rose" : "text-white";
    const logoSmall = isScrolled ? "text-rose" : "text-rose";

    return (
        <motion.header
            className={`fixed left-0 w-full top-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-lg"
                    : "bg-transparent backdrop-blur-sm"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 relative">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 cursor-pointer"
                >
                    <div className={`w-14 h-14 flex items-center justify-center rounded-full border-2 border-rose bg-white shadow-lg hover:scale-105 transition-transform duration-300`}>
                        <span className={`font-playfair font-bold text-sm ${logoSmall}`}>
                            B & T
                        </span>
                    </div>
                    <span className={`hidden sm:block font-playfair text-xl font-semibold tracking-wide ${logoTextColor}`}>
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
                                className={`relative text-base font-medium transition duration-300 group ${linkColor}`}
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-rose group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                <motion.a
                    href="#gallery"
                    whileHover={{}}
                    className={`absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-300 ${isScrolled ? "text-rose hover:bg-rose hover:text-white border-rose" : "text-white border-white hover:bg-rose hover:text-white"}`}
                >
                    #BolaTilehin2025
                </motion.a>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isScrolled ? "text-gray-700 hover:text-rose" : "text-white hover:text-rose"} transition`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-rose"
                    >
                        <ul className="flex flex-col items-center gap-6 py-6">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-700 hover:text-rose transition duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}

                            <motion.a
                                href="#gallery"
                                onClick={() => setIsOpen(false)}
                                whileHover={{}}
                                className="px-5 py-2 rounded-full border border-rose text-sm font-medium text-rose hover:bg-rose hover:text-white transition-all duration-300"
                            >
                                #BolaTilehin2025
                            </motion.a>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;