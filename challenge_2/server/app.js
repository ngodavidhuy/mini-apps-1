const express = require('express');
const path = require('path');
const jsonToCSV = require('./middleware/jsontocsv.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

app.post('/', (req, res) => {
  console.log('TRIED TO POST!');
});


module.exports = app;