import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TrafficByLocation = () => {
  const data = {
    labels: ["United States", "Canada", "Mexico", "Other"],
    datasets: [
      {
        data: [52.1, 22.8, 13.9, 11.2],
        backgroundColor: ["#000000", "#A5B4FC", "#6EE7B7", "#BFDBFE"],
        borderWidth: 0,
        cutout: "80%", 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = [
    { name: "United States", color: "bg-black", value: "52.1%" },
    { name: "Canada", color: "bg-indigo-200", value: "22.8%" },
    { name: "Mexico", color: "bg-green-200", value: "13.9%" },
    { name: "Other", color: "bg-blue-200", value: "11.2%" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow w-[80%] mx-auto flex items-center justify-between">
      <div className="w-1/2">
        <h2 className="text-md font-semibold mb-4 text-black">Traffic by Location</h2>
        <Doughnut data={data} options={options} />
      </div>
      <div className="space-y-4 w-1/2 pl-8">
        {labels.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span className="text-gray-800">{item.name}</span>
            </div>
            <span className="text-gray-600">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficByLocation;
