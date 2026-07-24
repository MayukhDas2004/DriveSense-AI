import {
  Gauge,
  GaugeCircle,
  Fuel,
  CircleDot,
  Activity,
  Thermometer,
} from "lucide-react";

const sensors = [
  {
    title: "Engine RPM",
    value: "3200",
    unit: "RPM",
    icon: Gauge,
    color: "text-cyan-400",
  },
  {
    title: "Speed",
    value: "72",
    unit: "km/h",
    icon: GaugeCircle,
    color: "text-green-400",
  },
  {
    title: "Fuel",
    value: "68",
    unit: "%",
    icon: Fuel,
    color: "text-yellow-400",
  },
  {
    title: "Tire Pressure",
    value: "32",
    unit: "PSI",
    icon: CircleDot,
    color: "text-purple-400",
  },
  {
    title: "Engine Vibration",
    value: "0.12",
    unit: "g",
    icon: Activity,
    color: "text-pink-400",
  },
  {
    title: "Oil Temp",
    value: "95",
    unit: "°C",
    icon: Thermometer,
    color: "text-orange-400",
  },
];

function SensorGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {sensors.map((sensor, index) => {
        const Icon = sensor.icon;

        return (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-sm">
                  {sensor.title}
                </p>

                <h2 className={`text-2xl font-bold mt-2 ${sensor.color}`}>
                  {sensor.value}
                  <span className="text-base ml-1">
                    {sensor.unit}
                  </span>
                </h2>
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                <Icon className={sensor.color} size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SensorGrid;