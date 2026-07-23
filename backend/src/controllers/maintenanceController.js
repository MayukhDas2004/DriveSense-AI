const Maintenance = require("../models/Maintenance");

// Get All Maintenance Records
const getAllMaintenance = async (req, res) => {
    try {
        const records = await Maintenance.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: records.length,
            data: records
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllMaintenance
};