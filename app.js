const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
// const passport = require("passport");
// passport.authenticate();
const apiRouter = require("./routes/routes");
require("dotenv").config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/api", apiRouter);

server.listen(PORT, () => console.log("Listening on port:", PORT));
