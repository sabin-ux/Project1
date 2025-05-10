const express = require("express");
const bookRoute = require("./routes/bookRoute")

const app = express();

// Connect to database
require("./database/connection")

// Middleware to parse JSON
app.use(express.json());

// Use book routes
app.use("/books", bookRoute); // additional shortcut

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
