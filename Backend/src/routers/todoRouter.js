const express = require('express');
const Router = express.Router();
const todoController = require('../controllers/todoController');

Router.get('/task', todoController.getAllTodos);
Router.post('/task', todoController.createTodo);
Router.put('/task/:id', todoController.updateTodo);
Router.delete('/task/:id', todoController.deleteTodo);
Router.put('/task/completedTodo/:id', todoController.completedTodo);

module.exports = Router;