class Movie {
  constructor(title = "", studio = "", rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG(movies = [Movie]) {
    var filteredArray = [];
    movies.forEach((movie) => {
      if (movie.rating === "PG") {
        filteredArray.push(movie);
      }
    });
    return filteredArray;
  }
}

const movies1 = new Movie("interstellar", "WB");
const movies2 = new Movie("Openheimer", "Universal pic","R");
const movies3 = new Movie("dark knight", "DC");
const movies4 = new Movie("avatar", "20th century");

console.log(movies1.getPG([movies1, movies2, movies3, movies4]));
