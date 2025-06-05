import { Link } from "react-router-dom";
import me from "../assets/images/me.jpg"

export default function Home({darkMode}) {
    return (
        <div className={`flex portrait:flex-col justify-evenly items-center h-full overflow-y-auto bg-gradient-to-b ${darkMode ? "from-green-900 via-green-800 to-green-900 text-white" : "from-green-400 via-green-300 to-green-400"}`}>
            <div className="m-10">
                <h1 className="text-4xl md:text-6xl text-center font-serif drop-shadow-2xl pb-5">Welcome, I'm<br/><strong>Jaden</strong></h1>
                <p className="text-sm md:text-lg text-center">I'm a freshman at UC Berkeley majoring in <strong>computer science</strong> and <strong>math</strong>!</p>
                <p className="text-sm md:text-lg text-center">Check out some of my <Link className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/about"><u>interests</u></Link> and <Link className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/projects"><u>projects</u></Link>, and feel free to <Link className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/contact"><u>reach out</u></Link>!</p>
            </div>
            <img className="h-1/2 portrait:h-2/5 m-10 portrait:mt-0 rounded-3xl shadow-lg" src={me} alt="Me"/>
        </div>
    );
};