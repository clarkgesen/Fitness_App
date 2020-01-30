const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3800;

const db = require("./Develop/models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/Develop/public'));
console.log((__dirname + '/Develop/public'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


app.get("/", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '../Fitness_App/Develop/public', 'index.html'));
    
});

app.get("/exercise", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '../Fitness_App/Develop/public', 'exercise.html'));
    
});

app.get("/stats", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '../Fitness_App/Develop/public', 'stats.html'));
});




// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});