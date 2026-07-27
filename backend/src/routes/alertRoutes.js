const express = require("express");
const router = express.Router();

const {
  createAlert,
  getAllAlerts,
  getAlertById,
  resolveAlert,
  deleteAlert,
  getAlertsByVehicle,
} = require("../controllers/alertController");

// Create Alert
router.post("/", createAlert);

// Get All Alerts
router.get("/", getAllAlerts);

// Get Alerts by Vehicle
router.get("/vehicle/:vehicleId", getAlertsByVehicle);

// Get Single Alert
router.get("/:id", getAlertById);

// Resolve Alert
router.patch("/:id/resolve", resolveAlert);

// Delete Alert
router.delete("/:id", deleteAlert);

module.exports = router;