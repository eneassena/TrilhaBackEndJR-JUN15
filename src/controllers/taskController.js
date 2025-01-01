const TaskModel = require('../models/taskModel');

const TaskController = {
  getAllTasks: (req, res) => {
    TaskModel.getAllTasks((err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  },

  getTaskById: (req, res) => {
    const { id } = req.params;
    TaskModel.getTaskById(id, (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ message: 'Task not found' });
      res.json(row);
    });
  },

  createTask: (req, res) => {
    TaskModel.createTask(req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Task created successfully' });
    });
  },

  updateTask: (req, res) => {
    const { id } = req.params;
    TaskModel.updateTask(id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Task updated successfully' });
    });
  },

  deleteTask: (req, res) => {
    const { id } = req.params;
    TaskModel.deleteTask(id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Task deleted successfully' });
    });
  }
};

module.exports = TaskController;
