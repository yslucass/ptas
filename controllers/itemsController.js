const items = [];

exports.getItems = (req, res) => {
  res.json(items);
};

exports.createItem = (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
};