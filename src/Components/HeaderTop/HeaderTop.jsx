const HeaderTop = () => {
    return (
        <div className="h-16 w-[calc(100vw-450px)] border-b-1 px-5 py-2.5 border-b-gray-200 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center h-full gap-4">
                <img className="h-6" src="/sidebar.png" alt="" />
                <img className="h-5.5" src="/star.png" alt="" />
                <span className="text-zinc-300">Dashboards</span>
                <span className="text-zinc-300">/</span>
                <span>Default</span>
            </div>
            <div className="flex items-center h-full gap-4 text-zinc-400">
                <div className="bg-zinc-200 flex justify-between px-3.5 py-1 items-center gap-2 rounded-2xl">
                    <img className="h-4.5 opacity-40" src="/search.png" alt="" />
                    <input className="border-none outline-none focus:outline-none bg-transparent placeholder:text-zinc-400"  type="text" placeholder="Search" />
                    <span>/</span>
                </div>
                <div className="flex gap-3">
                {
                    ["sun","timer","bell","sidebar"].map((img,idx) => <img key={idx} className="h-6" src={`/${img}.png`} alt={`${img}`} />)
                }
                </div>
            </div>
            
        </div>
    )
}

export default HeaderTop;