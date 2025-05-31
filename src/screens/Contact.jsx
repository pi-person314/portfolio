import me from "../assets/images/me.jpg"
import github from "../assets/images/github.svg"
import linkedin from "../assets/images/linkedin.svg"

const images = import.meta.glob('../assets/travel/*.{jpg,png}', { eager: true });

export default function Contact() {
    return (
        <>
            <div className="flex flex-col lg:flex-row h-full bg-green-300 justify-evenly items-center">
                <div className="space-y-5 text-center p-10">
                    <h1 className="font-serif font-bold text-6xl">Contact Me</h1>
                    <p className="text-xl">Phone: <a className="hover:text-blue-600" href="tel:443-251-6876"><u>(443) 251-6876</u></a></p>
                    <p className="text-xl">Email: <a className="hover:text-blue-600" href="mailto:jmli314@berkeley.edu"><u>jmli314@berkeley.edu</u></a></p>
                    <div className="flex items-center justify-center gap-10">
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://www.linkedin.com/in/jaden-li-23a873314/"><img src={linkedin} alt="LinkedIn"/></a>
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://github.com/pi-person314"><img src={github} alt="GitHub"/></a>
                    </div>
                </div>
                <div className="w-3/4 h-3/5 lg:w-1/2 p-10">
                    <div className="grid grid-cols-3 overflow-y-auto h-full">
                        {Object.entries(images).map(([path, module], index) => (
                            <img key={index} src={module.default} alt={`Image ${index}`} className="shadow-lg aspect-square object-cover"/>
                        ))}
                    </div>
                    <p className="text-xl mt-5 text-center">Check out some of my travel photos!</p>
                </div>
            </div>
        </>
    );
};