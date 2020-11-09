require('dotenv').config();

const mongoose = require('./service/mongoose');
const api = require('./controller');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI);

app.use(api.path, api.router);

const tset = {};
tset.t = (req, res) => {
  console.log('TEST');
  res.json({
    message: 'Ready'
  });
}

app.get('/test', tset.t);

module.exports = app;