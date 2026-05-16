const express = require("express");
const router = express.Router();

const { getFlowByGoal } = require("../controllers/flowController");

router.get("/:goal", getFlowByGoal);

module.exports = router;