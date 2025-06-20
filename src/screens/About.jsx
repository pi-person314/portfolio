import comp from "../assets/images/umd.jpg";
import cello from "../assets/images/cello.png";
import tennis from "../assets/images/tennis.png";
import travel from "../assets/images/mosque.jpg";
import pi from "../assets/images/pillow.jpg";
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
        <div ref={outerDiv} className={`flex medium:flex-col justify-between h-full overflow-y-auto font-montserrat ${darkMode ? "bg-zinc-800 text-white" : "bg-zinc-300"}`}>
            <div className="flex flex-col justify-between medium:space-y-20 px-10 my-16 medium:mb-0 medium:w-full w-3/5">
                {/* profile */}
                <div>
                    <h1 className="text-3xl md:text-4xl mb-5 font-serif medium:text-center text-start"><b>Profile</b></h1>
                    <p className="text-sm md:text-lg medium:text-center text-start">
                        Highly motivated and hardworking college student planning to pursue a career in <b>software engineering</b>.
                        Proficient in <b>React JS</b>, <b>Tailwind CSS</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>Firebase</b>, <b>Tensorflow</b>, and <b>Pandas</b>.
                        Also interested in training algorithmic problem-solving and proof-based reasoning for competitions such as <b>ICPC</b> and <b>Putnam</b>.
                        Always curious about the beauty of <b>math</b> and its intersections with <b>computer science</b> and <b>music</b>.
                    </p>
                </div>

                {/* experience */}
                <div className="medium:h-full h-1/5"> 
                    <h1 className="text-xl md:text-2xl mb-5 medium:justify-self-center justify-self-auto font-serif"><b>Experience</b></h1>
                    <div className="h-full overflow-y-auto pr-3">
                        <h2 className="text-lg md:text-xl"><b>JHU Applied Physics Lab ASPIRE Intern</b></h2>
                        <h3 className="text-lg md:text-xl">Fall 2023 - Spring 2025</h3>
                        <ul className="list-disc text-sm md:text-lg list-inside mb-5">
                            <li>Facilitated employees with the testing of an AI that evaluates logic and reasoning in government reports</li>
                            <li>Applied and optimized cosine similarity and other semantic analyses to clean and merge extracted topics</li>
                            <li>Utilized NetworkX and the Louvain algorithm to cluster countries based on strategic interests
                                <ul className="ml-8">
                                    <li>– Authored and uploaded a preprint {" "}
                                        <a className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://arxiv.org/abs/2505.17234" target="_blank">
                                            <u>paper</u>
                                        </a>
                                        {" "}titled "Quantifying Global Networks of Exchange through the Louvain Method"
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* honors */}
                <div> 
                    <h1 className="text-xl md:text-2xl mb-5 medium:justify-self-center justify-self-auto font-serif"><b>Honors</b></h1>
                    <ul className="list-disc text-sm md:text-lg ml-5">
                        <li>3x American Invitational Mathematics Examination (AIME) Qualifer</li>
                        <li>Hack the Nest: First Place Overall</li>
                        <li>MathWorks Math Modeling Challenge: Technical Computing Honorable Mention</li>
                        <li>University of Maryland High School Programming Contest: 3rd Place</li>
                        <li>Maryland All State Senior Orchestra Principal Cellist</li>
                    </ul>
                </div>
            </div>
            
            {/* hobbies */}
            <div className="flex flex-col items-center px-10 my-16 medium:mt-24 medium:mb-0 medium:w-full w-3/5">
                <h1 className="text-xl md:text-2xl mb-5 font-serif"><b>Hobbies</b></h1>
                <div className="overflow-y-auto space-y-5">
                    <HobbyCard
                        title="Competitive Programming / Math"
                        desc="Competed in various regional and national programming competitions: UMD, Virginia Tech, M(IT)^2, CALICO, etc.
                        Took the AMC 10/12 and AIME throughout high school and was captain of the Math Team.
                        Continue to participate in weekly Codeforces and LeetCode contests."
                        image={comp}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title= "Piano / Cello"
                        desc="Started private lessons at the ages of 6 and 8. 
                        Learned and fell in love with classical repertoire by Beethoven, Chopin, Tchaikovsky, etc.
                        Led the county orchestra cello section and won the concerto competition as a pianist.
                        Performed in various chamber groups (piano trio, cello quartet) with friends."
                        image={cello}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title="Tennis"
                        desc="Settled on tennis after trying soccer, basketball, and baseball.
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
                        <Link className={`${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} to="/contact">
                            <u>contact page</u>
                        </Link>)!</>}
                        image={travel}
                        darkMode={darkMode}
                    />

                    <HobbyCard
                        title="Pi"
                        desc="Started when I memorized 100 digits for a pi memorization contest in elementary school.
                        Has grown into a passion for the number pi, as can be seen from my nickname (Pi Person), 
                        this website's logo, and my unwavering belief that pi is the best number out there."
                        image={pi}
                        darkMode={darkMode}
                    />
                </div>
            </div>

            {/* back to top button */}
            <button className="hidden medium:inline self-center scale-50" onClick={goToTop}>
                <img className={`hover:scale-105 ${darkMode ? "invert hue-rotate-180" : ""}`} src={top} alt="Back to Top Button"/>
            </button>
        </div>
    );
};