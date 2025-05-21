import me from "../assets/images/me.jpg"

export default function Home() {
    return (
        <div className="flex-1 flex justify-evenly items-center bg-gradient-to-b from-green-400 via-green-300 to-green-400">
            <div className="flex-col max-w-4xl">
                <h1 className="text-8xl text-center m-10 font-serif drop-shadow-2xl">Welcome, I'm<br/><strong>Jaden</strong></h1>
                <p className="text-xl text-center">Also known as Pi Person, I'm an incoming college freshman majoring in <strong>computer science</strong> and <strong>math</strong>!<br/>Check out the rest of my website to learn more...</p>
            </div>
            <img className="w-1/3 rounded-3xl shadow-lg" src={me} alt="Me"/>
        </div>
    );
};