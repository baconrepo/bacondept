console.log("Initializing bot...");
var Twit = require('twit');
var keys = require('./APIkeys');
var T = new Twit(keys);

console.log("Reading twitter ID..");
var ID = '1912617043';   //primes account
console.log(ID);
var stream = T.stream('statuses/filter', {follow: ID});
stream.on('tweet',function(tweet){
	console.log(tweet);
	});
