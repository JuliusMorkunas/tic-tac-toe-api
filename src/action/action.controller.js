const Action = require('./action.model');

module.exports.list = async (req, res) => {
  const actions = await Action.find();
  res.json(actions);
};

module.exports.add = async (req, res) => {
  const existingActionInSameCell = await Action.findOne({ row: req.body.row, cell: req.body.cell });
  if (existingActionInSameCell) {
    throw new Error('Action for this location already exist');
  }
  const previousAction = await Action.findOne().sort({ _id: -1 });
  if (previousAction && previousAction.player === req.body.player) {
    throw new Error('Same player cannot perform an action twice in a row');
  }
  const action = req.body.timestamp
    ? new Action(req.body)
    : new Action({ ...req.body, timestamp: +new Date() });
  await action.save();
  res.json(action);
};

module.exports.clear = async (req, res) => {
  await Action.deleteMany({});
  const actions = await Action.find();
  res.json(actions);
};
