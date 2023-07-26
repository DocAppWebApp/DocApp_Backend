const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db'); // Imports function that connects with out database

connectDB(); // function call to connect to our database

app.get('/', (req, res) => {
  res.send('¡Hello World!');
});

app.listen(port, () => {
  console.log(`App listening in: http://localhost:${port}`);
});
