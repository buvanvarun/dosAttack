const express = require("express");
const mongodb = require("mongodb");
const path = require("path");
const bodyParser = require("body-parser");
// const mongoose = require('mongoose');
const app = express();
const URI =
  "mongodb+srv://buvanVarun:buvanvarun@cluster0-8ntjf.mongodb.net/test?retryWrites=true&w=majority"
let db
  mongodb.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if(err)
        console.log("An error occured while connecting", + err)
    else { 
        db = client.db('Assignment')
        app.listen(3000)
    }
})

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
    db.collection("forms").insertOne(req.body , function(err,info){

    })
    res.send("Data received:\n" + JSON.stringify(req.body));
    res.end();
});

app.use("./Api/userModel", require("./Api/user"));
