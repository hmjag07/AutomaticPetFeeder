const Feeder = require('../models/Feeder');

exports.getStatus = async (req, res) => {
  const feeders = await Feeder.find({ userId: req.user.id });
  res.json(feeders);
};

