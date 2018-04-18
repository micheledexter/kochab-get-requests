// Get server set up
const express = require('express');
const app = express();
const PORT = 5000;

// Get additional requirements
const quotes = require('./all-quotes.js');

// Start express server to listen on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Set root page response
app.get('/', (req, res) => res.send('Happy Wednesday!'));

// Set all-quotes subdirectory response
app.get('/all-quotes', (req, res) => {
    let response = '';
    quotes.forEach((data) => response += `<p>"${data.quote}" - ${data.author}</p>`);
    res.send(response);
});
