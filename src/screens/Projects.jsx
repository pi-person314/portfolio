import lingly from "../assets/images/projects/lingly.png"
import graph from "../assets/images/projects/graph.png"
import drill from "../assets/images/projects/drill.png"
import calico from "../assets/images/projects/calico.png"
import meridian from "../assets/images/projects/meridian.png"
import mesh from "../assets/images/projects/mesh.png"
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({darkMode}) {
    return (
        <div className="font-montserrat overflow-y-auto overflow-x-hidden h-full">
            <div className="portrait:flex portrait:flex-col grid grid-cols-2 auto-rows-[32rem] lg:auto-rows-[28rem] gap-10 p-12 max-w-[100rem] mx-auto">
                <ProjectCard 
                    title={<a href="https://devpost.com/software/mesh-gynbae" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Mesh
                    </a>}
                    subtitle="GitHub for agents"
                    tech="Socket.io, MCP, Redis, Next, Typescript, Monaco, ElevenLabs, Groq"
                    desc={[
                        "Connects AI agents across different sessions and platforms via shared memory to optimize collaborative development",
                        "Agents share context through an MCP server that connects to a Socket.io coordinator; semantic router running Groq detects and resolves conflicts",
                        "Live dashboard uses Monaco editors to display each agent's real-time edits and reasoning, with ElevenLabs voice alerts signaling conflicts"
                    ]}
                    image={mesh}
                    darkMode={darkMode}
                />

                <ProjectCard 
                    title={<a href="https://devpost.com/software/meridian-geqs1c" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Meridian
                    </a>}
                    subtitle="Get the plans out of the group chat"
                    tech="Claude API, Discord API, Next, Typescript, Prisma, Express, MongoDB"
                    desc={[
                        "Discord bot that listens to your group chat's travel plans and triggers a series of AI agents to build a personalized itinerary",
                        "Negotiator agent considers each user's preferences and proposes compromises, continually monitors for changes and updates itinerary accordingly",
                        "Booking agent searches for flights and hotels and automatically books them while calendar agent creates calendar events with reminders",
                    ]}
                    image={meridian}
                    darkMode={darkMode}
                />
                
                <ProjectCard 
                    title={<a href="https://github.com/calico-team" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        CALICO Data Pipeline
                    </a>}
                    subtitle="Automating contest logistics"
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
                    subtitle="Analyzing international relations with graph theory"
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
                    title={<a href="https://drill-share.vercel.app" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Drill Share
                    </a>}
                    subtitle="Share and discover sports drills"
                    tech="Next, Typescript, Tailwind, Express, MongoDB"
                    desc={[
                        "Full-stack website that aims to provide sports players a platform to share and discover new ways to train",
                        "Stored user profile and drill data in MongoDB, extracted and updated with an Express REST API",
                        "Implemented Levenshtein distance searching, filters, and sorting functionality for ease of access to drills"
                    ]}
                    image={drill}
                    darkMode={darkMode}
                />

                <ProjectCard 
                    title={<a href="https://devpost.com/software/lingly" target="_blank" className={`underline duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                        Lingly
                    </a>}
                    subtitle="Multilingual voice messaging app"
                    tech="React, Tailwind, Firebase, Google Cloud, ElevenLabs"
                    desc={[
                        "Automatically translated messages into over 20 distinct languages using Google Cloud Translation APIs",
                        "Integrated AI-powered voice transcription and translation with ElevenLabs for seamless multilingual voice messaging",
                        "Designed and managed scalable user authentication, friend requests, chat rooms, and messaging infrastructure in Firebase"
                    ]}
                    image={lingly}
                    darkMode={darkMode}
                />
            </div>
        </div>
        
    );
};