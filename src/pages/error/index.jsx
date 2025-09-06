import { Link } from "react-router-dom";
import { FaRegMeh } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-10">
            <FaRegMeh className="text-7xl text-pink-400 mb-6 animate-bounce" />
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
                404
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 text-center max-w-md">
                Well… this is awkward! Looks like the page took a day off 🌴.
                Let's get you back to the party!
            </p>
            <Link 
                to="/" 
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
                Take Me Home 🏡
            </Link>
        </div>
    );
}

export default NotFound;