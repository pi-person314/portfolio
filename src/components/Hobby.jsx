export default function Hobby({title, desc, image, darkMode}) {
    return (
        <div className={`flex portrait:flex-col shadow-xl rounded-xl p-5 w-full medium:h-auto h-1/4 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
            <div className="portrait:mb-5 mb-0 portrait:mr-0 mr-10 overflow-y-auto">
                <h2 className="text-lg md:text-xl"><b>{title}</b></h2>
                <p className="text-sm md:text-base portrait:text-base medium:text-lg">{desc}</p>
            </div>
            <img className="portrait:w-1/2 portrait:self-center medium:w-1/5 w-1/3 object-contain" src={image} alt={title}/>
        </div>
    )
}