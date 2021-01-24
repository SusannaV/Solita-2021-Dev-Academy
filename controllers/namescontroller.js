const namesRouter = require("express").Router();
const Name = require("../models/name");

namesRouter.get("/", (req, res) => {
  Name.find({}).then((name) => {
    res.json(name);
  });
});

module.exports = namesRouter;
