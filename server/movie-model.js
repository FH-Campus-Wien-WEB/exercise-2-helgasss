/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */
   const movies = [
    {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Released": "2001-12-19",            // Umgeformt von "19 Dec 2001" (ISO 8601)
    "Runtime": 178,                      // Nummer statt "178 min"
    "Genres": ["Adventure", "Drama", "Fantasy"], // Umbenannt & als Array
    "Directors": ["Peter Jackson"],       // Umbenannt & als Array
    "Writers": ["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"], // Umbenannt & als Array
    "Actors": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],    // Als Array
    "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Poster": "https://m.media-amazon.com/images/I/81V36dsqyyL.jpg",
    "Metascore": 92,                     // Als Nummer
    "imdbRating": 8.9                    // Als Nummer
},

{
    "Title": "Gladiator",
    "Released": "2000-05-05",             // Umgeformt von "05 May 2000"
    "Runtime": 155,                       // Nummer statt "155 min"
    "Genres": ["Action", "Adventure", "Drama"], // Plural & Array
    "Directors": ["Ridley Scott"],        // Plural & Array
    "Writers": ["David Franzoni", "John Logan", "William Nicholson"], // Plural & Array
    "Actors": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], // Als Array
    "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "Poster": "https://www.framerated.co.uk/wp-content/uploads/2025/04/gladiator01-978x652.jpg",
    "Metascore": 67,                      // Als Nummer
    "imdbRating": 8.5                     // Als Nummer
},

{
    "Title": "Braveheart",
    "Released": "1995-05-24",             // Von "24 May 1995"
    "Runtime": 178,                       // Nummer statt "178 min"
    "Genres": ["Biography", "Drama", "War"], // Plural & Array
    "Directors": ["Mel Gibson"],          // Plural & Array
    "Writers": ["Randall Wallace"],       // Plural & Array
    "Actors": ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"], // Als Array
    "Plot": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    "Poster": "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/2ba2c3b2-4c2c-4e27-91d3-5ec5ff24b904/compose?aspectRatio=1.78&format=webp&width=1200",
    "Metascore": 68,                      // Nummer
    "imdbRating": 8.3                     // Nummer
}

 ];
 module.exports = movies; // Das hier macht die Daten für andere Dateien sichtbar
