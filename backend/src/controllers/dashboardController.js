const Vehicle = require("../models/Vehicle");
const Alert = require("../models/Alert");
const Prediction = require("../models/Prediction");
const SensorData = require("../models/SensorData");

const getDashboardStats = async (req, res) => {
    try {
        const totalVehicles = await Vehicle.countDocuments();

        const healthyVehicles = await Vehicle.countDocuments({
            status: "Healthy"
        });

        const warningVehicles = await Vehicle.countDocuments({
            status: "Warning"
        });

        const criticalVehicles = await Vehicle.countDocuments({
            status: "Critical"
        });

        const totalAlerts = await Alert.countDocuments({
            status: "Active"
        });

        const latestPrediction = await Prediction.findOne()
            .sort({ createdAt: -1 });

        const latestSensorData = await SensorData.findOne()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: {
                totalVehicles,
                healthyVehicles,
                warningVehicles,
                criticalVehicles,
                totalAlerts,
                latestPrediction,
                latestSensorData
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getDashboardStats
};