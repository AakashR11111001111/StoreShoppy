import Overview from "../Overview/Overview";
import TotalUsers from "../TotalUsers/TotalUsers";
import Traffic from "../Traffic/Traffic";
import TrafficByDevice from "../TrafficByDevice/TrafficByDevice";
import TrafficByLocation from "../TrafficByLocation/TrafficByLocation";

const Home = () => {    
    return (
        <div className="bg-zinc-50">
            <Overview />
            <div className="flex w-full">
                <div className="w-3/4">  
                    <TotalUsers />
                </div>
                <div className="w-1/4">
                    <Traffic />
                </div>
            </div>      
            <div className="flex">
                <TrafficByDevice />
                <TrafficByLocation />
            </div>

        </div>
    )
}
export default Home;