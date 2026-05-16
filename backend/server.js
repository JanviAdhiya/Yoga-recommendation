const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

//dns
const dns = require('dns');
dns.setServers(["1.1.1.1", "8.8.8.8"]);


//database
require("dotenv").config()

const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const poseRoutes = require("./routes/poseRoutes")
const flowRoutes = require("./routes/flowRoutes");
const sessionRoutes = require("./routes/sessionRoutes");


connectDB()

app.get("/", (req, res) => {
    res.send("YogicFlow API Running")
})
// routes
app.use("/api/auth", authRoutes);
app.use("/api/poses", poseRoutes);
app.use("/api/flow", flowRoutes);
app.use("/api/session", sessionRoutes);


app.get("/", (req, res) => {
    res.send("YogicFlow API Running")
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})