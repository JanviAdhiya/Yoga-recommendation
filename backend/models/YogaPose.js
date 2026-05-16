const mongoose = require("mongoose");

const poseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    image: {
        type: String
    },

    description: {
        type: String
    },

    steps: [
        {
            type: String
        }
    ],

    benefits: [
        {
            type: String
        }
    ],

    difficulty: {
        type: String,
        enum: ["beginner", "intermediate", "expert"],
        default: "beginner"
    },

    duration: {
        type: Number
    },

    goal: {
        type: String,
        enum: ["weightloss",
            "flexibility",
            "strength",
            "balance",
            "fitness",
            "posture",
            "backpain",
            "stress",
            "sleep",
            "mindfulness",
            "energy",
            "focus"]
    }

});

module.exports = mongoose.model("Pose", poseSchema);

