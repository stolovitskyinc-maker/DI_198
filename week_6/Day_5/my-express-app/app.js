// app.js
const express = require('express');
const app = express();
const port = 3001;

// Step 5: Import and mount the router module
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Step 6: Start your server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
