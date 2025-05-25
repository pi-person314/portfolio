import me from "../assets/images/me.jpg"
import github from "../assets/images/github.svg"
import linkedin from "../assets/images/linkedin.svg"

const images = import.meta.glob('../assets/travel/*.{jpg,png}', { eager: true });

export default function Contact() {
    return (
        <>
            <div className="flex-1 flex bg-green-300 justify-evenly items-center">
                <div className="flex-col space-y-5 text-center">
                    <h1 className="font-serif font-bold text-6xl">Contact Me</h1>
                    <p className="text-xl">Phone: <a className="hover:text-blue-600" href="tel:443-251-6876"><u>(443) 251-6876</u></a></p>
                    <p className="text-xl">Email: <a className="hover:text-blue-600" href="mailto:jmli314@berkeley.edu"><u>jmli314@berkeley.edu</u></a></p>
                    <div className="flex items-center justify-center gap-10">
                        <a className="hover:text-blue-600" href="https://www.linkedin.com/in/jaden-li-23a873314/"><img src={linkedin} alt="LinkedIn"/></a>
                        <a className="hover:text-blue-600" href="https://github.com/pi-person314"><img src={github} alt="GitHub"/></a>
                    </div>
                </div>
                <div className="flex-col w-1/2">
                    <div className="grid grid-cols-3 overflow-y-auto max-h-[40rem]">
                        {/* TODO: replace with actual gallery */}
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