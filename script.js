document.addEventListener("DOMContentLoaded", function () {
  fetch("movies.json")
    .then((response) => response.json())
    .then((data) => {
      const movieContainer = document.getElementById("movie-container");
      data.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        let thumbnailSrc = movie.thumbnail;
        if (!isValidURL(thumbnailSrc)) {
          thumbnailSrc = "image.png"; // Default image file path
        }

        movieCard.innerHTML = `
                  <img src="${thumbnailSrc}" alt="${
          movie.title
        }" class="movie-poster">
                  <div class="movie-details">
                      <h2 class="movie-title">${movie.title}</h2>
                      <p class="movie-year">${movie.year}</p>
                      <p class="movie-genres">${movie.genres.join(", ")}</p>
                      <p class="movie-cast"><strong>Cast:</strong> ${movie.cast.join(
                        ", "
                      )}</p>
                      <p class="movie-extract">${movie.extract}</p>
                  </div>
              `;
        movieContainer.appendChild(movieCard);
      });
    })
    .catch((error) => console.error("Error fetching movies:", error));
});

function isValidURL(url) {
  var a = document.createElement("a");
  a.href = url;
  return a.host && a.host != window.location.host;
}
