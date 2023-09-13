const Hero = () => {
    return <div className="px-10 my-10 mb-10 md:pl-32">
                <div className="flex flex-row gap-3 items-center p-3">
                    <span className="bg-black p-1 text-white rounded-full uppercase font-bold">new</span>
                    <h3 className="uppercase text-slate-400 font-secondary">monograph dashbord</h3>
                </div>
                <div>
                    <h1 className="text-left uppercase text-black font-secondary font-black p-3">powerful insights into your team</h1>
                </div>
                <div>
                    <p className="text-left text-slate-400">Project planning and time tracking for agile teams</p>
                </div>
                <div className="text-left flex gap-6 items-center uppercase font-secondary mt-5">
                    <button className="bg-red-600 uppercase font-secondary font-bold">schedule a demo</button><h4 className="text-slate-400">to see a preview</h4>
                </div>
            </div>

}

export default Hero