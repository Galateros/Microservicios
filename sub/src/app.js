const express = require("express");
const Op = require("./models/op_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
	str = String("12-5").split('-')
	ans = parseFloat(str[0])-parseFloat(str[1])
  res.json({ msg: ans });
});

app.get("/api/v1/sub", async (req, res) => {
  const ops = await Op.find({});
  res.json(books);
});

app.post("/api/v1/sub", async (req, res) => {
  const ops = new Op({ name: req.body.name });
  const savedBook = await ops.save();
  res.json(savedBook);
});

module.exports = app;
