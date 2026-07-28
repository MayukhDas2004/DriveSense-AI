import { useState } from "react";
import axios from "axios";

function SensorSimulator() {
  const [sensorData, setSensorData] = useState({
    vehicleId: "V001",
    engineTemperature: 90,
    rpm: 1500,
    speed: 60,
    batteryVoltage: 12.6,
    fuelLevel: 70,
    oilPressure: 45,
    tirePressure: 32,
    brakeWear: 10,
    vibration: 1.5,
  });

  const handleChange = (e) => {
    setSensorData({
      ...sensorData,
      [e.target.name]: e.target.value,
    });
  };

  const sendSensorData = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/sensors",
      sensorData
    );

    alert("Sensor data sent successfully!");
    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert("Failed to send sensor data.");
  }
};

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Sensor Simulator
      </h1>

      <div className="grid grid-cols-2 gap-4">

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="engineTemperature"
          type="number"
          value={sensorData.engineTemperature}
          onChange={handleChange}
          placeholder="Engine Temperature"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="rpm"
          type="number"
          value={sensorData.rpm}
          onChange={handleChange}
          placeholder="RPM"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="speed"
          type="number"
          value={sensorData.speed}
          onChange={handleChange}
          placeholder="Speed"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="batteryVoltage"
          type="number"
          step="0.1"
          value={sensorData.batteryVoltage}
          onChange={handleChange}
          placeholder="Battery Voltage"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="fuelLevel"
          type="number"
          value={sensorData.fuelLevel}
          onChange={handleChange}
          placeholder="Fuel Level"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="oilPressure"
          type="number"
          value={sensorData.oilPressure}
          onChange={handleChange}
          placeholder="Oil Pressure"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="tirePressure"
          type="number"
          value={sensorData.tirePressure}
          onChange={handleChange}
          placeholder="Tire Pressure"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="brakeWear"
          type="number"
          value={sensorData.brakeWear}
          onChange={handleChange}
          placeholder="Brake Wear"
        />

        <input
          className="p-3 rounded bg-slate-800 text-white"
          name="vibration"
          type="number"
          step="0.1"
          value={sensorData.vibration}
          onChange={handleChange}
          placeholder="Vibration"
        />

      </div>

      <button
     onClick={sendSensorData}
     className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg"
     >
     Send Sensor Data
     </button>
    </div>
  );
}

export default SensorSimulator;