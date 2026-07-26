import { useEffect, useState } from "react";

function randomChange(value, min, max, step = 1) {
  const change =
    (Math.random() > 0.5 ? step : -step);

  let newValue = value + change;

  if (newValue > max) newValue = max;
  if (newValue < min) newValue = min;

  return Number(newValue.toFixed(1));
}

export default function useSensorData() {
  const [data, setData] = useState({
    temperature: 92,
    battery: 12.6,
    rpm: 2400,
    speed: 68,
    fuel: 74,
    tirePressure: 34,
    oilTemp: 95,
    health: 89,
    updated: new Date(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) => ({
        temperature: randomChange(prev.temperature, 85, 110),
        battery: randomChange(prev.battery, 11.8, 13.2, 0.1),
        rpm: randomChange(prev.rpm, 800, 5000, 100),
        speed: randomChange(prev.speed, 40, 120, 2),
        fuel: randomChange(prev.fuel, 15, 100, 0.5),
        tirePressure: randomChange(prev.tirePressure, 30, 36, 0.2),
        oilTemp: randomChange(prev.oilTemp, 85, 110),
        health: randomChange(prev.health, 82, 100, 0.5),
        updated: new Date(),
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return data;
}