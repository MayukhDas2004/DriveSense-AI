const Prediction = require("../models/Prediction");

// Create Prediction
const createPrediction = async (req, res) => {
    try {
        const prediction = await Prediction.create(req.body);

        res.status(201).json({
            success: true,
            message: "Prediction saved successfully",
            data: prediction
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Predictions
const getAllPredictions = async (req, res) => {
    try {
        const predictions = await Prediction.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: predictions.length,
            data: predictions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createPrediction,
    getAllPredictions
};