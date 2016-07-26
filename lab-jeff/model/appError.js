'use strict';

module.exports = exports = function AppError(res){
  this.message = 'Error';
  this.statusCode = res.status;
  this.responseMessage = res.send('You have recieved an error with code: ' + this.statusCode);
};
