const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public')); // Serves frontend files

// In-memory database
const games = {}; 

// Helper function to generate a unique random ID
function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

// Helper function to generate random obstacles on the 10x10 grid
function generateObstacles() {
    const obstacles = [];
    const count = 15; // Number of obstacles on the map
    while (obstacles.length < count) {
        const obs = {
            x: Math.floor(Math.random() * 10),
            y: Math.floor(Math.random() * 10)
        };
        // Don't place obstacles on starting bases
        if ((obs.x === 0 && obs.y === 0) || (obs.x === 9 && obs.y === 9)) continue;
        // Don't duplicate obstacles
        if (!obstacles.some(o => o.x === obs.x && o.y === obs.y)) {
            obstacles.push(obs);
        }
    }
    return obstacles;
}

// 1. Initialize a new game session
app.post('/api/game/start', (req, res) => {
    const gameId = generateId();
    games[gameId] = {
        id: gameId,
        gridSize: 10,
        players: {
            player1: { x: 0, y: 0, base: { x: 0, y: 0 } },
            player2: { x: 9, y: 9, base: { x: 9, y: 9 } }
        },
        obstacles: generateObstacles(),
        turn: "player1",
        winner: null
    };
    res.status(200).json(games[gameId]);
});

// 2. Fetch current game state
app.get('/api/game/:id', (req, res) => {
    const game = games[req.params.id];
    if (!game) {
        return res.status(404).json({ error: "Game session not found" });
    }
    res.status(200).json(game);
});

// 3. Process player moves
app.post('/api/game/:id/move', (req, res) => {
    const game = games[req.params.id];
    if (!game) return res.status(404).json({ error: "Game not found" });
    if (game.winner) return res.status(400).json({ error: "Game is already over" });

    const { player, direction } = req.body;

    // Validate turn
    if (game.turn !== player) {
        return res.status(400).json({ error: "It is not your turn!" });
    }

    const currentPlayer = game.players[player];
    let targetX = currentPlayer.x;
    let targetY = currentPlayer.y;

    // Calculate target tile coordinates
    if (direction === 'up') targetY -= 1;
    else if (direction === 'down') targetY += 1;
    else if (direction === 'left') targetX -= 1;
    else if (direction === 'right') targetX += 1;
    else return res.status(400).json({ error: "Invalid direction" });

    // Boundary Check
    if (targetX < 0 || targetX >= game.gridSize || targetY < 0 || targetY >= game.gridSize) {
        return res.status(400).json({ error: "Out of bounds!" });
    }

    // Obstacle Check
    const hitObstacle = game.obstacles.some(obs => obs.x === targetX && obs.y === targetY);
    if (hitObstacle) {
        return res.status(400).json({ error: "Path blocked by an obstacle!" });
    }

    // Apply the position move
    currentPlayer.x = targetX;
    currentPlayer.y = targetY;

    // Check Victory Condition (Reaching enemy base)
    const opponentKey = player === 'player1' ? 'player2' : 'player1';
    const opponentBase = game.players[opponentKey].base;

    if (currentPlayer.x === opponentBase.x && currentPlayer.y === opponentBase.y) {
        game.winner = player;
    }

    // Swap active turns if nobody won yet
    if (!game.winner) {
        game.turn = opponentKey;
    }

    res.status(200).json(game);
});

// 4. Process base attacks
app.post('/api/game/:id/attack', (req, res) => {
    const game = games[req.params.id];
    if (!game) return res.status(404).json({ error: "Game not found" });
    if (game.winner) return res.status(400).json({ error: "Game is already over" });

    const { player } = req.body;
    if (game.turn !== player) return res.status(400).json({ error: "It is not your turn!" });

    const currentPlayer = game.players[player];
    const opponentKey = player === 'player1' ? 'player2' : 'player1';
    const opponentBase = game.players[opponentKey].base;

    // Check adjacency (Distance formula Manhattan length exactly 1)
    const distanceX = Math.abs(currentPlayer.x - opponentBase.x);
    const distanceY = Math.abs(currentPlayer.y - opponentBase.y);

    if ((distanceX === 1 && distanceY === 0) || (distanceX === 0 && distanceY === 1)) {
        game.winner = player;
    } else {
        return res.status(400).json({ error: "You are not close enough to attack the enemy base!" });
    }

    res.status(200).json(game);
});

// Start listening for incoming connections
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
