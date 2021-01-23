const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("build"));

let names = [
  {
    name: "Ville",
    amount: 24,
  },
  {
    name: "Anna",
    amount: 6,
  },
  {
    name: "Antti",
    amount: 22,
  },
  {
    name: "Sanna",
    amount: 5,
  },
  {
    name: "Mikko",
    amount: 19,
  },
  {
    name: "Minna",
    amount: 5,
  },
  {
    name: "Timo",
    amount: 18,
  },
  {
    name: "Satu",
    amount: 5,
  },
  {
    name: "Tuomas",
    amount: 16,
  },
  {
    name: "Tiina",
    amount: 5,
  },
  {
    name: "Tero",
    amount: 15,
  },
  {
    name: "Kati",
    amount: 5,
  },
  {
    name: "Sami",
    amount: 15,
  },
  {
    name: "Henna",
    amount: 4,
  },
  {
    name: "Mika",
    amount: 12,
  },
  {
    name: "Liisa",
    amount: 4,
  },
  {
    name: "Janne",
    amount: 12,
  },
  {
    name: "Paula",
    amount: 4,
  },
  {
    name: "Petri",
    amount: 11,
  },
  {
    name: "Suvi",
    amount: 4,
  },
];

app.get("/api/names", (req, res) => {
  res.json(names);
});

app.get("/api/names/:nameparameter", (request, response) => {
  const nameparameter = request.params.nameparameter;
  const name = names.find(
    (onename) => onename.name.toLowerCase() === nameparameter.toLowerCase()
  );
  if (name) {
    response.json(name);
  } else {
    response.status(404).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
