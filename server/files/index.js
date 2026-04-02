window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
        const movieArticle = document.createElement("article");
    
    // NEU: Der Edit-Button
    const editButton = document.createElement("a"); // Ein Link, der wie ein Button aussieht
    editButton.textContent = "Edit";
    editButton.href = `edit.html?imdbID=${movie.imdbID}`; // Wir hängen die ID an die URL
    editButton.classList.add("button"); // Falls du Styling dafür hast
    
    
    // 1. Titel
    const title = document.createElement("h2");
    title.textContent = movie.Title;
    movieArticle.append(title);

    // 2. Poster
    const poster = document.createElement("img");
    poster.src = movie.Poster;
    poster.alt = `Poster for ${movie.Title}`;
    poster.style.width = "200px";
    movieArticle.append(poster);

    // 3. Allgemeine Infos (Datum, Dauer, Ratings)
    const infoP = document.createElement("p");
    infoP.innerHTML = `<strong>Released:</strong> ${movie.Released} | 
                       <strong>Runtime:</strong> ${movie.Runtime} min | 
                       <strong>Metascore:</strong> ${movie.Metascore} | 
                       <strong>IMDb:</strong> ${movie.imdbRating}`;
    movieArticle.append(infoP);

    // 4. Plot
    const plot = document.createElement("p");
    plot.innerHTML = `<strong>Plot:</strong> ${movie.Plot}`;
    movieArticle.append(plot);

    // 5. Listen-Funktion für Genres, Directors, Writers, Actors
    // Wir bauen eine kleine Hilfsfunktion für die semantischen Listen
    // 5. Genres als "Spans" (wichtig für das CSS-Styling aus Part 3)
const genreHeader = document.createElement("h3");
genreHeader.textContent = "Genres:";
movieArticle.append(genreHeader);

const genreContainer = document.createElement("div"); 
movie.Genres.forEach(g => {
    const s = document.createElement("span");
    s.classList.add("genre"); // Das aktiviert dein CSS (.genre { ... })
    s.textContent = g;
    genreContainer.append(s);
});
movieArticle.append(genreContainer);

// 6. Die restlichen Infos wieder als normale Listen
const createList = (label, dataArray) => {
    const header = document.createElement("h3");
    header.textContent = label;
    movieArticle.append(header);

    const ul = document.createElement("ul");
    dataArray.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    });
    movieArticle.append(ul);
};

createList("Directors:", movie.Directors);
createList("Writers:", movie.Writers);
createList("Actors:", movie.Actors);

    movieArticle.append(editButton);
    // Trennlinie für die Optik
    movieArticle.append(document.createElement("hr"));
    
    // Alles in den Body einfügen
    bodyElement.append(movieArticle);
    
       
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
