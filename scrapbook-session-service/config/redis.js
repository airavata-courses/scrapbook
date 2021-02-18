const redis = require('redis');
const redisPort = 6379;
const client = redis.createClient(redisPort);

function init() {

  client.on("error", (err) => {
    console.log(err);
  });

}

module.exports = {
  init: init,
  client: client
};