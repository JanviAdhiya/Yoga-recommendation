const YogaPose = require("../models/YogaPose");

// Get yoga flow by goal

exports.getFlowByGoal = async (req, res) => {

try {

const goal = req.params.goal;

const poses = await YogaPose.find({ goal: goal }).limit(20);

if(!poses){
return res.status(404).json({message:"No poses found"});
}

res.json({
goal: goal,
total: poses.length,
flow: poses
});

}

catch(error){
res.status(500).json({message:error.message});
}

};