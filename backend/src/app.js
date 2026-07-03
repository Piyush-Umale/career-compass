const express = require('express');
const jobRoutes = require("../src/routes/routes")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); /// middleware parsing means converting http data into json object

app.use("/api/jobs", jobRoutes);

app.get("/" , (req, res)=>{
    res.send("Api is running ");
});


const authRoutes =  require("../src/routes/authRoutes");

app.use("/api/auth", authRoutes);

module.exports = app;