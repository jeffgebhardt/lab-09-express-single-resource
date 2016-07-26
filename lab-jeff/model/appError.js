'use strict';

module.exports = exports = function AppError(res){
  this.message = console.log('Error...');
  this.statusCode = 404;
  this.responseMessage = function(){
    res.status(404).send('You have recieved an error with code: ' + this.statusCode + ', page not found...');
  };
};
