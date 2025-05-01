const Feeder = require('../models/Feeder');
const db = require('../config/firebase');

exports.getStatus = async (req, res) => {
  const feeders = await Feeder.find({ userId: req.user.id });

  // Sync to Firebase
  feeders.forEach(feeder => {
    const feederData = {
      name: feeder.name,
      status: feeder.status,
      lastFed: feeder.lastFed,
      location: feeder.location,
      foodLevel: feeder.foodLevel,
      needsRefill: feeder.foodLevel < 25
    };
    db.ref('feeders/' + feeder._id).set(feederData);
  });

  res.json(feeders);
};

// Optional: endpoint to update feeder values manually
exports.updateFeeder = async (req, res) => {
  const { id } = req.params;
  const { foodLevel, status, lastFed, location } = req.body;

  const feeder = await Feeder.findByIdAndUpdate(
    id,
    { foodLevel, status, lastFed, location },
    { new: true }
  );

  if (feeder) {
    const data = {
      name: feeder.name,
      status: feeder.status,
      lastFed: feeder.lastFed,
      location: feeder.location,
      foodLevel: feeder.foodLevel,
      needsRefill: feeder.foodLevel < 25
    };
    db.ref('feeders/' + feeder._id).set(data);
    res.json({ msg: 'Feeder updated and synced', feeder });
  } else {
    res.status(404).json({ msg: 'Feeder not found' });
  }
};
