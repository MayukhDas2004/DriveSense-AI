const express = require("express");
const router = express.Router();

const {
  getAllMaintenance,
  createMaintenance,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
} = require("../controllers/maintenanceController");

// Create Maintenance Record
router.post("/", createMaintenance);

// Get All Maintenance Records
router.get("/", getAllMaintenance);

// Get Single Maintenance Record
router.get("/:id", getMaintenanceById);

// Update Maintenance Record
router.put("/:id", updateMaintenance);

// Delete Maintenance Record
router.delete("/:id", deleteMaintenance);

module.exports = router;