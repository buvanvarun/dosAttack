// const http = require("http");
const express = require("express");
const connectDB = require("./DB/connection");
const app = express();
app.use(express.static("./public"));

// function onRequest(req, res) {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("index.html");
//   res.end();
// }
connectDB();
app.use(
  express.json({
    extended: false
  })
);
app.use("./Api/userModel", require("./Api/user"));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Server Started"));

// http.createServer(onRequest).listen(8000);
