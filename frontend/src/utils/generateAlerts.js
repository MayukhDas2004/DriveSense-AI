export default function generateAlerts(sensorData) {
  const alerts = [];

  // Engine Temperature
  if (sensorData.temperature > 100) {
    alerts.push({
      id: 1,
      type: "critical",
      title: "Engine Overheating",
      message: "Engine temperature exceeded the safe limit.",
    });
  }

  // Battery
  if (sensorData.battery < 12.1) {
    alerts.push({
      id: 2,
      type: "warning",
      title: "Low Battery Voltage",
      message: "Battery voltage is below the recommended threshold.",
    });
  }

  // Fuel
  if (sensorData.fuel < 20) {
    alerts.push({
      id: 3,
      type: "warning",
      title: "Low Fuel Level",
      message: "Fuel level is running low. Please refuel soon.",
    });
  }

  // Tire Pressure
  if (sensorData.tirePressure < 31) {
    alerts.push({
      id: 4,
      type: "warning",
      title: "Low Tire Pressure",
      message: "One or more tires require air pressure inspection.",
    });
  }

  if (alerts.length === 0) {
    alerts.push({
      id: 5,
      type: "success",
      title: "Vehicle Healthy",
      message: "All monitored systems are operating normally.",
    });
  }

  return alerts;
}