// Get server set up
const express = require('express');
const app = express();
const PORT = 5000;

// Start express server to listen on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Get additional requirements
const quotes = require('./all-quotes');

// Set root page response
app.get('/', (req, res) => {
    loaded();
    res.send('Happy Wednesday!');
});

// Set all-quotes subdirectory response
app.get('/all-quotes', (req, res) => {
    loaded();
    let response = '';
    quotes.forEach((data) => response += `<p>"${data.quote}" - ${data.author}</p>`);
    res.send(response);
});

// Display a random quote
app.get('/quote', (req, res) => {
    loaded();
    data = quotes[randomNumber(0, quotes.length - 1)];
    res.send(`<p>"${data.quote}" - ${data.author}`);
});

// Prepare page load message
function loaded() {
    console.log("Page loaded");
}

// Random number generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}