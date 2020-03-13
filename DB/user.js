const mongoose = require("mongoose");
const user = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    enroll: {
        type: String
    }
});

module.exports = User = mongoose.model("user", user);