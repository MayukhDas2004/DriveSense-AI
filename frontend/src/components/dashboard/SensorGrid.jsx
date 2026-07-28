import {
  Gauge,
  GaugeCircle,
  Fuel,
  CircleDot,
  Activity,
  Thermometer,
} from "lucide-react";

function SensorGrid({ sensorData }) {
  const sensors = [
    {
      title: "Engine Temp",
      value:
        sensorData?.engineTemperature !== undefined
          ? sensorData.engineTemperature
          : "N/A",
      unit: "°C",
      icon: Thermometer,
      color: "text-orange-400",
    },
    {
      title: "Speed",
      value:
        sensorData?.speed !== undefined
          ? sensorData.speed
          : "N/A",
      unit: "km/h",
      icon: GaugeCircle,
      color: "text-green-400",
    },
    {
      title: "Battery",
      value:
        sensorData?.batteryVoltage !== undefined
          ? sensorData.batteryVoltage
          : "N/A",
      unit: "V",
      icon: Gauge,
      color: "text-cyan-400",
    },
    {
      title: "Tire Pressure",
      value:
        sensorData?.tirePressure !== undefined
          ? sensorData.tirePressure
          : "N/A",
      unit: "PSI",
      icon: CircleDot,
      color: "text-purple-400",
    },
    {
      title: "Engine Vibration",
      value:
        sensorData?.vibration !== undefined
          ? sensorData.vibration
          : "N/A",
      unit: "g",
      icon: Activity,
      color: "text-pink-400",
    },
    {
      title: "Oil Pressure",
      value:
        sensorData?.oilPressure !== undefined
          ? sensorData.oilPressure
          : "N/A",
      unit: "PSI",
      icon: Fuel,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {sensors.map((sensor) => {
        const Icon = sensor.icon;

        return (
          <div
            key={sensor.title}
            className="bg-slate-900 rounded-2xl p-5 border border-slate-800 hover:border-cyan-500 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-slate-400 text-sm">
                  {sensor.title}
                </p>

                <h2 className={`text-2xl font-bold mt-2 ${sensor.color}`}>
                  {sensor.value !== "N/A" && typeof sensor.value === "number"
                    ? sensor.value.toFixed(2)
                    : sensor.value}

                  {sensor.value !== "N/A" && (
                    <span className="text-base ml-1">
                      {sensor.unit}
                    </span>
                  )}
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