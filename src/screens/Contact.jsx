import me from "../assets/images/me.jpg"
import github from "../assets/images/github.svg"
import linkedin from "../assets/images/linkedin.svg"

const images = import.meta.glob('../assets/travel/*.{jpg,png}', { eager: true });

export default function Contact({darkMode}) {
    return (
        <>
            <div className={`flex flex-col md:flex-row h-full justify-evenly items-center overflow-y-auto ${darkMode ? "bg-green-900 text-white" : "bg-green-300"}`}>
                <div className="space-y-5 text-center md:p-10">
                    <h1 className="font-serif font-bold text-4xl md:text-6xl">Contact Me</h1>
                    <p className="text-lg md:text-xl">Phone: <a className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="tel:443-251-6876"><u>(443) 251-6876</u></a></p>
                    <p className="text-lg md:text-xl">Email: <a className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="mailto:jmli314@berkeley.edu"><u>jmli314@berkeley.edu</u></a></p>
                    <div className="flex items-center justify-center gap-10 scale-75">
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://www.linkedin.com/in/jaden-li-23a873314/"><img src={linkedin} alt="LinkedIn"/></a>
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://github.com/pi-person314"><img src={github} alt="GitHub"/></a>
                    </div>
                </div>
                <div className="w-3/4 h-1/2 mb-5 md:mb-0 md:w-1/2 md:h-3/4 md:p-10">
                    <div className="grid grid-cols-3 overflow-y-auto h-full">
                        {Object.entries(images).map(([path, module], index) => (
                            <img key={index} src={module.default} alt={`Image ${index}`} className="shadow-lg aspect-square object-cover"/>
                        ))}
                    </div>
                    <p className="text-md md:text-xl mt-5 text-center">Check out some of my travel photos!</p>
                </div>
            </div>
        </>
    );
};