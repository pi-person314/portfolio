import placeholder from "../assets/images/placeholder.jpg"
import lingly from "../assets/images/lingly.png"
import graph from "../assets/images/graph.png"

export default function Projects({darkMode}) {
    return (
        <>
            {/* lingly, apl, own project (tbd), maybe plutus */}
            <div className={`flex flex-col lg:grid lg:grid-cols-2 lg:auto-rows-[50rem] overflow-y-auto h-full ${darkMode ? "bg-green-900 text-white" : "bg-green-300"}`}>
                <div className={`flex flex-col space-y-5 justify-evenly shadow-xl rounded-xl p-10 m-10 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                    <img className="lg:h-1/2 justify-self-center object-contain" src={lingly}/>
                    <h1 className="text-xl md:text-3xl lg:text-5xl text-center"><b>Lingly</b></h1>
                    <ul className="text-md md:text-lg lg:text-xl list-disc list-inside">
                        <li>Multilingual chat app with automatic translation of incoming messages into the user's native language</li>
                        <li>Friend request and chat room features managed in Firebase</li>
                        <li>Aesthetic React + Tailwind UI with light/dark mode and animations</li>
                    </ul>
                </div>
                <div className={`flex flex-col space-y-5 justify-evenly shadow-xl rounded-xl p-10 m-10 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                    <img className="md:h-1/2 justify-self-center object-contain" src={graph}/>
                    <h1 className="text-xl md:text-3xl lg:text-5xl text-center"><b>International Relations Grapher</b></h1>
                    <ul className="text-md md:text-lg lg:text-xl list-disc list-inside">
                        <li>Takes in country and topic data extracted from over 2,000 Congressional Research Service reports</li>
                        <li>Represents countries as nodes (circles) and shared topics between countries as weighted edges (lines)</li>
                        <li>Uses the Louvain method to cluster countries into 10 groups (shown by colors)</li>
                    </ul>
                </div>
                <div className={`flex flex-col space-y-5 justify-evenly shadow-xl rounded-xl p-10 m-10 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                    <img className="md:h-1/2 justify-self-center object-contain" src={placeholder}/>
                    <h1 className="text-xl md:text-3xl lg:text-5xl text-center"><b>Summer Project #1</b></h1>
                    <p className="text-md md:text-lg lg:text-lg">TBD</p>
                </div>
                <div className={`flex flex-col space-y-5 justify-evenly shadow-xl rounded-xl p-10 m-10 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                    <img className="md:h-1/2 justify-self-center object-contain" src={placeholder}/>
                    <h1 className="text-xl md:text-3xl lg:text-5xl text-center"><b>Summer Project #2</b></h1>
                    <p className="text-md md:text-lg lg:text-lg">TBD</p>
                </div>
            </div>
        </>
    );
};