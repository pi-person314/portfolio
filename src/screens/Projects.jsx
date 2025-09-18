import lingly from "../assets/images/lingly.png"
import graph from "../assets/images/graph.png"
import drill from "../assets/images/drill.png"
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({darkMode}) {
    return (
        <div className="tiny:flex tiny:flex-col grid grid-cols-2 lg:auto-rows-[28rem] gap-10 p-8 overflow-y-auto h-full font-montserrat">
            <ProjectCard 
                title={<a href="https://drill-share.vercel.app" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                    Drill Share
                </a>}
                tech="Next, Typescript, Tailwind, Express, MongoDB"
                desc={[
                    "Full-stack website with the goal of providing sports players a platform to share and discover new ways to train",
                    "User profile and drill data stored in MongoDB, extracted and updated with an Express REST API",
                    "Levenshtein distance searching, filters, and sorting functionality for ease of access to drills",
                ]}
                image={drill}
                darkMode={darkMode}
            />
            
            <ProjectCard 
                title="Country-Topic Grapher"
                tech="Python, NetworkX, Pandas, NLTK"
                desc={[
                    "Extracts country and topic data from over 2,000 Congressional Research Service reports to investigate international relations",
                    "Represents countries as nodes and shared topics between countries as weighted edges using NetworkX",
                    "Uses the Louvain method to cluster countries into 10 groups (shown by colors)"
                ]}
                image={graph}
                darkMode={darkMode}
            />

            <ProjectCard 
                title="Lingly"
                tech="React, Tailwind, Firebase, Google Cloud"
                desc={[
                    "Multilingual chat app with automatic translation of incoming messages into the user's native language",
                    "Friends and chat rooms managed in Firebase",
                    "Aesthetic React + Tailwind UI with light/dark mode and animations"
                ]}
                image={lingly}
                darkMode={darkMode}
            />

            <div className={`flex justify-center items-center shadow-xl rounded-xl p-10 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
                <p className={`text-center text-2xl animate-pulse ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Coming Soon...</p>
            </div>
        </div>
    );
};