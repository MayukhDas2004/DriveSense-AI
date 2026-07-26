const getMaintenanceRecommendations = (sensor) => {

    const recommendations = [];

    if (sensor.engineTemperature > 110) {
        recommendations.push({
            recommendation: "Inspect cooling system",
            priority: "Critical"
        });
    }

    if (sensor.batteryVoltage < 11.5) {
        recommendations.push({
            recommendation: "Replace or charge battery",
            priority: "High"
        });
    }

    if (sensor.oilPressure < 25) {
        recommendations.push({
            recommendation: "Check engine oil level",
            priority: "High"
        });
    }

    if (sensor.tirePressure < 30) {
        recommendations.push({
            recommendation: "Inflate tires",
            priority: "Medium"
        });
    }

    if (sensor.vibration > 4) {
        recommendations.push({
            recommendation: "Inspect engine mount and bearings",
            priority: "High"
        });
    }

    return recommendations;
};

module.exports = {
    getMaintenanceRecommendations
};