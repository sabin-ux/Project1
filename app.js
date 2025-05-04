const express = require('express');
const { book } = require('./database/connection');
const { addBook, fetchBooks, updateBook, deleteBook } = require('./controller/boookController');
const bookRoute = require("./routes/bookRoute");
const app = express();

// Connect to database
require("./database/connection");

// Middleware to parse JSON
app.use(express.json());

app.use("", bookRoute);
// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
