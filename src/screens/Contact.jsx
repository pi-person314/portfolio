import github from "../assets/images/github.svg"
import linkedin from "../assets/images/linkedin.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = import.meta.glob('../assets/images/travel/*.{jpg,png}', { eager: true });

export default function Contact({darkMode}) {
    return (
        <div className="flex tiny:flex-col h-full justify-evenly items-center p-8 overflow-y-auto font-montserrat">
            <div className={`text-center space-y-5 p-12 rounded-xl shadow-xl m-10 ${darkMode ? "bg-zinc-700" : "bg-zinc-400"}`}>
                {/* email/phone */}
                <p className="text-sm lg:text-lg">
                Email:{" "}
                <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="mailto:jmli314@berkeley.edu">
                    <u>jmli314@berkeley.edu</u>
                </a>
                </p>
                <p className="text-sm lg:text-lg">
                    Phone:{" "}
                    <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="tel:443-251-6876">
                        <u>(443) 251-6876</u>
                    </a>
                </p>

                {/* linkedin/github icons */}
                <div className="flex items-center justify-center gap-10 scale-75">
                    <a className="transition hover:scale-110 duration:300 ease-in-out" href="https://www.linkedin.com/in/jadenmli/" target="_blank">
                        <img src={linkedin} alt="LinkedIn Profile"/>
                    </a>
                    <a className="transition hover:scale-110 duration:300 ease-in-out" href="https://github.com/pi-person314" target="_blank">
                        <img className={`${darkMode ? "invert hue-rotate-180" : ""}`} src={github} alt="GitHub Profile"/>
                    </a>
                </div>
            </div>

            {/* travel photo slider */}
            <div className={`flex flex-col justify-center tiny:my-10 h-[50vh] w-[50vh] tiny:h-[50vw] tiny:w-[50vw] ${darkMode ? "" : "light"}`}>
                <p className="text-sm lg:text-base mb-4 text-center">Check out my travel photos!</p>
                <Slider infinite={true} autoplay={true} speed={1000} autoplaySpeed={2000} slidesToShow={1} slidesToScroll={1}>
                    {Object.entries(images).map(([path, module], index) => (
                        <img src={module.default} alt={`Image ${index}`} className="aspect-square object-cover rounded-2xl"/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};