import { Link } from "react-router-dom";
import pi from "../assets/images/pi.png";
import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";

export default function Header({darkMode, toggleDarkMode}) {
    return (
        <header className="flex justify-between space-x-4 bg-zinc-600 text-white px-4 py-6 font-montserrat">
            {/* home button (pi) */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={pi} className="tiny:h-10 h-20 object-contain hover:animate-spin" title="Home Button"/>
                </Link>
            </div>

            {/* page links */}
            <div className="flex justify-center items-center mx-auto space-x-12 tiny:space-x-6">
                <Link className="tiny:text-base text-2xl duration-300 hover:text-blue-300" to="/about">About</Link>
                <Link className="tiny:text-base text-2xl duration-300 hover:text-blue-300" to="/projects">Projects</Link>
                <Link className="tiny:text-base text-2xl duration-300 hover:text-blue-300" to="/contact">Contact</Link>
            </div>

            {/* theme button */}
            <div className="flex items-center">
                <button onClick={toggleDarkMode}>
                    <img src={darkMode ? sun : moon} className="tiny:h-10 h-20 object-contain duration-300 hover:scale-110" title="Theme Button"/>
                </button>
            </div>
        </header>
    );
};