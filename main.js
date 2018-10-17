const request = require('request');
request("https://rest.bandsintown.com/artists/coldplay/events?app_id=codingbootcamp", function(error, response, body){
    if (error) throw error;
    // console.log(body);
});

//Start Spotify
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "7f77a221a5014883b651e5d1a8dfa99d",
  secret: "2dc2e88dd1944f0d9c08005094ccff5f"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data); 
});

//OMBD
request("http://www.omdbapi.com/?t=inception&apikey=c77c646c", function (error, response, body){
    if (error) throw error;
    console.log(JSON.parse(body));
});
