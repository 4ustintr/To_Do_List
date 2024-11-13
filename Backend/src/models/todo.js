const db = require('../configs/database');

const Todo = {
    getAll: (callback) => {
        db.query('SELECT * FROM todolist', callback);
    },
    create: (title, due_date, callback) => {
        db.query('INSERT INTO todolist (title, due_date) VALUES (?, ?)', [title, due_date], callback);
    },
    update: (taskId, title, due_date, completed, callback) => {
        db.query('UPDATE todolist SET title = ?, due_date = ?, completed = ? WHERE taskId = ?', [title, due_date, completed, taskId], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM todolist WHERE taskId = ?', [id], callback);
    },
    completed: (taskId, completed, callback) => {
        db.query('UPDATE todolist SET completed = ? WHERE taskId = ?', [completed, taskId], callback);
    }
};

module.exports = Todo;