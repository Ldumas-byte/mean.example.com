var config = {};
config.mongodb = 'mongodb://localhost/mean-cms';
module.exports = config;

var config = require('./config.dev');

//Test the file
console.log(config);