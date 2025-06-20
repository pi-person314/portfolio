export default function ProjectCard({title, desc, image, darkMode}) {
    return (
        <div className={`flex flex-col space-y-5 justify-evenly shadow-xl rounded-xl p-10 m-10 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
            <img className="tiny:h-2/3 h-1/2 justify-self-center object-contain" src={image} alt={title}/>
            <h1 className="text-xl lg:text-4xl text-center font-serif"><b>{title}</b></h1>
            <ul className="text-sm lg:text-lg list-disc list-inside">
                {desc.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}