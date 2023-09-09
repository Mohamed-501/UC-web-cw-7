const movie1 = {
    name: "فيلم 1",
    img: "https://media.npr.org/assets/img/2014/10/14/fury-pk-01_-df-00060-_wide-01b86178feb7335dfe492bc15c6e207bf71529e6-s1400-c100.jpg",
  };
  
  const movie2 = {
    name: "فيلم 2",
    img: "https://assets.voxcinemas.com/posters/P_HO00009444.jpg",
  };
  
  const movie3 = {
    name: "فيلم 3",
    img: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
  };
  
  const movies = [];
  movies.push(movie1);
  movies.push(movie2);
  movies.push(movie3);
  
  const movieContainer = document.getElementById("container");
  
  movies.forEach((movie) => {
    movieContainer.innerHTML += `
          <div class="movie">
          
              <img src="${movie.img}" alt="صورة الفيلم" />
              <h2>${movie.name}</h2>
          </div>
      `;
  });
  const randomMovieIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomMovieIndex];
  const randomMovieContainer = document.getElementById("random-movie-container");
  
  randomMovieContainer.innerHTML = `
      <h3>فيلم اليوم:</h3>
      <div class="movie">
          <img src="${randomMovie.img}" alt="صورة الفيلم" />
          <h2>${randomMovie.name}</h2>
      </div>
  `;