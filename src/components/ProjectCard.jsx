import { useState } from "react";

export default function ProjectCard({title, tech, desc, image, darkMode}) {
    const [ details, setDetails ] = useState(false);

    return (
        <div className={`flex flex-col justify-between items-center shadow-xl rounded-2xl space-y-8 p-10 tiny:px-6 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
            <h1 className="text-center text-2xl lg:text-3xl font-domine"><b>{title}</b></h1>

            {details ? 
                <div className="flex flex-col justify-center space-y-4 h-60">
                    <p className="text-center text-sm lg:text-base italic">{tech}</p>
                    <ul className="text-sm lg:text-base list-disc list-inside">{desc.map(bullet => <li>{bullet}</li>)}</ul>
                </div>
            : 
                <img className="h-60 object-contain rounded-xl" src={image} alt={title}/>
            }

            <p onClick={() => setDetails(!details)} className={`text-sm lg:text-base underline duration-300 cursor-pointer ${darkMode ? "hover:text-zinc-400" : "hover:text-zinc-500"}`}>{details ? "Hide" : "View"} Details</p>
        </div>
    )
}