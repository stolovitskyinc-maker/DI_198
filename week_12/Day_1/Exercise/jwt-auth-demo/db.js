// In-memory stores — replace with real DB in production
const users = [];          // { id, username, passwordHash }
const refreshTokens = new Set(); // valid refresh tokens (for revocation)

module.exports = { users, refreshTokens };