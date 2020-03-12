const express = require('express');
const mongoose = require('mongoose');
const user = require('../DB/user');
const route = express.Router();

route.post('/', async (req, res) => {
    const {
        firstName,
        lastName
    } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new user(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;