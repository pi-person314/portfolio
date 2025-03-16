import me from "../assets/images/me.jpg"

export default function Home() {
    return (
        // TODO: add some kind of cool animation (maybe with digits of pi)
        <div className="flex-1 flex justify-evenly bg-green-200 items-center">
            <div className="flex flex-col justify-center max-w-4xl">
                <h1 className="text-8xl text-center m-10 font-serif drop-shadow-2xl">Welcome, I'm<br/><strong>Jaden</strong></h1>
                <p className="text-xl text-center">Also known as Pi Person, I'm a high school senior interested in <strong>computer science</strong> and <strong>math</strong>!<br/>Check out the rest of my website to learn more...</p>
            </div>
            {/* TODO: replace this goofy ah picture */}
            <img className="h-1/2 rounded-3xl shadow-lg" src={me} alt="Me"/>
        </div>
    );
};