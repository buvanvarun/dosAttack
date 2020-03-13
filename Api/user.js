const express = require("express");
const mongoose = require("mongoose");
const User = require("../DB/user");
const route = express.Router();

route.post("/", async (req, res) => {
    const {
        name,
        phone,
        enroll
    } = req.body;
    let user = {};
    user.name = name;
    user.phone = phone;
    user.enroll = enroll;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;