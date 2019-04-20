var redis = require('redis');

var client = redis.createClient(6379,'localhost');

console.log(client)
client.set('hello','This is a value');

console.log(client.get('hello'))