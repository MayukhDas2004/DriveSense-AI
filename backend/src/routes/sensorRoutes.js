const express = require("express");
const router = express.Router();

const {
    createSensorData,
    getAllSensorData
} = require("../controllers/sensorController");

router.post("/", createSensorData);
router.get("/", getAllSensorData);

module.exports = router;