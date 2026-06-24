const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 📚 Emoji Dataset
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '👾', name: 'Alien' },
    { emoji: '🥑', name: 'Avocado' },
    { emoji: '👑', name: 'Crown' },
    { emoji: '🍿', name: 'Popcorn' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🦖', name: 'T-Rex' }
];

// 🧠 In-Memory Server State (Simulated Sessions & Leaderboard)
let activeSessions = {};
let leaderboard = [
    { name: "EmojiKing", score: 12 },
    { name: "PixelGuru", score: 8 },
    { name: "TacoLover", score: 5 }
];

// Helper function to mix/shuffle arrays
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// 🎯 Endpoint: Start a game or generate a new round question
app.get('/api/game/question', (req, res) => {
    // Basic session handling using an IP or query identifier
    const playerId = req.ip; 
    if (!activeSessions[playerId]) {
        activeSessions[playerId] = { score: 0, currentAnswer: '' };
    }

    // Pick a random correct emoji
    const randomIdx = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIdx];

    // Save the correct answer in the player's server state
    activeSessions[playerId].currentAnswer = correctEmoji.name;

    // Get all other names as distractors
    const distractors = emojis
        .filter(e => e.name !== correctEmoji.name)
        .map(e => e.name);

    // Shuffle distractors and pick 3
    const selectedDistractors = shuffle(distractors).slice(0, 3);

    // Mix correct answer and distractors together
    const finalOptions = shuffle([correctEmoji.name, ...selectedDistractors]);

    res.json({
        emoji: correctEmoji.emoji,
        options: finalOptions,
        score: activeSessions[playerId].score
    });
});

// 📥 Endpoint: Check the player's guess using Fetch API POST
app.post('/api/game/answer', (req, res) => {
    const playerId = req.ip;
    const { guess, playerName } = req.body;

    if (!activeSessions[playerId]) {
        return res.status(400).json({ error: "No active session found. Please refresh." });
    }

    const correctAnswer = activeSessions[playerId].currentAnswer;
    let isCorrect = false;

    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
        activeSessions[playerId].score += 1;
        isCorrect = true;
    } else {
        // Optional: Reset score or penalize on wrong answer
        // Here we will update the leaderboard if their run ends, then reset their score
        const finalScore = activeSessions[playerId].score;
        if (finalScore > 0 && playerName) {
            leaderboard.push({ name: playerName, score: finalScore });
            // Sort high to low, keep top 5
            leaderboard.sort((a, b) => b.score - a.score);
            leaderboard = leaderboard.slice(0, 5);
        }
        activeSessions[playerId].score = 0; 
    }

    res.json({
        correct: isCorrect,
        correctAnswer: correctAnswer,
        currentScore: activeSessions[playerId].score
    });
});

// 🏆 Endpoint: Retrieve Leaderboard Top Scores
app.get('/api/game/leaderboard', (req, res) => {
    res.json(leaderboard);
});

// Start listening
app.listen(PORT, () => {
    console.log(`🚀 Emoji Game Server spinning at http://localhost:${PORT}`);
});
