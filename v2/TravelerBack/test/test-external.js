//https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
var test = require('unit.js');
//const lineController = require('../src/controllers/line-controller');
var http = require('http');
const getAllMovies = require('./getMoviesDbAPI').getAllMovies;
//const getMovieById = require('./getMoviesDbAPI').getMovieById;
describe('Test external API', function(){

  it('Get All Movies', () => {
    return getAllMovies()
      .then(response => {
        console.log(response.results[0]);
        test.object(response.results[0]).hasProperty('video')
        .hasProperty('original_language','en');
      });
  });
});