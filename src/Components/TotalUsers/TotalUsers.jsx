import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Tooltip,  } from "chart.js";
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Legend,
    Tooltip
  );
const TotalUsers = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "This year",
            data: [12000, 8000, 10000, 18000, 25000, 19000, 22000],
            borderColor: "#000000",
            backgroundColor: "rgba(0,0,0,0.1)",
            fill: true,
            tension: 0.9,
            pointRadius: 0,
          },
          {
            label: "Last year",
            data: [10000, 7000, 15000, 10000, 12000, 18000, 27000],
            borderColor: "#A3BFFA",
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 20,
              color: "#000",
            },
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
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      };
    
      return (
        <div className="w-full mx-auto bg-zinc-50 my-5">
          <h2 className="text-xl px-4 font-semibold my-4">Total Users</h2>
          <Line data={data} options={options} />
        </div>
      );
}

export default TotalUsers;