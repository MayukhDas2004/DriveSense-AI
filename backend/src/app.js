const express = require("express");
const cors = require("cors");
const sensorRoutes = require("./routes/sensorRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const alertRoutes = require("./routes/alertRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/predictions", predictionRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/maintenance", maintenanceRoutes);

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "DriveSense AI Backend Running 🚗"
    });
});

module.exports = app;