const express = require('express');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const jsonToCSV = require('./middleware/jsonToCSV.js');
const index = require('./views/index.js');
let storage = multer.memoryStorage();
let upload = multer({storage: storage});
// const upload = multer({ dest: 'uploads/' }); THIS DID NOT WORK BUT THE ABOVE MULTER CALLS DID.

const app = express();

///////////////////////////

app.use(express.static(path.join(__dirname, '../client/')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'));
});

app.post('/', upload.single('jsonFile'), jsonToCSV, (req, res) => {
  res.send(index(req.csvData));
});


module.exports = app;