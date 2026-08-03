const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ error: 'Access token missing' });
  }

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, payload) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Access token expired' });
      }
      return res.status(403).json({ error: 'Invalid access token' });
    }
    req.user = payload; // attach decoded user info for downstream handlers
    next();
  });
}

module.exports = authenticate;