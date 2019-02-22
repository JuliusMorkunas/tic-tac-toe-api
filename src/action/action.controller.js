const Action = require('./action.model');

module.exports.list = async (req, res) => {
  const actions = await Action.find();
  res.json(actions);
};

module.exports.add = async (req, res) => {
  const existingActions = await Action.find({ row: req.body.row, cell: req.body.cell });
  if (!existingActions.length) {
    const action = req.body.timestamp
      ? new Action(req.body)
      : new Action({ ...req.body, timestamp: +new Date() });
    await action.save();
    res.json(action);
    return;
  }
  // TODO: Check if previous action wasn't by the same player
  throw new Error('Action for this location already exist');
};

module.exports.clear = async (req, res) => {
  await Action.deleteMany({});
  const actions = await Action.find();
  res.json(actions);
};
