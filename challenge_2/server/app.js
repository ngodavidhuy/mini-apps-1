const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonToCSV = require('./middleware/jsontocsv.js');
const index = require('./views/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

app.post('/', jsonToCSV, (req, res) => {
  console.log(req.csvData);
  let results = JSON.parse(req.csvData);
  res.send(index(results));
});


module.exports = app;