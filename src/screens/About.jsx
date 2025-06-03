import comp from "../assets/images/umd.jpg";
import cello from "../assets/images/cello.png";
import tennis from "../assets/images/tennis.png";
import travel from "../assets/images/mosque.jpg";
import pi from "../assets/images/pillow.jpg";
import { Link } from "react-router-dom";

export default function About({darkMode}) {
    return (
        <>
            <div className={`flex flex-col md:flex-row justify-between h-full overflow-y-auto ${darkMode ? "bg-green-900 text-white" : "bg-green-300"}`}>
                <div className="flex flex-col justify-between space-y-10 m-10 md:w-2/5">
                    <div>
                        <h1 className="text-3xl lg:text-5xl mb-5 font-serif justify-self-center md:justify-self-auto"><b>Profile</b></h1>
                        <p className="text-md lg:text-lg">Highly motivated and hardworking college student planning to pursue a career in <b>software engineering</b>.
                            Proficient in <b>React JS</b>, <b>Tailwind CSS</b>, <b>Firebase</b>, <b>Pandas</b>, and <b>OpenCV</b>.
                            Also interested in training algorithmic problem-solving and proof-based reasoning for competitions such as <b>ICPC</b> and <b>Putnam</b>.
                            Always curious about the beauty of <b>math</b> and its intersections with <b>computer science</b> and <b>music</b>.
                        </p>
                    </div>
                    <div className="md:h-1/6 lg:h-1/4"> 
                        <h1 className="text-2xl lg:text-3xl mb-5 justify-self-center md:justify-self-auto"><b>Experience</b></h1>
                        <div className="md:h-full md:overflow-y-auto">
                            <h2 className="text-lg lg:text-xl"><b>JHU Applied Physics Lab ASPIRE Intern</b></h2>
                            <h3 className="text-lg lg:text-xl">Fall 2023 - Spring 2025</h3>
                            <ul className="list-disc text-md lg:text-lg list-inside mb-5">
                                <li>Facilitated employees with the testing of an AI that evaluates logic and reasoning in government reports</li>
                                <li>Applied and optimized cosine similarity and other semantic analyses to clean and merge extracted topics</li>
                                <li>Utilized NetworkX and the Louvain algorithm to cluster countries based on strategic interests
                                    <ul className="ml-8">
                                        <li>– Authored and published a <a className="hover:text-blue-600" href="https://arxiv.org/abs/2505.17234"><u>paper</u></a> titled "Quantifying Global Networks of Exchange through the Louvain Method"</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div> 
                        <h1 className="text-2xl lg:text-3xl mb-5 justify-self-center md:justify-self-auto"><b>Honors</b></h1>
                        <ul className="list-disc text-md lg:text-lg ml-5">
                            <li>3x American Invitational Mathematics Examination (AIME) Qualifer</li>
                            <li>Hack the Nest: First Place Overall</li>
                            <li>MathWorks Math Modeling Challenge: Technical Computing Honorable Mention</li>
                            <li>University of Maryland High School Programming Contest: 3rd Place</li>
                            <li>Maryland All State Senior Orchestra Principal Cellist</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center m-10 md:w-1/2">
                    <h1 className="text-2xl lg:text-3xl mb-5"><b>Hobbies</b></h1>
                    <div className="md:overflow-y-auto space-y-5">
                        <div className={`flex flex-col md:flex-row shadow-xl rounded-xl p-5 w-full md:h-1/5 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                            <div className="mb-5 md:mb-0 md:mr-10 md:overflow-y-auto">
                                <h2 className="text-lg lg:text-xl"><b>Competitive Programming / Math</b></h2>
                                <p className="text-md lg:text-lg">Competed in various regional and national programming competitions: UMD, Virginia Tech, M(IT)^2, CALICO, etc.
                                    Took the AMC 10/12 and AIME throughout high school and was captain of the Math Team.
                                    Continue to participate in weekly Codeforces and LeetCode contests.
                                </p>
                            </div>
                            <img className="md:w-1/3 object-contain" src={comp}/>
                        </div>
                        <div className={`flex flex-col md:flex-row shadow-xl rounded-xl p-5 w-full md:h-1/5 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                            <div className="mb-5 md:mb-0 md:mr-10 md:overflow-y-auto">
                                <h2 className="text-lg lg:text-xl"><b>Piano / Cello</b></h2>
                                <p className="text-md lg:text-lg">Started private lessons at the ages of 6 and 8. 
                                    Learned and fell in love with classical repertoire by Beethoven, Chopin, Tchaikovsky, etc.
                                    Led the county orchestra cello section and won the concerto competition as a pianist.
                                    Performed in various chamber groups (piano trio, cello quartet) with friends.
                                </p>
                            </div>
                            <img className="md:scale-100 md:w-1/3 object-contain" src={cello}/>
                        </div>
                        <div className={`flex flex-col md:flex-row shadow-xl rounded-xl p-5 w-full md:h-1/5 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                            <div className="mb-5 md:mb-0 md:mr-10 md:overflow-y-auto">
                                <h2 className="text-lg lg:text-xl"><b>Tennis</b></h2>
                                <p className="text-md lg:text-lg">Settled on tennis after trying soccer, basketball, and baseball.
                                    Quickly improved with lots of practice and made it on the high school varsity team.
                                    Continue to play with friends (doubles whenever possible!) and watch tournaments on TV.
                                </p>
                            </div>
                            <img className="md:w-1/3 object-contain" src={tennis}/>
                        </div>
                        <div className={`flex flex-col md:flex-row shadow-xl rounded-xl p-5 w-full md:h-1/5 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                            <div className="mb-5 md:mb-0 md:mr-10 md:overflow-y-auto">
                                <h2 className="text-lg lg:text-xl"><b>Travel</b></h2>
                                <p className="text-md lg:text-lg">Went on tons of cool trips with parents over school breaks.
                                    Took lots of pictures (check out my <Link className="hover:text-blue-600" to="/contact"><u>contact page</u></Link>)!
                                    Places visited: China, Alaska, Hawaii, Mexico, Costa Rica, UK, France, Spain, Italy, Greece, Turkey, etc.
                                </p>
                            </div>
                            <img className="md:w-1/3 object-contain" src={travel}/>
                        </div>
                        <div className={`flex flex-col md:flex-row shadow-xl rounded-xl p-5 w-full md:h-1/5 ${darkMode ? "bg-green-700" : "bg-green-400"}`}>
                            <div className="mb-5 md:mb-0 md:mr-10 md:overflow-y-auto">
                                <h2 className="text-lg lg:text-xl"><b>Pi</b></h2>
                                <p className="text-md lg:text-lg">Started when I memorized 100 digits for a pi memorization contest in elementary school.
                                    Has grown into a passion for the number pi, as can be seen from my nickname (Pi Person), this website's logo, and my unwavering belief that pi is the best number out there.
                                </p>
                            </div>
                            <img className="md:w-1/3 object-contain" src={pi}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};