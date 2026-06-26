// routes/quiz.js
const express = require('express');
const router = express.Router();

// Sample trivia quiz questions and answers
const triviaQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// Helper function to fetch or initialize session state for a user
function getOrCreateSession(userId) {
    if (!global.quizSessions[userId]) {
        global.quizSessions[userId] = {
            currentQuestionIndex: 0,
            score: 0,
            isGameOver: false
        };
    }
    return global.quizSessions[userId];
}

// 1. GET /quiz - Start or view current question
router.get('/', (req, res) => {
    // Using a header field to distinguish different players/tabs
    const userId = req.headers['user-id'] || 'default-player';
    const session = getOrCreateSession(userId);

    if (session.isGameOver) {
        return res.json({ 
            message: "Quiz completed! View your final score at the endpoint below.",
            scoreEndpoint: `GET /quiz/score (with User-Id: ${userId} header)`
        });
    }

    const currentQuestion = triviaQuestions[session.currentQuestionIndex];
    
    res.json({
        questionNumber: session.currentQuestionIndex + 1,
        totalQuestions: triviaQuestions.length,
        question: currentQuestion.question
    });
});

// 2. POST /quiz - Submit answer and advance
router.post('/', (req, res) => {
    const userId = req.headers['user-id'] || 'default-player';
    const { userAnswer } = req.body;
    const session = global.quizSessions[userId];

    if (!session || session.isGameOver) {
        return res.status(400).json({ error: "No active quiz game found. Start by sending a GET request to /quiz." });
    }

    if (!userAnswer) {
        return res.status(400).json({ error: "userAnswer field is required in the request body." });
    }

    const currentQuestion = triviaQuestions[session.currentQuestionIndex];
    
    // Perform case-insensitive evaluation
    const isCorrect = currentQuestion.answer.toLowerCase().trim() === userAnswer.toLowerCase().trim();
    
    let feedback = "Incorrect.";
    if (isCorrect) {
        session.score += 1;
        feedback = "Correct!";
    }

    // Advance index to the next item
    session.currentQuestionIndex += 1;

    // Check if game has concluded
    if (session.currentQuestionIndex >= triviaQuestions.length) {
        session.isGameOver = true;
        return res.json({
            feedback,
            correctAnswer: currentQuestion.answer,
            message: "Quiz finished!",
            score: `Go to /quiz/score to view results.`
        });
    }

    res.json({
        feedback,
        correctAnswer: isCorrect ? undefined : currentQuestion.answer,
        message: "Moving to next question. Send a GET request to /quiz to fetch it."
    });
});

// 3. GET /quiz/score - Display final score evaluation
router.get('/score', (req, res) => {
    const userId = req.headers['user-id'] || 'default-player';
    const session = global.quizSessions[userId];

    if (!session) {
        return res.status(404).json({ error: "No session history found for this user." });
    }

    res.json({
        totalQuestions: triviaQuestions.length,
        correctAnswers: session.score,
        status: session.isGameOver ? "Completed" : "In Progress"
    });
});

module.exports = router;
