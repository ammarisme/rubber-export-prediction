'use strict';

const express = require('express');
const middlewareFactory = require('./app-middleware/middlewareFactory');
const config = require('./config');

const mongoose = require("mongoose");
const dbPath = "mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db";
mongoose.connect(dbPath, {
  useNewUrlParser: true,
});
module.exports = mongoose;


const app = express();

app.use(middlewareFactory(config));

module.exports = app;
