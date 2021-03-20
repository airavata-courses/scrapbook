const redis = require('redis');
var url = require('url');
const redisPort = process.env.REDIS_PORT;
const redisHost = process.env.REDIS_HOST
const redisPassword = process.env.REDIS_PASSWORD;
const client = redis.createClient({
  host: redisHost,
  port: redisPort,
  password: redisPassword
});

function init() {

  client.on('connect', function() {
    console.log('Redis connected');
  });

  client.on("error", (err) => {
    console.log('redis error')
    console.log(err);
  });

}

module.exports = {
  init: init,
  client: client
};