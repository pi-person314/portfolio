import lingly from "../assets/images/lingly.png"
import graph from "../assets/images/graph.png"
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({darkMode}) {
    return (
        <div className={`tiny:flex tiny:flex-col grid grid-cols-2 lg:auto-rows-[50rem] overflow-y-auto h-full font-montserrat ${darkMode ? "bg-zinc-800 text-white" : "bg-zinc-300"}`}>
            <ProjectCard 
                title="Lingly"
                desc={[
                    "Multilingual chat app with automatic translation of incoming messages into the user's native language",
                    "Friend request and chat room features managed in Firebase",
                    "Aesthetic React + Tailwind UI with light/dark mode and animations"
                ]}
                image={lingly}
                darkMode={darkMode}
            />
            
            <ProjectCard 
                title="International Relations Grapher"
                desc={[
                    "Takes in country and topic data extracted from over 2,000 Congressional Research Service reports",
                    "Represents countries as nodes (circles) and shared topics between countries as weighted edges (lines) using NetworkX in Python",
                    "Uses the Louvain method to cluster countries into 10 groups (shown by colors)"
                ]}
                image={graph}
                darkMode={darkMode}
            />
        </div>
    );
};