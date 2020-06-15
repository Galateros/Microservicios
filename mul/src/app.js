const express = require("express");
const Op = require("./models/op_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
	str = String("12*5").split('*')
	ans = parseFloat(str[0])*parseFloat(str[1])
  res.json({ msg: ans });
});

app.get("/api/v1/mul", async (req, res) => {
  const ops = await Op.find({});
  res.json(books);
});

app.post("/api/v1/mul", async (req, res) => {
  str = String(app.req.name).split('*')
  ans = parseFloat(str[0])*parseFloat(str[1])
  const ops = new Op({ name: ans });
  const savedOps = await ops.save();
  res.json(savedOps);
});

module.exports = app;
