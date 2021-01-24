require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const namesRouter = require("./controllers/namescontroller");

const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(express.static("build"));
app.use(express.json());
app.use("/api/names", namesRouter);

module.exports = app;
