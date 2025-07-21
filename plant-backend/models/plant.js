const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  species: String,
  lastWatered: Date,
  nextWatering: Date,
  sunlight: String,
});

module.exports = mongoose.model('Plant', plantSchema);
