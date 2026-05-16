const Session = require("../models/Session");


// Start Session

exports.startSession = async (req, res) => {

    try {

        const { userId, goal } = req.body;

        const session = new Session({
            user: userId,
            goal: goal
        });

        await session.save();

        res.status(201).json(session);

    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }

};



// Complete Session

exports.completeSession = async (req, res) => {

    try {

        const { sessionId, duration, posesCompleted } = req.body;

        const session = await Session.findById(sessionId);

        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        session.duration = duration;
        session.posesCompleted = posesCompleted;

        await session.save();

        res.json({
            message: "Session completed",
            session
        });

    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }

};



// Get Session History

exports.getHistory = async (req, res) => {

    try {

        const userId = req.params.userId;

        const sessions = await Session.find({ user: userId }).sort({ date: -1 });

        res.json(sessions);

    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }

};