import notifications from "../../Utils/notifications";

const Notifications = () => {
    
    return (
        <div className="py-5 px-2">
            <h3 className="font-semibold">Notifications</h3>
            {
                notifications.map((ele,idx) => 
                <div key={idx} className="py-2.5 flex gap-1.5">
                    {ele.icon}
                    <div>
                        <h6 className="text-[13px]">{ele.message}</h6>
                        <h6 className="text-zinc-400 text-[14px]">{ele.time}</h6>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Notifications;