const express = require('express');
const mongoose = require('mongoose');
let User = require('./models/User.js');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/userData');
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.post('/userData', (req, res) => {
  if (req.body.name && req.body.email && req.body.password && req.body.address1 && req.body.city && req.body.state && req.body.zip && 
    req.body.phone && req.body.cardNumber && req.body.expiration && req.body.cvv && req.body.billingZip) {

      User.create(req.body, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log('DATA POSTED!');
          res.send('DATA POSTED');
        }
      });

    } else {
      let err = new Error('All fields required.');
      err.status = 400;
      return next(err);
    }
});

app.get('/', (req, res) => {
  console.log('SAMPLE GET!');
  res.send('BYE')
});


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING IN PORT ${PORT} BECAUSE OF THE INTERNET`);
});

