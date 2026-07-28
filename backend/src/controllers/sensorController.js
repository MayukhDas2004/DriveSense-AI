const SensorData = require("../models/SensorData");
const Alert = require("../models/Alert");
const Vehicle = require("../models/Vehicle");
const Prediction = require("../models/Prediction");

const {
    calculateHealthScore,
    getVehicleStatus
} = require("../services/healthService");

const Maintenance = require("../models/Maintenance");

const {
    getMaintenanceRecommendations
} = require("../services/maintenanceService");


async function createAlertIfNotExists(
    vehicleId,
    alertType,
    severity,
    message
) {
    const existingAlert = await Alert.findOne({
        vehicleId: vehicleId,
        alertType: alertType,
        status: "Active"
    });

    //console.log("Checking:", vehicleId, alertType);

    if (existingAlert) {
        return;
    }

    await Alert.create({
        vehicleId,
        alertType,
        severity,
        message
    });
}

async function createMaintenanceIfNotExists(
    vehicleId,
    recommendation,
    priority
) {
    const existing = await Maintenance.findOne({
        vehicleId,
        recommendation,
        completed: false
    });

    if (existing) {
        return;
    }

    await Maintenance.create({
        vehicleId,
        recommendation,
        priority
    });
}


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
                vehicleId: req.body.vehicleId,
                ownerName: "Demo Owner",
                model: "DriveSense Demo",
                manufacturer: "DriveSense AI",
                year: 2025,
                registrationNumber: req.body.vehicleId,

                healthScore,
                status
            },
            {
                returnDocument: "after",
                upsert: true,
                runValidators: true
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
            await createAlertIfNotExists(
                req.body.vehicleId,
                "Engine Temperature",
                "Critical",
                "Engine overheating detected"
            );
        }

        if (req.body.batteryVoltage < 11.5) {
            await createAlertIfNotExists(
                req.body.vehicleId,
                "Battery",
                "High",
                "Battery voltage is too low"
            );
        }

        if (req.body.oilPressure < 25) {
            await createAlertIfNotExists(
                req.body.vehicleId,
                "Oil Pressure",
                "High",
                "Oil pressure is too low"
            );
        }

        if (req.body.tirePressure < 30) {
            await createAlertIfNotExists(
                req.body.vehicleId,
                "Tire Pressure",
                "Medium",
                "Tire pressure is below safe level"
            );
        }

        if (req.body.vibration > 4) {
            await createAlertIfNotExists(
                req.body.vehicleId,
                "Engine Vibration",
                "High",
                "Abnormal engine vibration detected"
            );
        }

        // Generate Maintenance Recommendations

        const recommendations = getMaintenanceRecommendations(req.body);

        for (const item of recommendations) {
            await createMaintenanceIfNotExists(
                req.body.vehicleId,
                item.recommendation,
                item.priority
            );
        }

        await Prediction.create({
            vehicleId: req.body.vehicleId,
            predictedFault: status === "Healthy" ? "Normal" : "Potential Failure",
            confidence: status === "Healthy" ? 95 : 85,
            status,
            healthScore,
            recommendedAction:
                status === "Healthy"
                    ? "No action required"
                    : "Inspect vehicle immediately"
        });

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