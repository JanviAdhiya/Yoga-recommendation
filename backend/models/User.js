const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    goal: {
        type: String,
        enum: ["weightloss", "flexibility", "stress", "fitness"],
        default: "fitness"
    },

    streak: {
        type: Number,
        default: 0
    },

    totalSessions: {
        type: Number,
        default: 0
    },

    favorites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pose"
        }
    ]
},
{
    timestamps: true
}
);

module.exports = mongoose.model("User", userSchema);