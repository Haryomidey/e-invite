import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="flex justify-between items-center p-4 bg-primary text-primary-foreground border-b border-border">
            <Link to="/" className="font-bold text-xl">
                🚀 React Smart Starter
            </Link>
            <nav className="flex gap-4">
                <Link 
                    to="/" 
                    className="hover:text-muted-foreground transition-colors"
                >
                    Home
                </Link>
                {user ? (
                    <>
                        <Link 
                            to="/dashboard" 
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Dashboard
                        </Link>
                        <button 
                            onClick={logout} 
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link 
                            to="/login" 
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Login
                        </Link>
                        <Link 
                            to="/signup" 
                            className="hover:text-muted-foreground transition-colors"
                        >
                            Signup
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;