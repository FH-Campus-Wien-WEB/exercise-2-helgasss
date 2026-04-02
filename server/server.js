const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Remove the line below and return the movies from 
     the model as an array */
  // Wandelt das Objekt { "id": {movie} } in ein flaches Array [{movie}] um
    res.json(Object.values(movieModel));
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
 const id = req.params.imdbID; // Das ist die ID aus der URL
    const movie = movieModel[id]; // Wir suchen im Objekt direkt nach dem Key

    if (movie) {
        res.json(movie); // Film gefunden -> als JSON senden
    } else {
        res.sendStatus(404); // Film nicht da -> 404 Fehler
    }
  });

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

