const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
    },

    alertType: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Active", "Resolved"],
      default: "Active",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Alert", alertSchema);