const axios = require('axios');

module.exports = async function (args) {
  return axios.get(process.env.APP_ALBUMS_URL + '/v1/albums/' + args.id)
    .then(response => response.data);
};
