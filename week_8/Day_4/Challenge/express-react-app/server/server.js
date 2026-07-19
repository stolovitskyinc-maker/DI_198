const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body); // logs { post: 'Hi from client' } etc.
  const { post } = req.body;
  res.json({
    message: `I received your POST request. This is what you sent me: ${post}`
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));