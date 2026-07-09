import math from "../assets/images/hobbies/math.png";
import cello from "../assets/images/hobbies/cello.png";
import tennis from "../assets/images/hobbies/tennis.png";
import travel from "../assets/images/hobbies/mosque.jpg";
import pi from "../assets/images/hobbies/pillow.jpg";
import siemens from "../assets/images/jobs/siemens.png";
import queryhat from "../assets/images/jobs/queryhat.png";
import apl from "../assets/images/jobs/apl.png";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import HobbyCard from "../components/HobbyCard.jsx";
import JobCard from "../components/JobCard.jsx";

const icons = {
    profile: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
        </svg>
    ),
    experience: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 12h18" />
        </svg>
    ),
    hobbies: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
            <path d="M12 21s-7-4.5-9.5-8.5C1 9 3 5.5 6.5 5.5c2 0 3.6 1.4 5.5 3 1.9-1.6 3.5-3 5.5-3C21 5.5 23 9 21.5 12.5 19 16.5 12 21 12 21z" />
        </svg>
    ),
};

export default function About({darkMode}) {
    const outerDiv = useRef(null);
    const profileRef = useRef(null);
    const experienceRef = useRef(null);
    const hobbiesRef = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("profile");

    const sections = [
        { id: "profile", label: "Profile", ref: profileRef },
        { id: "experience", label: "Experience", ref: experienceRef },
        { id: "hobbies", label: "Hobbies", ref: hobbiesRef },
    ];
    const pianoLink = <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://www.youtube.com/watch?v=ae0l1NgdRQs&list=PLuo0lFk5yVMvvhQX2gmipeOC2X7wCnvR1" target="_blank"><u>piano</u></a>;
    const celloLink = <a className={`duration-300 ${darkMode ? "hover:text-blue-300" : "hover:text-blue-600"}`} href="https://www.youtube.com/watch?v=8a3DO8KyRNo&list=PLuo0lFk5yVMtmrlDwDqx68-aNZeejHGoy" target="_blank"><u>cello</u></a>;

    const scrollToSection = (section) => {
        if (section.id === "profile") {
            outerDiv.current.scrollTo({top: 0, behavior: 'smooth'});
            return;
        }
        const containerTop = outerDiv.current.getBoundingClientRect().top;
        const sectionTop = section.ref.current.getBoundingClientRect().top;
        const scrollTop = outerDiv.current.scrollTop;
        outerDiv.current.scrollTo({top: sectionTop - containerTop + scrollTop - 16, behavior: 'smooth'});
    };

    useEffect(() => {
        const el = outerDiv.current;
        if (!el) return;
        const onScroll = () => {
            const containerTop = el.getBoundingClientRect().top;
            let current = sections[0].id;
            for (const section of sections) {
                if (section.ref.current && section.ref.current.getBoundingClientRect().top - containerTop <= 120) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };
        el.addEventListener("scroll", onScroll);
        onScroll();
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1280px)");
        const apply = () => setSidebarOpen(mq.matches);
        apply();
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
    }, []);

    return (
        <div ref={outerDiv} className="flex flex-col justify-between p-4 h-full overflow-y-auto font-montserrat">
            {/* section sidebar */}
            <nav
                className={`hidden md:flex short:hidden fixed left-6 top-[calc(50%+3rem)] -translate-y-1/2 flex-col z-10 p-4 rounded-xl shadow-xl transition-all duration-300 ${sidebarOpen ? "w-56" : "w-[4.5rem]"} ${
                    darkMode ? "bg-zinc-900" : "bg-zinc-100 text-black"
                }`}
            >
                <div className={`flex items-center ${sidebarOpen ? "justify-between" : "justify-center"} mb-4 px-1`}>
                    {sidebarOpen && (
                        <span className="text-base font-domine"><b>Sections</b></span>
                    )}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`flex items-center justify-center w-8 h-8 rounded-lg text-lg leading-none duration-300 ${
                            darkMode ? "hover:text-blue-300" : "hover:text-blue-600"
                        }`}
                        title={sidebarOpen ? "Minimize" : "Expand"}
                    >
                        {sidebarOpen ? "«" : "»"}
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {sections.map((section) => {
                        const active = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section)}
                                title={section.label}
                                className={`relative flex items-center ${sidebarOpen ? "gap-3 px-3" : "justify-center px-0"} h-12 rounded-lg text-left duration-300 ${
                                    active
                                        ? darkMode
                                            ? "bg-zinc-800 text-white"
                                            : "bg-zinc-300 text-black"
                                        : darkMode
                                            ? "text-white/70 hover:bg-zinc-800/60 hover:text-white"
                                            : "text-black/60 hover:bg-zinc-300/60 hover:text-black"
                                }`}
                            >
                                <span
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-300 ${
                                        active ? "h-5" : "h-0"
                                    } ${darkMode ? "bg-blue-300" : "bg-blue-600"}`}
                                />
                                {icons[section.id]}
                                {sidebarOpen && <span className="text-base">{section.label}</span>}
                            </button>
                        );
                    })}
                </div>
            </nav>

            <div className={`flex flex-col space-y-12 px-10 my-12 mx-auto max-w-[80rem] transition-all duration-300 ${sidebarOpen ? "md:ml-[max(calc((100vw_-_80rem)/2),16.5rem)]" : "md:ml-[max(calc((100vw_-_80rem)/2),6.5rem)]"} short:!ml-auto`}>
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
                            title="Research Intern"
                            date="Summer 2026"
                            bullets={[
                                "Developing a novel text-to-image framework for synthesizing medical imaging data from anatomical descriptions",
                                "Engineered a 50+ attribute schema encoding shape and material properties for LLM agent control of fine-grained anatomy",
                                "Training conditional diffusion models across Slurm-scheduled CUDA GPU nodes to synthesize diverse medical images"
                            ]}
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