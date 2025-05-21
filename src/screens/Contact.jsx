import me from "../assets/images/me.jpg"

export default function Contact() {
    return (
        <>
            <div className="flex-1 flex bg-green-300 justify-evenly items-center">
                <div className="flex-col space-y-5 text-center">
                    <h1 className="font-serif font-bold text-6xl">Contact Me</h1>
                    <p className="text-xl">Phone: <a className="hover:text-blue-600" href="tel:443-251-6876"><u>(443) 251-6876</u></a></p>
                    <p className="text-xl">Email: <a className="hover:text-blue-600" href="mailto:jadenmengl@gmail.com"><u>jadenmengl@gmail.com</u></a></p>
                    <p className="text-xl"><a className="hover:text-blue-600" href="https://www.linkedin.com/in/jaden-li-23a873314/"><u>LinkedIn</u></a></p>
                </div>
                <div className="flex-col w-1/2">
                    <div className="grid grid-cols-3 overflow-y-auto max-h-[40rem]">
                        {/* TODO: replace with actual gallery */}
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                        <img className="shadow-lg aspect-square object-cover" src={me} alt="Me"/>
                    </div>
                    <p className="text-xl mt-5 text-center">Check out some of my travel photos!</p>
                </div>
            </div>
        </>
    );
};