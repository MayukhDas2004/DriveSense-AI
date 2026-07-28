const calculateHealthScore = (sensor) => {
    let score = 100;

    // Engine Temperature
    if (sensor.engineTemperature > 120) score -= 40;
    else if (sensor.engineTemperature > 110) score -= 30;
    else if (sensor.engineTemperature > 100) score -= 20;
    else if (sensor.engineTemperature > 90) score -= 10;

    // Battery Voltage
    if (sensor.batteryVoltage < 10.5) score -= 30;
    else if (sensor.batteryVoltage < 11.5) score -= 20;
    else if (sensor.batteryVoltage < 12.2) score -= 10;
    
    // Oil Pressure
    if (sensor.oilPressure < 15) score -= 30;
    else if (sensor.oilPressure < 25) score -= 20;
    else if (sensor.oilPressure < 35) score -= 10;

    // Tire Pressure
    if (sensor.tirePressure < 20) score -= 30;
    else if (sensor.tirePressure < 25) score -= 20;
    else if (sensor.tirePressure < 30) score -= 10;

    // Engine Vibration
    if (sensor.vibration > 6) score -= 30;
    else if (sensor.vibration > 4) score -= 20;
    else if (sensor.vibration > 2) score -= 10;

    // Speed (optional penalty)
    if (sensor.speed > 160) score -= 20;
    else if (sensor.speed > 140) score -= 15;
    else if (sensor.speed > 120) score -= 10;

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