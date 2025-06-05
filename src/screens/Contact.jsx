import github from "../assets/images/github.svg"
import linkedin from "../assets/images/linkedin.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = import.meta.glob('../assets/travel/*.{jpg,png}', { eager: true });

export default function Contact({darkMode}) {
    return (
        <>
            <div className={`flex portrait:flex-col h-full justify-evenly items-center overflow-y-auto ${darkMode ? "bg-green-900 text-white" : "bg-green-300"}`}>
                <div className="space-y-5 text-center">
                    <h1 className="font-serif font-bold text-4xl lg:text-6xl">Contact Me</h1>
                    <p className="text-sm lg:text-lg">Phone: <a className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="tel:443-251-6876"><u>(443) 251-6876</u></a></p>
                    <p className="text-sm lg:text-lg">Email: <a className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="mailto:jmli314@berkeley.edu"><u>jmli314@berkeley.edu</u></a></p>
                    <div className="flex items-center justify-center gap-10 scale-75">
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://www.linkedin.com/in/jaden-li-23a873314/"><img src={linkedin} alt="LinkedIn"/></a>
                        <a className="transition hover:scale-105 duration:300 ease-in-out" href="https://github.com/pi-person314"><img src={github} alt="GitHub"/></a>
                    </div>
                </div>
                <div className={`flex flex-col justify-center h-[30vh] w-[30vh] lg:h-[40vh] lg:w-[40vh] ${darkMode ? "" : "light"}`}>
                    <p className="text-sm lg:text-base mb-3 text-center">Check out some of my travel photos!</p>
                    <Slider infinite={true} autoplay={true} speed={1000} autoplaySpeed={3000} slidesToShow={1} slidesToScroll={1}>
                        {Object.entries(images).map(([path, module], index) => (
                            <img key={index} src={module.default} alt={`Image ${index}`} className="h-full w-full aspect-square object-cover"/>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};