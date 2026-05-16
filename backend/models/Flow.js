const mongoose = require("mongoose");

const flowSchema = new mongoose.Schema({

    goalType: {
        type: String,
        required: true,
        enum: ["weightloss", "flexibility", "stress", "fitness"]
    },

    poses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pose"
        }
    ]

});

module.exports = mongoose.model("Flow", flowSchema);