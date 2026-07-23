const express = require("express");
const router = express.Router();

const {
    createVehicle,
    getAllVehicles
} = require("../controllers/vehicleController");

// GET all vehicles
router.get("/", getAllVehicles);

// POST create vehicle
router.post("/", createVehicle);

module.exports = router;