const Pokemon = require('../model/pokemon');
const uuid = require('node-uuid');
const express = require('express');
const router = express.Router();

let pokemonCollection = {};

router.use((req, res, next) => {
  console.log('Request method is /' + req.method);
  next();
});

router.post('/pokemon/', (req, res) => {
  let pokeName = req.body.pokeName;
  let pokeType = req.body.pokeType;
  let pokeUuid = uuid.v4();

  pokemonCollection[pokeUuid] = new Pokemon(pokeName, pokeType);
  console.log(pokemonCollection);
  res.send('Pokemon added succesfully with an ID of: ' + pokeUuid + '\r\n');
});

router.delete('/pokemon/:pokeId', (req, res) => {
  for(let key in pokemonCollection){
    if(key === req.params.pokeId) {
      console.log('Deleting: ' + pokemonCollection[key].pokeName);
      delete pokemonCollection[key];
      res.json({message: 'Succesfull delete'});
    }
  }
  res.end();
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

router.get('/', (req, res) => {
  res.json({message: 'You have reached the API\'s home directory...'});
});

module.exports = router;
