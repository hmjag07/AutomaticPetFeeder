import mongoose from 'mongoose';

const feederSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number
  },
  foodLevel: Number, // in percentage
  lastFed: Date,
  needsRefill: Boolean
});

export default mongoose.model('Feeder', feederSchema);
