const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
    },

    engineTemperature: {
      type: Number,
      required: true,
    },

    batteryVoltage: {
      type: Number,
      required: true,
    },

    oilPressure: {
      type: Number,
      required: true,
    },

    tirePressure: {
      type: Number,
      required: true,
    },

    vibration: {
      type: Number,
      required: true,
    },

    speed: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SensorData", sensorDataSchema);