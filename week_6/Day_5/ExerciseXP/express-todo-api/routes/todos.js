const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [
    { id: 1, task: "Learn Express.js", completed: false }
];

// 1. Get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// 2. Add a new to-do item
router.post('/', (req, res) => {
    const { task } = req.body;
    
    if (!task) {
        return res.status(400).json({ error: "Task field is required" });
    }

    const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        task: task,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// 3. Update a to-do item by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { task, completed } = req.body;
    
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "To-do item not found" });
    }

    if (task !== undefined) todo.task = task;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

// 4. Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ error: "To-do item not found" });
    }

    const deletedTodo = todos.splice(todoIndex, 1);
    res.json({ message: "Item deleted successfully", item: deletedTodo[0] });
});

// Export the router module
module.exports = router;
