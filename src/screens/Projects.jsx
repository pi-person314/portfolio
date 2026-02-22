import lingly from "../assets/images/projects/lingly.png"
import graph from "../assets/images/projects/graph.png"
import drill from "../assets/images/projects/drill.png"
import calico from "../assets/images/projects/calico.png"
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({darkMode}) {
    return (
        <div className="font-montserrat overflow-y-auto overflow-x-hidden h-full">
            <div className="tiny:flex tiny:flex-col grid grid-cols-2 lg:auto-rows-[28rem] gap-10 p-12 max-w-[100rem] mx-auto">
                <ProjectCard 
                    title={<a href="https://drill-share.vercel.app" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Drill Share
                    </a>}
                    tech="Next, Typescript, Tailwind, Express, MongoDB"
                    desc={[
                        "Full-stack website with the goal of providing sports players a platform to share and discover new ways to train",
                        "User profile and drill data stored in MongoDB, extracted and updated with an Express REST API",
                        "Levenshtein distance searching, filters, and sorting functionality for ease of access to drills"
                    ]}
                    image={drill}
                    darkMode={darkMode}
                />

                <ProjectCard 
                    title={<a href="https://calico.cs.berkeley.edu/certificates" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        CALICO Data Pipeline
                    </a>}
                    tech="Python, Pandas, DOMjudge API, Google Spreadsheets, JavaScript"
                    desc={[
                        "Updated and maintained a complex system that extracts and analyzes contest registration data",
                        "Implemented a new feature that automatically creates and updates over 2,000 DOMjudge accounts",
                        "Updated certificates with contest filtering and country ranks"
                    ]}
                    image={calico}
                    darkMode={darkMode}
                />
                
                <ProjectCard 
                    title={<a href="https://arxiv.org/abs/2505.17234" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Country-Topic Grapher
                    </a>}
                    tech="Python, NetworkX, Pandas, NLTK"
                    desc={[
                        "Extracted country and topic data from over 2,000 Congressional Research Service reports to investigate international relations",
                        "Represented countries as nodes and shared topics between countries as weighted edges using NetworkX",
                        "Utilized the Louvain method to cluster countries into 10 groups (shown by colors)"
                    ]}
                    image={graph}
                    darkMode={darkMode}
                />

                <ProjectCard 
                    title="Lingly"
                    tech="React, Tailwind, Firebase, Google Cloud, ElevenLabs"
                    desc={[
                        "Multilingual chat app with automatic translation of incoming messages into the user's native language",
                        "Friend requests and chat rooms managed in Firebase",
                        "Incorporated ElevenLabs voice cloning to transcribe and translate voice messages"
                    ]}
                    image={lingly}
                    darkMode={darkMode}
                />
            </div>
        </div>
        
    );
};