const namesRouter = require("express").Router();
const Name = require("../models/name");

//Endpoint for get all
namesRouter.get("/", (req, res) => {
  Name.find({}).then((name) => {
    res.json(name);
  });
});

//Endpoint for spesific name
namesRouter.get("/:nameparameter", (req, res) => {
  const nameparameter = req.params.nameparameter;
  const name = Name.find({}, { name: nameparameter })
    .then((name) => {
      if (name) {
        res.json(name);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    });
});

namesRouter.post("/", (request, response, next) => {
  const body = request.body;

  const name = new Name({
    name: body.name,
    amount: body.amount,
  });

  name
    .save()
    .then((savedName) => {
      response.json(savedName.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = namesRouter;
