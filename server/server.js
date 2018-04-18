// Get server set up
const express = require('express');
const app = express();
const PORT = 5000;

// Start express server to listen on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Get additional requirements
const quotes = require('./modules/all-quotes');

// Set root page response
// app.get('/', (req, res) => {
//     loaded();
//     res.send('Happy Wednesday!');
// });
app.use(express.static('server/public'));

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
    const data = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(`<p>"${data.quote}" - ${data.author}`);
});

// Prepare page load message
function loaded() {
    console.log("Page loaded");
}