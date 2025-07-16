const express = require('express');
const app = express();
const port = 8080;

// Read the greeting from env var, (have a default fallback)
const greeting = process.env.GREETING_MESSAGE || 'Hello World (default)';
const apiKey = process.env.API_KEY || 'no-key-found';

app.get('/', (req, res) => {
  res.send(`${greeting} Your API key is: ${apiKey}`);
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
