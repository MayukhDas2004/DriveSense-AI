const express = require("express");
const router = express.Router();

const {
    getAllMaintenance
} = require("../controllers/maintenanceController");

router.get("/", getAllMaintenance);

module.exports = router;