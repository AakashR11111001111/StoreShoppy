import overview from "../../Utils/overview";
import OverviewCard from "../OverviewCard/OverviewCard";

const Overview = () => {
    
    return (
        <>
            <div className="flex justify-between px-6 py-5 items-center w-full">
                <h5 className="font-semibold">Overview</h5>
                <select className="text-[15px] px-2.5 py-1 focus: outline-none" name="">
                    <option value="Today" defaultValue={"Today"}>Today</option>
                    <option value="Yesterday">Yesterday</option>
                </select>
            </div>  
            <div className="flex items-center justify-evenly">
                {
                    overview.map((ele,idx) => <OverviewCard bg={idx%2==0 ? `#b4eeb4` : `#cfead9`} key={idx} title={ele.title} value={ele.value} growth={ele.growth} status={ele.status} />)
                }
            </div>
        </>
    )
}

export default Overview;