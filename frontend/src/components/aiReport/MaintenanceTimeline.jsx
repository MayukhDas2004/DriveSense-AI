import {
  FaCheckCircle,
  FaOilCan,
  FaCar,
  FaTools,
} from "react-icons/fa";

const timeline = [
  {
    title: "Today's Inspection",
    description: "AI health check completed successfully.",
    icon: FaCheckCircle,
    color: "text-green-400",
  },
  {
    title: "After 500 km",
    description: "Engine oil inspection recommended.",
    icon: FaOilCan,
    color: "text-yellow-400",
  },
  {
    title: "After 1000 km",
    description: "Tire rotation and wheel alignment.",
    icon: FaCar,
    color: "text-cyan-400",
  },
  {
    title: "After 5000 km",
    description: "Complete vehicle servicing.",
    icon: FaTools,
    color: "text-purple-400",
  },
];

function MaintenanceTimeline() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        Maintenance Timeline
      </h2>

      <div className="space-y-8">
        {timeline.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-5 items-start"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center ${item.color}`}
              >
                <Icon />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default MaintenanceTimeline;