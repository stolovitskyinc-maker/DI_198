// Initialize the Socket.io client connection profile
const socket = io();

const joinContainer = document.getElementById('join-container');
const chatContainer = document.getElementById('chat-container');
const joinForm = document.getElementById('join-form');
const chatForm = document.getElementById('chat-form');
const msgInput = document.getElementById('msg-input');
const chatMessages = document.getElementById('chat-messages');
const roomNameDisplay = document.getElementById('room-name-display');
const usersList = document.getElementById('users-list');
const leaveBtn = document.getElementById('leave-btn');

let currentUsername = '';

// Request system notification authorization permissions immediately upon initialization
if (Notification.permission === 'default') {
    Notification.requestPermission();
}

// User Action: Join Room Submission Handler
joinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    currentUsername = document.getElementById('username').value.trim();
    const selectedRoom = document.getElementById('room').value;

    if (!currentUsername) return;

    // Send the join event signature downstream to the server engine
    socket.emit('joinRoom', { username: currentUsername, room: selectedRoom });

    // Swap viewports
    joinContainer.classList.add('hidden');
    chatContainer.classList.remove('hidden');

    // Focus immediately onto user entry tray field inputs
    msgInput.focus();
});

// Listener tracking message arrival streams down-funnel
socket.on('message', (message) => {
    renderMessageNode(message);

    // Scroll chat window area down into view layout positioning context
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Trigger Notification if document viewport isn't actively active/focused
    if (document.hidden && message.user !== 'System' && message.user !== currentUsername) {
        triggerDesktopNotification(message.user, message.text);
    }
});

// Listener tracking state management membership alterations
socket.on('roomUsers', ({ room, users }) => {
    roomNameDisplay.innerText = room;
    renderRosterList(users);
});

// User Action: Text Broadcast Event Submit Execution Lifecycle
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const textPayload = msgInput.value.trim();
    if (!textPayload) return;

    // Stream text execution up towards ingestion pipelines
    socket.emit('chatMessage', textPayload);

    // Flush fields and hold active input context locks
    msgInput.value = '';
    msgInput.focus();
});

// User Action: Terminate Session Event Handler
leaveBtn.addEventListener('leave', () => {
    window.location.reload();
});
// Fallback interface structural action connector
leaveBtn.onclick = () => { window.location.reload(); };

// Helper to inject structural DOM nodes into chat timelines
function renderMessageNode({ user, text, time }) {
    const div = document.createElement('div');
    div.classList.add('message');

    if (user === 'System') {
        div.classList.add('system');
        div.innerHTML = `<p class="message-text">${text}</p>`;
    } else {
        if (user === currentUsername) {
            div.classList.add('self');
        }
        div.innerHTML = `
            <div class="message-meta">${user} <span>${time}</span></div>
            <p class="message-text">${text}</p>
        `;
    }
    chatMessages.appendChild(div);
}

// Helper to construct sidebar client roster elements safely
function renderRosterList(users) {
    usersList.innerHTML = users
        .map(user => `<li>● ${user} ${user === currentUsername ? '(You)' : ''}</li>`)
        .join('');
}

// Helper to dispatch Web API System Banner notifications
function triggerDesktopNotification(sender, text) {
    if (Notification.permission === 'granted') {
        new Notification(`New message from ${sender}`, {
            body: text,
            tag: 'chat-app-notification'
        });
    }
}
