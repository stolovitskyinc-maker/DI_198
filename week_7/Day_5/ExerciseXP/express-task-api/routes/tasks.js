const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.join(__dirname, '../tasks.json');

// Helper functions for safe file operations
async function readTasks() {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Database read failure: ' + error.message);
    }
}

async function writeTasks(tasks) {
    try {
        await fs.writeFile(DATA_PATH, JSON.stringify(tasks, null, 2), 'utf8');
    } catch (error) {
        throw new Error('Database write failure: ' + error.message);
    }
}

// Validation Middleware
function validateTask(req, res, next) {
    const { title, description } = req.body;
    
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
    }
    if (description !== undefined && typeof description !== 'string') {
        return res.status(400).json({ error: 'Description must be a string.' });
    }
    next();
}

// GET /tasks - Fetch all tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
});

// GET /tasks/:id - Fetch task by ID
router.get('/:id', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(t => t.id === req.params.id);
        
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        next(error);
    }
});

// POST /tasks - Create a task
router.post('/', validateTask, async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const { title, description } = req.body;
        
        const newTask = {
            id: Date.now().toString(), // Simple, unique string ID
            title: title.trim(),
            description: description ? description.trim() : '',
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
});

// PUT /tasks/:id - Update a task
router.put('/:id', validateTask, async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === req.params.id);
        
        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }
        
        const { title, description, completed } = req.body;
        
        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: title.trim(),
            description: description !== undefined ? description.trim() : tasks[taskIndex].description,
            completed: typeof completed === 'boolean' ? completed : tasks[taskIndex].completed
        };
        
        await writeTasks(tasks);
        res.json(tasks[taskIndex]);
    } catch (error) {
        next(error);
    }
});

// DELETE /tasks/:id - Delete a task
router.delete('/:id', async (req, res, next) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(t => t.id === req.params.id);
        
        if (taskIndex === -1) {
            return res.status(404).json({ error: 'Task not found' });
        }
        
        tasks.splice(taskIndex, 1);
        await writeTasks(tasks);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        next(error);
    }
});

module.exports = router;
