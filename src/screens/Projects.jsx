import me from "../assets/images/me.jpg"

export default function Projects() {
    return (
        <>
            {/* lingly, apl, own project (tbd), maybe smokecast, maybe plutus */}
            <div className="flex-1 grid grid-cols-2 bg-green-300 overflow-y-scroll">
                <div className="bg-green-400 flex-col shadow-xl rounded-xl space-y-5 p-10 m-10">
                    <img className="h-1/2 justify-self-center object-contain" src={me}/>
                    <h1 className="text-5xl text-center"><b>Title</b></h1>
                    <p className="text-lg">Description</p>
                </div>
                <div className="bg-green-400 flex-col shadow-xl rounded-xl space-y-5 p-10 m-10">
                    <img className="h-1/2 justify-self-center object-contain" src={me}/>
                    <h1 className="text-5xl text-center"><b>Title</b></h1>
                    <p className="text-lg">Description</p>
                </div>
                <div className="bg-green-400 flex-col shadow-xl rounded-xl space-y-5 p-10 m-10">
                    <img className="h-1/2 justify-self-center object-contain" src={me}/>
                    <h1 className="text-5xl text-center"><b>Title</b></h1>
                    <p className="text-lg">Description</p>
                </div>
                <div className="bg-green-400 flex-col shadow-xl rounded-xl space-y-5 p-10 m-10">
                    <img className="h-1/2 justify-self-center object-contain" src={me}/>
                    <h1 className="text-5xl text-center"><b>Title</b></h1>
                    <p className="text-lg">Description</p>
                </div>
            </div>
        </>
    );
};