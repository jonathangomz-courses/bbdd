require('dotenv').config();

const mongoose = require('./service/mongoose');
const api = require('./controller');
const express = require('express');
const app = express();

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI);

app.use(api.path, api.router);

module.exports = app;