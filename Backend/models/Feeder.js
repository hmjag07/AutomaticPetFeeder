const mongoose = require('mongoose');
const feederSchema = new mongoose.Schema({
  name: String,
  status: String,
  lastFed: Date,
  foodLevel: Number,
  location: {
    lat: Number,
    lng: Number
  },
  userId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Feeder', feederSchema);
