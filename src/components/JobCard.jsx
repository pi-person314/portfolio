import cello from "../assets/images/hobbies/cello.png";

export default function JobCard({title, date, bullets, image, darkMode}) {
    return (
        <div className={`flex portrait:flex-col shadow-xl rounded-xl p-6 pt-4 w-full h-auto ${darkMode ? "bg-zinc-900" : "bg-zinc-100"}`}>
            <div className="portrait:mb-5 mb-0 portrait:mr-0 mr-10 overflow-y-auto flex-1">
                <h2 className="md:text-lg"><b>{title}</b></h2>
                <h3 className="md:text-lg mb-2">{date}</h3>
                <ul className="list-disc text-xs md:text-base list-inside">
                    {bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
            </div>
            <img className="portrait:w-1/2 self-center portrait:object-center w-1/5 max-h-40 object-contain object-right" src={image} alt={title}/>
        </div>
    );
}
