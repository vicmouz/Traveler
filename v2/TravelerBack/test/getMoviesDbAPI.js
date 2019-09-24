const axios = require('axios');

module.exports = {
  getAllMovies() {
    return axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=827876a5af03c2b86ccef2a059a92a5c&language=pt-BR`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};

  /*getMovieById(movieID) {
    return axios
      .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=827876a5af03c2b86ccef2a059a92a5c&language=pt-BR`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }*/


  