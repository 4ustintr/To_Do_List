import ToDoItem from "./todoitem";
import { PlusCircleOutlined } from '@ant-design/icons';
import './todolist.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTaskForm from "./addtask";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [addForm, setAddForm] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [editTaskForm, setEditTaskForm] = useState(false);

    const displayTasks = () => {
        axios.get('http://localhost:3001/api/task')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('error while get data', error);
            });
    };

    const addTask = (taskData) => {
        //console.log("dữ liệu gửi đi", taskData)
        axios.post('http://localhost:3001/api/task', taskData)
            .then(() => {
                displayTasks();
                setAddForm(false);
            })
            .catch(error => {
                console.error('error while post data', error.response.data);
                setAddForm(false);
            });
    };

    const updateTask = (taskId, newData) => {
        axios.put(`http://localhost:3001/api/task/${taskId}`, newData)
            .then(() => {
                displayTasks();
                setEditTaskForm(false);
            })
            .catch(error => {
                console.error('error while put data', error.response.data);
                setEditTask(null);
            });
    };

    const deleteTask = (taskId) => {
        axios.delete(`http://localhost:3001/api/task/${taskId}`)
            .then(() => {
                displayTasks();
            })
            .catch(error => {
                console.error('error while delete data', error);
            });
    };

    const completedTask = (taskId, newComplete) => {
        // console.log("completed", taskId, newComplete)
        axios.put(`http://localhost:3001/api/task/completedTodo/${taskId}`, { completed: newComplete })
            .then(() => {
                displayTasks();
            })
            .catch(error => {
                console.error('error while click completed data', error.response.data);
            });
    };

    const handleCancel = () => {
        setAddForm(false);
        setEditTaskForm(false);
    };
    const editTasks = (task) => {
        setEditTask(task);
        setEditTaskForm(true);
    };

    useEffect(() => {
        displayTasks();
    }, []);

    return (
        <div className="ToDoList">
            <h1 style={{ textAlign: 'center' }}>Todo-List 🎯</h1>
            <div>
                {tasks.map((task) => (
                    <ToDoItem
                        taskId={task.taskId}
                        title={task.title}
                        due_date={task.due_date}
                        completed={task.completed}
                        onEdit={() => editTasks(task)}
                        onDelete={deleteTask}
                        onCompletedTask={completedTask}
                    />
                ))}
            </div>
            {addForm && <AddTaskForm onAddTask={addTask} onCancel={handleCancel} />}
            {editTaskForm && (
                <AddTaskForm
                    onAddTask={(newdData) => updateTask(editTask.taskId, newdData)}
                    onCancel={handleCancel}
                    initialData={editTask}
                />
            )}
            <div style={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => setAddForm(true)}>
                <PlusCircleOutlined style={{ fontSize: "20px", color: 'red' }} /> Add Task
            </div>
        </div>
    );
};

export default TodoList;