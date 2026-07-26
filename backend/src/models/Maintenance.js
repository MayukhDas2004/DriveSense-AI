const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
{
    vehicleId: {
        type: String,
        required: true
    },

    recommendation: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        enum: ["Low", "Medium", "High", "Critical"],
        default: "Medium"
    },

    completed: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);