import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TrafficByDevice = () => {
  const data = {
    labels: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
    datasets: [
      {
        label: "Users",
        data: [15000, 30000, 21000, 34000, 12000, 25000],
        backgroundColor: [
          "#A78BFA", 
          "#6EE7B7", 
          "#000000", 
          "#93C5FD", 
          "#BFDBFE", 
          "#86EFAC", 
        ],
        borderRadius: 5,
        barThickness: 50,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}K` : value;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white w-[70%] my-6">
      <h2 className="text-md font-semibold mb-4 text-black">Traffic by Device</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TrafficByDevice;
