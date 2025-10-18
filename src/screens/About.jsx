import comp from "../assets/images/hobbies/umd.jpg";
import cello from "../assets/images/hobbies/cello.png";
import tennis from "../assets/images/hobbies/tennis.png";
import travel from "../assets/images/hobbies/mosque.jpg";
import pi from "../assets/images/hobbies/pillow.jpg";
import top from "../assets/images/top.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import HobbyCard from "../components/HobbyCard.jsx";

export default function About({darkMode}) {
    const outerDiv = useRef(null);
    const goToTop = () => {
        outerDiv.current.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div ref={outerDiv} className="flex flex-col justify-between justify-self-center max-w-[100rem] p-4 h-full overflow-y-auto font-montserrat">
            <div className="flex flex-col space-y-12 px-10 my-12 mb-0 w-full">
                {/* profile */}
                <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl mb-5 font-serif text-center"><b>Profile</b></h1>
                    <p className="text-xs md:text-base text-center">
                        Highly motivated and hardworking college student looking for a career in full-stack development and/or data analysis.
                        Proficient in <i>Python</i>, <i>React JS</i>, <i>Tailwind CSS</i>, <i>Express.js</i>, <i>Node.js</i>, <i>MongoDB</i>, <i>Firebase</i>, <i>Pandas</i>, <i>NumPy</i>, and <i>NLTK</i>.
                        Enjoys training algorithmic problem-solving and proof-based reasoning skills for ICPC and Putnam.
                        Curious about the beauty of math and its intersections with computer science, music, and sports.
                    </p>
                </div>

                {/* experience */}
                <div className="flex-1 flex flex-col overflow-y-visible">
                    <h1 className="text-2xl md:text-3xl mb-5 text-center font-serif"><b>Experience</b></h1>
                    <div className="pr-3">
                        <h2 className="md:text-lg"><b>JHU Applied Physics Lab ASPIRE Intern</b></h2>
                        <h3 className="md:text-lg">Fall 2023 - Spring 2025</h3>
                        <ul className="list-disc text-xs md:text-base list-inside mb-5">
                            <li>Collaborated with national security analysts to test an LLM that evaluates logic and reasoning in government reports</li>
                            <li>Authored a {" "}
                                <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://arxiv.org/abs/2505.17234" target="_blank">
                                    <u>paper</u>
                                </a> describing our network analysis of countries and their strategic interests using <i>NetworkX</i> and the <i>Louvain Method</i>
                            </li>
                            <li>Researched and applied cosine similarity to clean and merge extracted topics</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* hobbies */}
            <div className="flex flex-col items-center px-10 my-12 mb-0 w-full">
                <h1 className="text-2xl md:text-3xl mb-5 font-serif"><b>Hobbies</b></h1>
                <div className="overflow-y-auto space-y-5">
                    <HobbyCard
                        title="Competitive Programming / Math"
                        desc="Competed in various regional and national programming competitions:
                        UMD, Virginia Tech, M(IT)^2, CALICO, etc.
                        Took the AMC 10/12 and AIME throughout high school and was captain of the Math Team."
                        image={comp}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title= "Piano / Cello"
                        desc="Started private lessons at the ages of 6 and 8. 
                        Led the county orchestra cello section and won the concerto competition as a pianist.
                        Performed in various chamber groups (piano trio, cello quartet) with friends."
                        image={cello}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title="Tennis"
                        desc="Started playing during the pandemic with my dad.
                        Quickly improved with lots of practice and made it on the high school varsity team.
                        Continue to play with friends (doubles whenever possible!) and watch tournaments on TV."
                        image={tennis}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title="Travel"
                        desc={<>Went on tons of cool trips with parents over school breaks.
                        Favorite places were China, Alaska, Costa Rica, Scotland, Greece, and Turkey.
                        Took lots of pictures (check out my {" "}
                        <Link className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/contact">
                            <u>contact page</u>
                        </Link>)!</>}
                        image={travel}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title="Pi"
                        desc="Started when I memorized 100 digits for a pi memorization contest in elementary school.
                        Has grown into a passion for the number pi, as can be seen
                        from this website's logo and my belief that pi is the best number out there."
                        image={pi}
                        darkMode={darkMode}
                    />
                </div>
            </div>

            {/* back to top button */}
            <button className="self-center scale-50" onClick={goToTop}>
                <img className={`hover:scale-105 ${darkMode ? "invert hue-rotate-180" : ""}`} src={top} alt="Back to Top Button"/>
            </button>
        </div>
    );
};