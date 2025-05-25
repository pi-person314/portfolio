import me from "../assets/images/me.jpg"

export default function Home() {
    return (
        // dark mode: green700 -> green800 -> green700, white text
        <div className="flex-1 flex flex-col md:flex-row justify-evenly items-center overflow-hidden bg-gradient-to-b from-green-400 via-green-300 to-green-400">
            <div className="flex-col max-w-4xl space-y-10 p-10">
                <h1 className="text-8xl text-center font-serif drop-shadow-2xl">Welcome, I'm<br/><strong>Jaden</strong></h1>
                <p className="text-xl text-center">Also known as Pi Person, I'm an incoming college freshman majoring in<br/><strong>computer science</strong> and <strong>math</strong>!<br/>Check out the rest of my website to learn more...</p>
            </div>
            <img className="h-1/4 md:h-auto md:w-1/3 m-10 rounded-3xl shadow-lg transition hover:skew-y-3 focus:rotate-180 duration-300 ease-in-out" tabIndex={0} src={me} alt="Me"/>
        </div>
    );
};