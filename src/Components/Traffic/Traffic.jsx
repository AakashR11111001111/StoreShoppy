const trafficData = [
  { name: "Google", thisYear: "w-6", lastYear: "w-4" },
  { name: "YouTube", thisYear: "w-10", lastYear: "w-6" },
  { name: "Instagram", thisYear: "w-6", lastYear: "w-4" },
  { name: "Pinterest", thisYear: "w-10", lastYear: "w-6" },
  { name: "Facebook", thisYear: "w-6", lastYear: "w-4" },
  { name: "Twitter", thisYear: "w-8", lastYear: "w-6" },
];

const Traffic = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-xl h-full">
      <h2 className="text-md font-semibold mb-4 text-black">Traffic by Website</h2>
      <div className="h-full flex flex-col items-center justify-evenly">
        {trafficData.map((ele, idx) => (
          <div key={idx} className="flex items-center w-full justify-around text-center">
            <span className="text-sm font-medium text-black w-24">{ele.name}</span>
            <div className="flex space-x-2 w-full ml-4">
              <span className={`h-1 bg-black ${ele.thisYear} rounded-sm`}></span>
              <span className={`h-1 bg-gray-300 ${ele.lastYear} rounded-sm`}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traffic;
