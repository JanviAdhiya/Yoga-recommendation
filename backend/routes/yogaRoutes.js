const express = require("express");
const router = express.Router();

const YogaPose = require("../models/YogaPose");


// Get poses by goal
router.get("/goal/:goal", async (req, res) => {

try {

const poses = await YogaPose.find({ goal: req.params.goal });

res.json(poses);

} catch (error) {

res.status(500).json({ message: error.message });

}

});

module.exports = router;