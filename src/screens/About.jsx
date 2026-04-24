import math from "../assets/images/hobbies/math.png";
import cello from "../assets/images/hobbies/cello.png";
import tennis from "../assets/images/hobbies/tennis.png";
import travel from "../assets/images/hobbies/mosque.jpg";
import pi from "../assets/images/hobbies/pillow.jpg";
import siemens from "../assets/images/jobs/siemens.png";
import queryhat from "../assets/images/jobs/queryhat.png";
import apl from "../assets/images/jobs/apl.png";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import HobbyCard from "../components/HobbyCard.jsx";
import JobCard from "../components/JobCard.jsx";

export default function About({darkMode}) {
    const outerDiv = useRef(null);
    const profileRef = useRef(null);
    const experienceRef = useRef(null);
    const hobbiesRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pianoLink = <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://www.youtube.com/watch?v=ae0l1NgdRQs&list=PLuo0lFk5yVMvvhQX2gmipeOC2X7wCnvR1" target="_blank"><u>piano</u></a>;
    const celloLink = <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://www.youtube.com/watch?v=8a3DO8KyRNo&list=PLuo0lFk5yVMtmrlDwDqx68-aNZeejHGoy" target="_blank"><u>cello</u></a>;

    const scrollToSection = (ref) => {
        const containerTop = outerDiv.current.getBoundingClientRect().top;
        const sectionTop = ref.current.getBoundingClientRect().top;
        const scrollTop = outerDiv.current.scrollTop;
        outerDiv.current.scrollTo({top: sectionTop - containerTop + scrollTop - 16, behavior: 'smooth'});
    };

    return (
        <div ref={outerDiv} className="flex flex-col justify-between p-4 h-full overflow-y-auto font-montserrat">
            {/* section sidebar */}
            <nav className={`hidden lg:flex short:hidden fixed left-6 top-[calc(50%+3rem)] -translate-y-1/2 flex-col z-10 border ${darkMode ? "border-white" : "border-black"} rounded-xl font-domine ${sidebarOpen ? "h-1/2" : ""}`}>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={`text-xl duration-300 ${sidebarOpen ? "absolute top-2 right-4" : "flex items-center justify-center w-10 h-10 leading-none"} ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}
                    title={sidebarOpen ? "Minimize" : "Expand"}
                >
                    {sidebarOpen ? "«" : "»"}
                </button>
                {sidebarOpen && (
                    <div className="flex flex-1 flex-col justify-center space-y-14 px-10">
                        <button onClick={() => outerDiv.current.scrollTo({top: 0, behavior: 'smooth'})} className={`text-lg text-left duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                            Profile
                        </button>
                        <button onClick={() => scrollToSection(experienceRef)} className={`text-lg text-left duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                            Experience
                        </button>
                        <button onClick={() => scrollToSection(hobbiesRef)} className={`text-lg text-left duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`}>
                            Hobbies
                        </button>
                    </div>
                )}
            </nav>

            <div className={`flex flex-col space-y-12 px-10 my-12 mx-auto w-full max-w-[80rem] transition-all duration-300 ${sidebarOpen ? "lg:pl-56" : "lg:pl-24"} short:lg:pl-10`}>
                {/* profile */}
                <div ref={profileRef} className="flex-1">
                    <h1 className="text-2xl md:text-3xl mb-5 font-domine text-center"><b>Profile</b></h1>
                    <p className="text-xs md:text-base text-center">
                        Highly motivated and hardworking college student looking for a career in software engineering or machine learning research.<br/><br/>
                        Proficient in <i>Python</i>, <i>C++</i>, <i>Java</i>, <i>TypeScript</i>, <i>React</i>, <i>Tailwind</i>, <i>Express</i>, <i>Flask</i>, <i>MongoDB</i>, <i>Firebase</i>, <i>PyTorch</i>, <i>Pandas</i>, <i>NLTK</i>,<br/>and of course <i>Claude Code</i>.<br/><br/>
                        Enjoys training algorithmic problem-solving and proof-based reasoning skills for ICPC and Putnam.<br/>
                        Curious about the beauty of math and its intersections with computer science, music, and sports.
                    </p>
                </div>

                {/* experience */}
                <div ref={experienceRef} className="flex-1 flex flex-col overflow-y-visible">
                    <h1 className="text-2xl md:text-3xl mb-5 text-center font-domine"><b>Experience</b></h1>
                    <div className="space-y-5">
                        <JobCard
                            title="Software Engineer Intern"
                            date="Summer 2026"
                            bullets={["TBD"]}
                            image={siemens}
                            darkMode={darkMode}
                        />
                        <JobCard
                            title="Software Engineer Intern"
                            date="Fall 2025"
                            bullets={[
                                "Expanded an AI-powered system of microservices that seamlessly integrates and analyzes multiple sources of external data",
                                "Automated model evaluation using document QA datasets and natural language similarity measures to test the validity of chatbot responses",
                                "Implemented a tagging feature that allows users to categorize their documents and fine-tune the scope of their results"
                            ]}
                            image={queryhat}
                            darkMode={darkMode}
                        />
                        <JobCard
                            title="Research Intern"
                            date="Fall 2023 - Spring 2025"
                            bullets={[
                                "Developed and tested evaluation frameworks for AI models that evaluate logic and reasoning in government reports",
                                <>Authored a{" "}
                                    <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://arxiv.org/abs/2505.17234" target="_blank">
                                        <u>paper</u>
                                    </a> describing our network analysis of countries and their strategic interests using <i>NetworkX</i> and the <i>Louvain Method</i>
                                </>,
                                "Optimized cosine similarity and other semantic analyses to clean and merge 4,137 extracted topics"
                            ]}
                            image={apl}
                            darkMode={darkMode}
                        />
                    </div>
                </div>

                {/* hobbies */}
                <div ref={hobbiesRef} className="flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl mb-5 font-domine"><b>Hobbies</b></h1>
                    <div className="overflow-y-auto space-y-5">
                        <HobbyCard
                            title="Competitive Programming / Math"
                            desc="Competed in various regional and national programming competitions:
                            UMD, M(IT)^2, ICPC, etc.
                            Took the AMC 10/12 and AIME throughout high school and was captain of the Math Team.
                            Currently organizing the CALICO Informatics Competition at UC Berkeley!"
                            image={math}
                            darkMode={darkMode}
                        />

                        <HobbyCard
                            title= "Piano / Cello"
                            desc={<>Started private lessons at the ages of 6 and 8.
                            Led the county orchestra cello section and won the concerto competition as a pianist.
                            Performed in various chamber groups (piano trio, cello quartet) with friends.
                            Feel free to check out some of my performances ({pianoLink}, {celloLink})!</>}
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
            </div>
        </div>
    );
};