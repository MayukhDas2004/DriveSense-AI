const axios = require("axios");
const Prediction = require("../models/Prediction");

// Create Prediction
const createPrediction = async (req, res) => {
    try {
        // Call FastAPI AI service
        const aiResponse = await axios.post(
            `${process.env.AI_SERVICE_URL}/predict`,
            req.body
        );

        const aiResult = aiResponse.data;

        // Save prediction in MongoDB
        const prediction = await Prediction.create({
            vehicleId: req.body.vehicleId || "UNKNOWN",

            predictedFault: aiResult.predicted_fault,
            confidence: aiResult.confidence,
            status: aiResult.status,
            healthScore: aiResult.health_score,
            recommendedAction: aiResult.recommended_action,
        });

        res.status(201).json({
            success: true,
            message: "Prediction generated successfully",
            data: prediction,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.response?.data || error.message,
        });
    }
};

// Get All Predictions
const getAllPredictions = async (req, res) => {
    try {

        const predictions = await Prediction.find().sort({
            createdAt: -1,
        });

        res.status(200).json({
            success: true,
            count: predictions.length,
            data: predictions,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createPrediction,
    getAllPredictions,
};