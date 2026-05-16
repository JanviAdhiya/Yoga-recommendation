const express = require("express")

const router = express.Router()

const {
    getAllPoses,
    getPoseById,
    searchPose,
    addPose
} = require("../controllers/poseController")

// GET ALL POSES
router.get("/", getAllPoses)

// GET SINGLE POSE
router.get("/:id", getPoseById)

// SEARCH POSE
router.get("/search/pose", searchPose)

// ADD POSE
router.post("/add", addPose)

module.exports = router