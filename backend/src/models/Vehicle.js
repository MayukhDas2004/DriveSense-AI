const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
      unique: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    manufacturer: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },

    healthScore: {
      type: Number,
      default: 100,
    },

    status: {
      type: String,
      enum: ["Healthy", "Warning", "Critical"],
      default: "Healthy",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicle", vehicleSchema);