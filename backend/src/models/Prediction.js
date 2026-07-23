const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
    },

    component: {
      type: String,
      required: true,
    },

    prediction: {
      type: String,
      required: true,
    },

    confidence: {
      type: Number,
      required: true,
    },

    recommendedAction: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prediction", predictionSchema);