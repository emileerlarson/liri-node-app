var command = process.argv[2];
var movSong = process.argv[3];

var spotifyKeys = require('./keys.js')
var twitterKeys = require('./keys.js');

var spotifyID = spotifyKeys.clientID;
var spotifySecret = spotifyKeys.clientSecret;
var tConsumerKey = twitterKeys.consumer_key;
var tconsumerSecret = twitterKeys.consumber_secret;
var taccessKey = twitterKeys.acess_token_key;
var taccessSecret = twitterKeys.access_token_secret;

var Twitter = require('twitter');

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
   console.log(tweets);
 }else{
     for (var i = 10; i < tweets.length; i++){
         console.log(tweets[i]);
     }
 }
});

var request = require('request');
request('http://img.omdbapi.com/?t='+ movSong +'apikey=[e35a6893]&', function (error, response, body) {
    if(error){
        console.log(error);
    }else{
        console.log(response)
    }
});

// search: function({ type: 'track', query: 'movSong', limit: 1 }, callback);

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: 'spotifyID',
 secret: 'spotifySecret'
});

spotify.search({ type: 'track', query: 'movSong', }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
});

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'tconsumerKey',
    consumer_secret: 'tconsumerSecret',
    access_token_key: 'tacessKey',
    access_token_secret: 'taccessSecret'
  });

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});