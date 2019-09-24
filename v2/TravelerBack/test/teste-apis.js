//https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
var test = require('unit.js');
//const lineController = require('../src/controllers/line-controller');
var http = require('http');
const getUsers = require('./getBusyBusAPI').getUsers;
//const getMovieById = require('./getMoviesDbAPI').getMovieById;
describe('Test BusyBus API', function(){

  it('Get Users', () => {
    return getUsers()
      .then(response => {
        console.log(response);
        test.object(response[0]).hasProperty('email', 'sandieg2k@gmail.com')
        .hasProperty('username','Sandieg2k');
      });
  });
});