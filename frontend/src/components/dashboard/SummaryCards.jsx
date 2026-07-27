import { Car, Thermometer, BatteryCharging, Brain } from "lucide-react";

function SummaryCards({ dashboardData }) {
  const cards = [
    {
      title: "Vehicle Health",
      value:
        dashboardData?.latestPrediction?.healthScore !== undefined
          ? `${dashboardData.latestPrediction.healthScore}%`
          : "--",
      color: "text-cyan-400",
      icon: Car,
    },
    {
      title: "Engine Temp",
      value:
        dashboardData?.latestSensorData?.engineTemperature !== undefined
          ? `${dashboardData.latestSensorData.engineTemperature}°C`
          : "--",
      color: "text-orange-400",
      icon: Thermometer,
    },
    {
      title: "Battery",
      value:
        dashboardData?.latestSensorData?.batteryVoltage !== undefined
          ? `${dashboardData.latestSensorData.batteryVoltage}V`
          : "--",
      color: "text-green-400",
      icon: BatteryCharging,
    },
    {
      title: "AI Status",
      value: dashboardData?.latestPrediction?.status ?? "--",
      color: "text-purple-400",
      icon: Brain,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-sm">{card.title}</p>

                <h2 className={`text-3xl font-bold mt-2 ${card.color}`}>
                  {card.value}
                </h2>
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                <Icon size={30} className={card.color} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SummaryCards;