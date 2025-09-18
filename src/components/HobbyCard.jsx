export default function HobbyCard({title, desc, image, darkMode}) {
    return (
        <div className={`flex portrait:flex-col shadow-xl rounded-xl p-6 pt-4 w-full h-auto ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
            <div className="portrait:mb-5 mb-0 portrait:mr-0 mr-10 overflow-y-auto">
                <h2 className="md:text-lg"><b>{title}</b></h2>
                <p className="text-xs md:text-base">{desc}</p>
            </div>
            <img className="portrait:w-1/2 portrait:self-center portrait:object-center w-1/5 max-h-40 object-contain object-right" src={image} alt={title}/>
        </div>
    )
}