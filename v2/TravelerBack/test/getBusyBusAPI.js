const axios = require('axios');

module.exports = {
  getUsers() { 
      return axios
      .get(`http://localhost:3000/users`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};