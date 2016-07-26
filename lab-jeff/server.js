'use strict';

const AppError = require('./model/appError');
const pokemonRouter = require('./route/pokemonRouter');
const bodyParser = require('body-parser');
const express = require('express');
const serverPort = 3000;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));
app.use('/api', pokemonRouter);

app.get('*', (req, res) => {
  let sendError = new AppError(res);
  sendError.responseMessage();
});

app.listen(serverPort, () => console.log('Server running at http://localhost:' + serverPort));
