import me from "../assets/images/me.jpg"

export default function About() {
    return (
        <>
            <div className="flex-1 flex justify-between bg-green-300 h-full">
                <div className="flex flex-col justify-between m-10 w-1/3">
                    <div>
                        <h1 className="text-5xl mb-5"><b>Profile</b></h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div> 
                        <h1 className="text-3xl mb-5"><b>Honors</b></h1>
                        <ul className="list-disc text-lg ml-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div> 
                        <h1 className="text-3xl mb-5"><b>Volunteering</b></h1>
                        <ul className="list-disc text-lg ml-5">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center m-10 w-1/2">
                    <h1 className="text-3xl mb-5"><b>Hobbies</b></h1>
                    <div className="overflow-y-auto space-y-5">
                        <div className="flex space-x-3 bg-green-400 shadow-xl rounded-xl p-5 w-full h-1/5">
                            <div>
                                <h className="text-2xl"><b>Title</b></h>
                                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <img className="w-1/3 object-contain" src={me}/>
                        </div>
                        <div className="flex space-x-3 bg-green-400 shadow-xl rounded-xl p-5 w-full h-1/5">
                            <div>
                                <h className="text-2xl"><b>Title</b></h>
                                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <img className="w-1/3 object-contain" src={me}/>
                        </div>
                        <div className="flex space-x-3 bg-green-400 shadow-xl rounded-xl p-5 w-full h-1/5">
                            <div>
                                <h className="text-2xl"><b>Title</b></h>
                                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <img className="w-1/3 object-contain" src={me}/>
                        </div>
                        <div className="flex space-x-3 bg-green-400 shadow-xl rounded-xl p-5 w-full h-1/5">
                            <div>
                                <h className="text-2xl"><b>Title</b></h>
                                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <img className="w-1/3 object-contain" src={me}/>
                        </div>
                        <div className="flex space-x-3 bg-green-400 shadow-xl rounded-xl p-5 w-full h-1/5">
                            <div>
                                <h className="text-2xl"><b>Title</b></h>
                                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <img className="w-1/3 object-contain" src={me}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};