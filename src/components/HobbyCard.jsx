export default function HobbyCard({title, desc, image, darkMode}) {
    return (
        <div className={`flex portrait:flex-col shadow-xl rounded-xl p-5 w-full medium:h-auto h-min ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
            <div className="portrait:mb-5 mb-0 portrait:mr-0 mr-10 overflow-y-auto">
                <h2 className="md:text-lg"><b>{title}</b></h2>
                <p className="text-xs md:text-base">{desc}</p>
            </div>
            <img className="m-auto portrait:w-1/2 portrait:self-center medium:w-1/5 w-1/3 max-h-40 object-contain" src={image} alt={title}/>
        </div>
    )
}