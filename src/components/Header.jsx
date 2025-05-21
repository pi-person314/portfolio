import { Link } from "react-router-dom";
import pi from "../assets/images/pi.png";

export default function Header() {
    return (
        <header className="bg-green-900 text-white p-2">
            <nav className="flex justify-center items-center mx-auto space-x-10">
                <Link to="/">
                    <img src={pi} className="h-20 w-auto hover:animate-spin" alt="Pi Logo"/>
                </Link>
                <Link className="text-xl font-serif hover:text-blue-300" to="/about">About</Link>
                <Link className="text-xl font-serif hover:text-blue-300" to="/projects">Projects</Link>
                <Link className="text-xl font-serif hover:text-blue-300" to="/contact">Contact</Link>
            </nav>
        </header>
    );
};