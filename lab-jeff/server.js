'use strict';

const Pokemon = require('./model/pokemon');
const AppError = require('./model/appError');
const bodyParser = require('body-parser');
const express = require('express');
const uuid = require('node-uuid');
const serverPort = 3000;


let app = express();
let router = express.Router();

let pokemonCollection = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

app.post('/api/pokemon/', (req, res) => {
  let pokeName = req.body.pokeName;
  let pokeType = req.body.pokeType;

  let pokeUuid = uuid.v4();

  pokemonCollection[pokeUuid] = new Pokemon(pokeName, pokeType);
  console.log(pokemonCollection);

  res.send('Pokemon added succesfully with an ID of: ' + pokeUuid + '\r\n');

});

app.delete('/api/remove/pokemon/:pokeId', (req, res) => {
  console.log('deleting');
  for(let key in pokemonCollection){
    if(key === req.params.pokeId) {
      console.log('Deleting: ' + pokemonCollection[key].pokeName);
      delete pokemonCollection[key];
      res.json({message: 'Succesfull delete'});
    }
  }
  res.end();
});

router.use((req, res, next) => {
  console.log('Request method is /' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.json({message: 'You have reached the API\'s home directory...'});
});

router.get('/pokemon/:pokeId', (req, res) => {

  for(let key in pokemonCollection){
    if(key === req.params.pokeId) {
      console.log('Found matching Pokemon!');
      res.json('Here is the pokemon you requested: ' + pokemonCollection[key].pokeName + ', type: ' + pokemonCollection[key].pokeType);
    }
  }
  res.end();
});

router.get('*', (req, res) => {
  let sendError = new AppError(res);
  sendError.responseMessage;
});

app.use('/api', router);

app.listen(serverPort, () => console.log('Server running at http://localhost:' + serverPort));
