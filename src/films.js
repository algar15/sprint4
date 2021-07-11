const { reduce } = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(function(movie){
    return movie["director"]
  });
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(function(movie) {
    return movie["director"] === director  
  })
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filteredMoviesByDirector = getMoviesFromDirector(array, director)
  const scoreSum = filteredMoviesByDirector.reduce(function(acc, movie) {
    return acc + movie["score"]
  }, 0)
  const stringAverage= (scoreSum/filteredMoviesByDirector.length).toFixed(2);
  return parseFloat(stringAverage);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array.map(function(movie) {
    return movie["title"]    
  }).sort().slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  return movies.sort(function(currentmovie, nextmovie) {
    if (currentmovie["year"] === nextmovie["year"]) {
      return currentmovie["title"] < nextmovie["title"] ? -1 : 1;
    } else {
      return currentmovie["year"] < nextmovie["year"] ? -1 : 1;
    }
  })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  genre = genre || 'unknown'
  
  const filteredMoviesByCategory = movies.map(function(movie) {
    return {...movie, score: typeof movie['score'] === 'number' ? movie['score'] : 0, genre: movie['genre'] ?  movie['genre'] : 'unknown'}
  }).filter(function(movie) {
    return movie["genre"].includes(genre)
  })
1
  const scoreSum = filteredMoviesByCategory.reduce(function(acc, movie) {
    return acc + movie["score"]
  }, 0)

  const stringAverage = (scoreSum/filteredMoviesByCategory.length).toFixed(2);
  return parseFloat(stringAverage);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(function(movie) {
    if (!movie['duration']) {
      return movie
    }

    const durationInMinutes = movie['duration'].split(' ').reduce(function(acc, duration, index) {
      if (index === 0) {
        return parseInt(duration.replace('h', ''))*60
      } else {
        return parseInt(duration.replace('min', ''))+acc
      }
    }, 0)

    return {...movie, duration: durationInMinutes}
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let maxScore = {score: 0}
  movies.forEach(movie => {
    if (movie['year'] === year) {
      maxScore = movie['score'] > maxScore['score'] ? movie : maxScore
    }
  })
  return [maxScore]
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
