const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static assets from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Tracks currently connected users: { socketId: { username, room } }
const activeUsers = {};

// Helper function to extract all users in a specific room
function getUsersInRoom(room) {
    return Object.values(activeUsers)
        .filter(user => user.room === room)
        .map(user => user.username);
}

io.on('connection', (socket) => {
    console.log(`New connection initialized: ${socket.id}`);

    // Triggered when a user fills out the form to join a room
    socket.on('joinRoom', ({ username, room }) => {
        // Associate socket information with state tracking
        activeUsers[socket.id] = { username, room };

        // Bind the socket instance to the Socket.io room channel
        socket.join(room);

        // Notify the specific client that they joined successfully
        socket.emit('message', {
            user: 'System',
            text: `Welcome to the "${room}" room, ${username}!`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });

        // Broadcast a global status message to everyone else in the room
        socket.to(room).emit('message', {
            user: 'System',
            text: `${username} has joined the chat.`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });

        // Dispatch updated roster data back to the room clients
        io.to(room).emit('roomUsers', {
            room: room,
            users: getUsersInRoom(room)
        });
    });

    // Triggered when a user transmits a textual message payload
    socket.on('chatMessage', (msgText) => {
        const currentUser = activeUsers[socket.id];
        if (currentUser) {
            io.to(currentUser.room).emit('message', {
                user: currentUser.username,
                text: msgText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });
        }
    });

    // Native disconnect event triggered when user leaves or closes tab
    socket.on('disconnect', () => {
        const userState = activeUsers[socket.id];
        if (userState) {
            const { username, room } = userState;
            
            // Wipe clean from local storage state object
            delete activeUsers[socket.id];

            // Inform remaining room members of departure
            io.to(room).emit('message', {
                user: 'System',
                text: `${username} has left the chat.`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            });

            // Resend fresh user list data reflecting the checkout
            io.to(room).emit('roomUsers', {
                room: room,
                users: getUsersInRoom(room)
            });
        }
        console.log(`Connection dropped: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server executing deployment checks on port ${PORT}`));
