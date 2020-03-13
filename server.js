const express = require("express");
const connectDB = require("./DB/connection");
const path = require("path");
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(
    express.json({
        extended: false
    })
);
app.post("/post-feedback", function (req, res) {
    connectDB.then(function (db) {
        delete req.body._id;
        db.collection("data").create(req.body).catch(error => handleError(error));
    });
    res.send("Data received:\n" + JSON.stringify(req.body));
    res.end();
});

app.use("./Api/userModel", require("./Api/user"));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Server Started"));