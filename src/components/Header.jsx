import { Link } from "react-router-dom";
import pi from "../assets/images/pi.png";
import mode from "../assets/images/mode.svg";

export default function Header({toggleDarkMode}) {
    return (
        <header className="flex justify-between space-x-5 bg-zinc-600 text-white p-5 font-montserrat">
            {/* home button (pi) */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={pi} className="tiny:h-10 h-20 object-contain hover:animate-spin" title="Home Button"/>
                </Link>
            </div>

            {/* page links */}
            <div className="flex justify-center items-center mx-auto space-x-10">
                <Link className="tiny:text-sm text-xl hover:text-blue-300" to="/about">About</Link>
                <Link className="tiny:text-sm text-xl hover:text-blue-300" to="/projects">Projects</Link>
                <Link className="tiny:text-sm text-xl hover:text-blue-300" to="/contact">Contact</Link>
            </div>

            {/* theme button */}
            <div className="flex items-center">
                <button onClick={toggleDarkMode}>
                    <img src={mode} className="tiny:h-10 h-20 object-contain hover:scale-105" title="Theme Button"/>
                </button>
            </div>
        </header>
    );
};