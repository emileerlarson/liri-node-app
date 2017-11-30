var command = process.argv[2];
var movSong = "";
for (var i = 3; i < process.argv.length; i++){
    if(movSong === ""){
        movSong = movSong + process.argv[i];
    }else{
        movSong = movSong + " " + process.argv[i];
    }
}
console.log(movSong);


var keys = require('./keys.js')
var Twitter = require('twitter');
var request = require('request');
var Spotify = require('node-spotify-api');

var spotifyID = keys.spotifyKeys.clientID;
var spotifySecret = keys.spotifyKeys.clientSecret;

function findTweets(params) {
    var client = new Twitter(keys.twitterKeys);
    
    var params = { screen_name: 'ryandevbryce' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for(var i = 0; i < tweets.length; i++){
                console.log("======================");
                console.log(tweets[i].text);
                console.log(tweets[i].user.name);
            }
            console.log(tweets.length);
        }
    });

}

function findMovies(movie){
    request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if(error){
            console.log(error);
        }else{
            console.log(JSON.parse(body))
        }
    });
}

// search: function({ type: 'track', query: 'movSong', limit: 1 }, callback);
function findSpotify (movSong){
    var spotify = new Spotify({
     id: spotifyID,
     secret: spotifySecret
    });
    spotify.search({ type: 'track', query: movSong}, function(err, data) {
     if (err) {
       return console.log('Error occurred: ' + err);
     }
    
    console.log(data.tracks.items[0]); 
    });
}

switch (command) {
    case "my-tweets":
        findTweets();
        break;
    case "spotify-this-song":
        findSpotify(movSong);
        break;
    case "movie-this":
        findMovies(movSong);
        break;
    case "do-what-it-says":

        break;
    default:
        break;
}
