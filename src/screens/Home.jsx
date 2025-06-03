import { Link } from "react-router-dom";
import me from "../assets/images/me.jpg"
import { useEffect } from "react";

export default function Home({darkMode}) {
    return (
        // dark mode: green700 -> green800 -> green700, white text
        <div className={`flex flex-col lg:flex-row justify-evenly items-center h-full bg-gradient-to-b ${darkMode ? "from-green-900 via-green-800 to-green-900 text-white" : "from-green-400 via-green-300 to-green-400"}`}>
            <div className="m-5 md:m-10">
                <h1 className="text-5xl md:text-7xl text-center font-serif drop-shadow-2xl pb-10">Welcome, I'm<br/><strong>Jaden</strong></h1>
                <p className="text-lg md:text-xl text-center">I'm a freshman at UC Berkeley majoring in <strong>computer science</strong> and <strong>math</strong>!</p>
                <p className="text-lg md:text-xl text-center">Check out some of my <Link className="hover:text-blue-600" to="/about"><u>interests</u></Link> and <Link className="hover:text-blue-600" to="/projects"><u>projects</u></Link>, and feel free to <Link className="hover:text-blue-600" to="/contact"><u>reach out</u></Link>!</p>
            </div>
            <img className="w-2/3 lg:w-1/3 md:m-10 rounded-3xl shadow-lg transition hover:skew-y-3 focus:rotate-180 duration-300 ease-in-out" tabIndex={0} src={me} alt="Me"/>
        </div>
    );
};