import { useState } from "react";

export default function ProjectCard({title, tech, desc, image, darkMode}) {
    const [ flipped, setFlipped ] = useState(false);

    return (
        <div
            className="relative h-full cursor-pointer hover:scale-105 duration-300 tiny:h-80 tiny:flex-shrink-0"
            style={{ perspective: "1000px" }}
            onClick={() => setFlipped(!flipped)}
        >
            <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
            >
                <div
                    className={`absolute w-full h-full flex flex-col items-center rounded-2xl p-10 tiny:px-6 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    }}
                >
                    <h1 className="text-center text-xl lg:text-2xl xl:text-3xl font-domine"><b>{title}</b></h1>
                    <div className="flex items-center flex-1 min-h-0 pt-6">
                        <img className="max-h-full object-contain rounded-xl" src={image} alt={title}/>
                    </div>
                </div>

                <div
                    className={`absolute w-full h-full flex flex-col items-center rounded-2xl p-10 tiny:px-6 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                    }}
                >
                    <h1 className="text-center text-xl lg:text-2xl xl:text-3xl font-domine"><b>{title}</b></h1>
                    <div className="flex flex-col justify-center space-y-4 h-full pt-2">
                        <p className="text-center text-xs lg:text-base italic">{tech}</p>
                        <ul className="text-xs lg:text-base list-disc list-inside">{desc.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}