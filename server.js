const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3800;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout")

app.use(express.static(__dirname + '/public'));
console.log((__dirname + '/public'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });


app.get("/", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
    
});

app.get("/exercise", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '/public', 'exercise.html'));
    
});

app.get("/stats", (req, res) => {
    console.log(res);
    res.sendFile(path.join(__dirname, '/public', 'stats.html'));
});




// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});