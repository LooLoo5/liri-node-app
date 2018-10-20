require("dotenv").config();


logtxt();

switch (process.argv) {
    case 'bands-in-town': bandsInTown();
    break;
    case 'spotify-this-song': spotifyThis(require);
    break;
    case 'movie-this': movieThis(require);
    break;
    default: return console.log('try again with different input');
}


//bands in town
const request = require("request");
request("https://rest.bandsintown.com/artists/coldplay/events?app_id=codingbootcamp", function (error, response, body) {
    if (error) throw error;
     console.log(body);
});

//Start Spotify
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

spotify.search({
    type: 'track',
    query: 'All the Small Things'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

//OMBD
const movies = require("movies");
request("http://www.omdbapi.com/?t=inception&apikey=c77c646c", function (error, response, body) {
    if (error) throw error;
     console.log(JSON.parse(body));
});