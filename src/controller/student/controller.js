const model = require('../../model/student');

const Controller = {};

Controller.get = (req, res) =>
  model.find({}, {'__v': 0})
  .then((students) => res.json({ students }));

Controller.save = async (req, res) => {
  const student = req.body;
  console.log(student);
  const created = await model.create(student);
  res.json({created});
}

module.exports = Controller;