const mongoose = require("mongoose");

const URI =
  "mongodb+srv://buvanVarun:buvanvarun@cluster0-8ntjf.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).catch(error => handleError(error));
module.exports = connectDB;