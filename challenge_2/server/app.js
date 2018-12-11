const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonToCSV = require('./middleware/jsontocsv.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

app.post('/', jsonToCSV, (req, res) => {
  let results = JSON.parse(req.specialData[0]);
  res.send(`<pre>${results}</pre>`);
});


module.exports = app;