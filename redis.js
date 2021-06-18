const redis = require("redis");
const {redisConfig} = require('./config');

const client = redis.createClient(
    redisConfig.port,
     redisConfig.host
   );
   client.auth(redisConfig.auth);
 
 client.on("error", function(error) {
   console.error(error);
 });

client.set("key", "redis is on", redis.print);
client.get("key", redis.print);


module.exports = client;