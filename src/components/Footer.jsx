import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground border-t border-border p-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-lg text-primary">🚀 React Smart Starter</h2>
                    <p className="text-muted-foreground text-sm">
                        Build faster with our React starter template.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link 
                        to="/" 
                        className="hover:text-primary transition-colors text-sm"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/login" 
                        className="hover:text-primary transition-colors text-sm"
                    >
                        Login
                    </Link>
                    <Link 
                        to="/signup" 
                        className="hover:text-primary transition-colors text-sm"
                    >
                        Signup
                    </Link>
                    <Link 
                        to="/dashboard" 
                        className="hover:text-primary transition-colors text-sm"
                    >
                        Dashboard
                    </Link>
                </div>

                <div className="flex gap-4 text-lg text-muted-foreground">
                    <a href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            <div className="text-center text-muted-foreground text-xs mt-4">
                © {new Date().getFullYear()} React Smart Starter. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;