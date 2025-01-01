const db = require('../database/db');

const TaskModel = {
  getAllTasks: (callback) => {
    db.all('SELECT * FROM tasks', [], callback);
  },

  getTaskById: (id, callback) => {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
  },

  createTask: (task, callback) => {
    const { title, description, status } = task;
    db.run(
      'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)',
      [title, description, status || 'pending'],
      callback
    );
  },

  updateTask: (id, task, callback) => {
    const { title, description, status } = task;
    db.run(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?',
      [title, description, status, id],
      callback
    );
  },

  deleteTask: (id, callback) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
  }
};

module.exports = TaskModel;
