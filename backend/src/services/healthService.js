const calculateHealthScore = (sensor) => {
    let score = 100;

    // Engine Temperature
    if (sensor.engineTemperature > 110) score -= 30;
    else if (sensor.engineTemperature > 95) score -= 10;

    // Battery Voltage
    if (sensor.batteryVoltage < 11.5) score -= 20;

    // Oil Pressure
    if (sensor.oilPressure < 25) score -= 20;

    // Tire Pressure
    if (sensor.tirePressure < 30) score -= 10;

    // Engine Vibration
    if (sensor.vibration > 4) score -= 20;
    else if (sensor.vibration > 2) score -= 10;

    // Speed (optional penalty)
    if (sensor.speed > 120) score -= 10;

    if (score < 0) score = 0;

    return score;
};

const getVehicleStatus = (score) => {
    if (score >= 80) return "Healthy";
    if (score >= 50) return "Warning";
    return "Critical";
};

module.exports = {
    calculateHealthScore,
    getVehicleStatus
};