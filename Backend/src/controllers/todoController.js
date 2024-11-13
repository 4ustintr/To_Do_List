const Todo = require('../models/todo.js');

exports.getAllTodos = (req, res) => {
    Todo.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
};

exports.createTodo = (req, res) => {
    const { title, due_date } = req.body;
    Todo.create(title, due_date, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Todo created successfully' });
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, due_date, completed } = req.body;
    Todo.update(id, title, due_date, completed, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Todo updated successfully' });
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    Todo.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Todo delete successfully' });
    });
};

exports.completedTodo = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    Todo.completed(id, completed, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ message: 'Todo completed successfully' });
    });
};
