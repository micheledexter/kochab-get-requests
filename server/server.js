// Get server set up
const express = require('express');
const app = express();
const PORT = 5000;

// Get additional requirements
const quotes = require('./all-quotes.js');

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

// Start express server to listen on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Prepare page load message
function loaded() {
    console.log("Page loaded");
}