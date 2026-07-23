const SensorData = require("../models/SensorData");
const Alert = require("../models/Alert");
const Vehicle = require("../models/Vehicle");

const {
    calculateHealthScore,
    getVehicleStatus
} = require("../services/healthService");

const Maintenance = require("../models/Maintenance");

const {
    getMaintenanceRecommendations
} = require("../services/maintenanceService");


// Save Sensor Data
const createSensorData = async (req, res) => {
    try {
        // Save sensor data
        const sensor = await SensorData.create(req.body);

        // Calculate health score
        const healthScore = calculateHealthScore(req.body);

        // Calculate vehicle status
        const status = getVehicleStatus(healthScore);

        // Update vehicle
        await Vehicle.findOneAndUpdate(
            { vehicleId: req.body.vehicleId },
            {
                healthScore,
                status
            }
        );

        res.status(201).json({
            success: true,
            message: "Sensor data saved successfully",
            healthScore,
            status,
            data: sensor
        });

        // Auto Generate Alerts

        if (req.body.engineTemperature > 110) {
            await Alert.create({
                vehicleId: req.body.vehicleId,
                alertType: "Engine Temperature",
                severity: "Critical",
                message: "Engine overheating detected"
            });
        }

        if (req.body.batteryVoltage < 11.5) {
            await Alert.create({
                vehicleId: req.body.vehicleId,
                alertType: "Battery",
                severity: "High",
                message: "Battery voltage is too low"
            });
        }

        if (req.body.oilPressure < 25) {
            await Alert.create({
                vehicleId: req.body.vehicleId,
                alertType: "Oil Pressure",
                severity: "High",
                message: "Oil pressure is too low"
            });
        }

        if (req.body.tirePressure < 30) {
            await Alert.create({
                vehicleId: req.body.vehicleId,
                alertType: "Tire Pressure",
                severity: "Medium",
                message: "Tire pressure is below safe level"
            });
        }

        if (req.body.vibration > 4) {
            await Alert.create({
                vehicleId: req.body.vehicleId,
                alertType: "Engine Vibration",
                severity: "High",
                message: "Abnormal engine vibration detected"
            });
        }

        // Generate Maintenance Recommendations

        const recommendations = getMaintenanceRecommendations(req.body);

        for (const item of recommendations) {
            await Maintenance.create({
                vehicleId: req.body.vehicleId,
                recommendation: item.recommendation,
                priority: item.priority
            });
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Sensor Data
const getAllSensorData = async (req, res) => {
    try {
        const sensors = await SensorData.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: sensors.length,
            data: sensors
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createSensorData,
    getAllSensorData
};