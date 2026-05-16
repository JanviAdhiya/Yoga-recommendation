const express = require("express");
const router = express.Router();

const {
startSession,
completeSession,
getHistory
} = require("../controllers/sessionController");


router.post("/start", startSession);

router.post("/complete", completeSession);

router.get("/history/:userId", getHistory);

module.exports = router;