console.log("✅ Prediction Routes Loaded");
const express = require("express");
const router = express.Router();

const {
    createPrediction,
    getAllPredictions
} = require("../controllers/predictionController");

router.post("/", createPrediction);
router.get("/", getAllPredictions);

module.exports = router;