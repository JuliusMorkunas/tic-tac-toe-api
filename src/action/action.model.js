const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
  timestamp: { type: Number },
  player: { type: String, required: true },
  row: { type: Number, required: true },
  cell: { type: Number, required: true },
});

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;
