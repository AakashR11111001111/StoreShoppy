import activities from "../../Utils/activities";

const Activities = () => {
    
    return (
        <>
            <div className="py-5 px-2">
            <h3 className="font-semibold">Activities</h3>
            {
                activities.map((ele,idx) => 
                <div key={idx} className="py-2.5 h-11 flex items-center gap-2.5 my-3">
                    <img className="h-7 rounded-full " src={ele.img} alt="" />
                    <div>
                        <h6 className="text-[13px]">{ele.message}</h6>
                        <h6 className="text-zinc-400 text-[14px]">{ele.time}</h6>
                    </div>
                </div>)
            }
        </div>
        </>
    )
}
export default Activities;