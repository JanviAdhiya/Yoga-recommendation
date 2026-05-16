const Pose = require("../models/YogaPose")

// GET ALL POSES
exports.getAllPoses = async (req, res) => {

    try {

        const poses = await Pose.find()

        res.json(poses)

    }

    catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}



// GET SINGLE POSE
exports.getPoseById = async (req, res) => {

    try {

        const pose = await Pose.findById(req.params.id)

        if (!pose) {
            return res.status(404).json({
                message: "Pose not found"
            })
        }

        res.json(pose)

    }

    catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}



// SEARCH POSE
exports.searchPose = async (req, res) => {

    try {

        const keyword = req.query.name

        const poses = await Pose.find({
            name: { $regex: keyword, $options: "i" }
        })

        res.json(poses)

    }

    catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}



// ADD POSE (ADMIN / DEVELOPMENT)
exports.addPose = async (req, res) => {

    try {

        const pose = await Pose.create(req.body)

        res.status(201).json(pose)

    }

    catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}