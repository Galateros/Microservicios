const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpSchema = new Schema({
  name: String,
  type: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Operation", OpSchema);
