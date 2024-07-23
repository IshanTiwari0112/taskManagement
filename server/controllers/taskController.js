const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.createTask = async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  try {
    const newTask = new Task({ title, description, dueDate, priority, status, user: req.user.id });
    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    if (task.user.toString() !== req.user.id) return res.status(401).send('User not authorized');

    task = await Task.findByIdAndUpdate(req.params.id, { $set: { title, description, dueDate, priority, status } }, { new: true });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');

    if (task.user.toString() !== req.user.id) return res.status(401).send('User not authorized');

    await Task.findByIdAndRemove(req.params.id);
    res.send('Task removed');
  } catch (err) {
    res.status(500).send('Server error');
  }
};
