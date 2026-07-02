const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'users.json');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper functions to read/write JSON file securely
async function readUsers() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Database read error');
    }
}

async function writeUsers(users) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        throw new Error('Database write error');
    }
}

// Router Implementation
const router = express.Router();

// POST /register
router.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;

    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const users = await readUsers();

        // Check if username already exists
        const userExists = users.find(u => u.username === username);
        if (userExists) {
            return res.status(400).send('error1: Username already exists.');
        }

        // Hash password and save new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: Date.now().toString(),
            name,
            lastName,
            email,
            username,
            password: hashedPassword
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).send('register: User successfully registered.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    try {
        const users = await readUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(401).send('error2: User is not registered.');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send('error2: Incorrect credentials.');
        }

        res.status(200).send('login: Successfully logged in.');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /users (Demonstration only)
router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /users/:id (Demonstration only)
router.get('/users/:id', async (req, res) => {
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === req.params.id);
        
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /users/:id (Demonstration only)
router.put('/users/:id', async (req, res) => {
    const { name, lastName, email } = req.body;
    try {
        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.params.id);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Update target fields
        if (name) users[userIndex].name = name;
        if (lastName) users[userIndex].lastName = lastName;
        if (email) users[userIndex].email = email;

        await writeUsers(users);
        res.status(200).json({ message: 'User updated successfully.', user: users[userIndex] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Mount the router routes onto our application instance
app.use('/', router);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
