const express = require('express');

const app = express();
const quotes = require('./all-quotes.js');
const PORT = 5000;

app.get('/', function (req, res) {
    res.send('Happy Wednesday!');
});

app.get('/all-quotes', function (req, res) {
    let response = '';
    quotes.forEach((data) => response += `<p>"${data.quote}" - ${data.author}</p>`);
    res.send(response);
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});