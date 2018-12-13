const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  address1: {
    type: String,
    required: true,
    trim: true
  },
  address2: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zip: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  cardNumber: {
    type: String,
    required: true,
    trim: true
  },
  expiration: {
    type: String,
    required: true,
    trim: true
  },
  cvv: {
    type: String,
    required: true,
    trim: true
  },
  billingZip: {
    type: String,
    required: true,
    trim: true
  },
});

let User = mongoose.model('User', UserSchema);
module.exports = User;

