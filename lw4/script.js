const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function getClassByRate(vote) {
}

function showMovies(data) {
  const moviesEl = document.querySelector(".movies");

  document.querySelector(".movies").innerHTML = "";

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <div class="movie-ex">
        <img
          src="${movie.posterUrlPreview}"
          class="movie-img"
          alt="${movie.nameRu}"
        />

      </div>
      <div class="movie-info">
        <div class="movie-title">${movie.nameRu}</div>
        <div class="movie-category">${movie.genres.map(
          (genre) => ` ${genre.genre}`
        )}`;
    moviesEl.appendChild(movieEl);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".header-search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const Search = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(Search);

    search.value = "";
  }
});
