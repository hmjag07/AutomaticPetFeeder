const mongoose = require('mongoose');
const feederSchema = new mongoose.Schema({
  name: String,
  status: String,
  lastFed: { type: Date, default: Date.now },
  userId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Feeder', feederSchema);
