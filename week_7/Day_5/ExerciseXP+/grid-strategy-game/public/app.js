// Game state variables
let gameId = null;
let playerRole = null; // 'player1' or 'player2'
let pollingInterval = null;

// DOM Elements
const startBtn = document.getElementById('start-btn');
const statusDisplay = document.getElementById('status-display');
const gridContainer = document.getElementById('grid-container');

// Event Listeners
startBtn.addEventListener('click', startNewGame);

/**
 * Initializes a new game session on the server
 */
async function startNewGame() {
    try {
        const response = await fetch('/api/game/start', { method: 'POST' });
        const data = await response.json();
        
        gameId = data.id;
        // The creator of the game defaults to player1
        playerRole = 'player1'; 
        
        statusDisplay.innerText = `Game started! You are Player 1 (Blue). Your Turn.`;
        
        // Start polling the server every 1 second for state updates
        if (pollingInterval) clearInterval(pollingInterval);
        pollingInterval = setInterval(fetchGameState, 1000);
        
        renderBoard(data);
    } catch (error) {
        console.error('Error starting game:', error);
        statusDisplay.innerText = 'Failed to start game.';
    }
}

/**
 * Fetches the latest game state from the server
 */
async function fetchGameState() {
    if (!gameId) return;

    try {
        const response = await fetch(`/api/game/${gameId}`);
        if (!response.ok) throw new Error('Game not found');
        
        const data = await response.json();
        renderBoard(data);
        updateStatus(data);

        // Stop polling if someone won
        if (data.winner) {
            clearInterval(pollingInterval);
        }
    } catch (error) {
        console.error('Error fetching game state:', error);
    }
}

/**
 * Sends a move request to the backend
 * @param {string} direction - 'up', 'down', 'left', or 'right'
 */
async function sendMove(direction) {
    if (!gameId) return alert('Start a game first!');

    try {
        const response = await fetch(`/api/game/${gameId}/move`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player: playerRole, direction: direction })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error || 'Invalid move');
            return;
        }

        renderBoard(data);
        updateStatus(data);
    } catch (error) {
        console.error('Error sending move:', error);
    }
}

/**
 * Sends an attack request to the backend
 */
async function sendAttack() {
    if (!gameId) return alert('Start a game first!');

    try {
        const response = await fetch(`/api/game/${gameId}/attack`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player: playerRole })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error || 'Attack failed');
            return;
        }

        renderBoard(data);
        updateStatus(data);
    } catch (error) {
        console.error('Error sending attack:', error);
    }
}

/**
 * Renders the 10x10 grid dynamically based on the server state
 */
function renderBoard(gameState) {
    gridContainer.innerHTML = ''; // Clear previous board

    const p1 = gameState.players.player1;
    const p2 = gameState.players.player2;

    // Loop through rows (y) and columns (x) to build a 10x10 matrix
    for (let y = 0; y < gameState.gridSize; y++) {
        for (let x = 0; x < gameState.gridSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // 1. Render Bases (Dashed borders)
            if (x === p1.base.x && y === p1.base.y) cell.classList.add('base1');
            if (x === p2.base.x && y === p2.base.y) cell.classList.add('base2');

            // 2. Render Obstacles (Solid gray tiles)
            const isObstacle = gameState.obstacles.some(obs => obs.x === x && obs.y === y);
            if (isObstacle) cell.classList.add('obstacle');

            // 3. Render Players (Colored text/backgrounds)
            if (x === p1.x && y === p1.y) {
                cell.classList.add('player1');
                cell.innerText = 'P1';
            } else if (x === p2.x && y === p2.y) {
                cell.classList.add('player2');
                cell.innerText = 'P2';
            }

            gridContainer.appendChild(cell);
        }
    }
}

/**
 * Updates the screen text based on turns and victory status
 */
function updateStatus(gameState) {
    if (gameState.winner) {
        if (gameState.winner === playerRole) {
            statusDisplay.innerText = '🏆 Victory! You captured the base!';
        } else {
            statusDisplay.innerText = '💀 Defeat! Your base was destroyed.';
        }
        return;
    }

    if (gameState.turn === playerRole) {
        statusDisplay.innerText = "Your turn! Make a move.";
    } else {
        statusDisplay.innerText = "Waiting for Opponent...";
    }
}
