import { Link } from "react-router-dom";
import pi from "../assets/images/pi.png";
import mode from "../assets/images/mode.svg";

export default function Header({toggleDarkMode}) {
    return (
        <header className="flex bg-green-700 text-white px-8 py-5">
            <div className="flex items-center">
                <Link to="/">
                    <img src={pi} className="h-10 md:h-20 object-contain hover:animate-spin" alt="Pi Logo"/>
                </Link>
            </div>
            <div className="flex justify-center items-center mx-auto space-x-10">
                <Link className="text-sm sm:text-md md:text-xl font-serif hover:text-blue-300" to="/about">About</Link>
                <Link className="text-sm sm:text-md md:text-xl font-serif hover:text-blue-300" to="/projects">Projects</Link>
                <Link className="text-sm sm:text-md md:text-xl font-serif hover:text-blue-300" to="/contact">Contact</Link>
            </div>
            <div className="flex items-center">
                <button onClick={toggleDarkMode}><img src={mode} className="h-10 md:h-20 object-contain hover:scale-105" alt="Light/Dark Mode Button"/></button>
            </div>
        </header>
    );
};