import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-background text-foreground px-6 py-10">
            
            <FaExclamationTriangle className="text-6xl text-primary mb-6" />
            
            <h1 className="text-5xl font-bold mb-4">404</h1>
            
            <p className="text-lg text-muted-foreground mb-6 text-center">
                Oops! The page you are looking for does not exist.
            </p>
            
            <Link 
                to="/" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-muted transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}

export default NotFound;