import Feeder from '../models/Feeder.js';

export const getAllFeeders = async (req, res) => {
  const feeders = await Feeder.find();
  res.json(feeders);
};

export const updateFeeder = async (req, res) => {
  const { id } = req.params;
  const { foodLevel, lastFed } = req.body;

  const needsRefill = foodLevel < 25;
  const updated = await Feeder.findByIdAndUpdate(id, { foodLevel, lastFed, needsRefill }, { new: true });

  res.json(updated);
};
