import { Link } from "react-router-dom";
import me from "../assets/images/me.jpg"

export default function Home({darkMode}) {
    return (
        <div className={`flex flex-col justify-center h-full p-8 font-montserrat bg-gradient-to-b ${darkMode ? "from-zinc-800 via-zinc-700 to-zinc-800 text-white" : "from-zinc-400 via-zinc-300 to-zinc-400"}`}>
            <h1 className="text-4xl md:text-6xl text-center font-bold font-serif drop-shadow-2xl mb-6">
                Jaden Li
            </h1>
            <p className="text-sm md:text-lg text-center mb-2">
                I'm a freshman at UC Berkeley majoring in <strong>computer science</strong> and <strong>math</strong>!
            </p>
            <p className="text-sm md:text-lg text-center">
                Check out some of my <Link className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/about"><u>interests</u></Link> and 
                <Link className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/projects"> <u>projects</u></Link>, and feel free to 
                <Link className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/contact"> <u>reach out</u></Link>!
            </p>
        </div>
    );
};