const mongoose = require("mongoose");

const URI =
  "mongodb+srv://buvanVarun:buvanvarun@cluster0-8ntjf.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log("db has connected...!");
};
module.exports = connectDB;
