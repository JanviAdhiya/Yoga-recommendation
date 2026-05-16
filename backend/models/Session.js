// const mongoose = require("mongoose");

// const sessionSchema = new mongoose.Schema({

//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//     },

//     posesCompleted: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Pose"
//         }
//     ],

//     totalDuration: {
//         type: Number
//     },

//     date: {
//         type: Date,
//         default: Date.now
//     }

// });

// module.exports = mongoose.model("Session", sessionSchema);
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    goal: {
        type: String
    },

    posesCompleted: {
        type: Number,
        default: 0
    },

    duration: {
        type: Number
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Session", sessionSchema);