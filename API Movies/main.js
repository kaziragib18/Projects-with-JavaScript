fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bbf0e1de5db7bacc846abac7534804fd')
    .then(res => res.json())
    .then(data => setMovies(data.results))

const setMovies = (movies) => {
    // console.log(posts);
    const movieContainer = document.getElementById('movie-container')
    for (const movie of movies) {
        // console.log(post.title)
        const movieDiv = document.createElement('div')
        movieDiv.classList.add('col-md-3')
        const imageUrl = 'https://image.tmdb.org/t/p/original' + movie.poster_path
        console.log(imageUrl)
        movieDiv.innerHTML = `
            <div class="shadow rounded p-4 m-2">
                <img src =${movie.poster_path}>

                <h4 class= "fs-bold pb-3 font-monospace">${movie.title}</h4>

                <p class= "fs-6 fst-italic">${movie.overview.slice(0, 200)}</p>
                <h6 class= "font-monospace">Popularity: ${movie.popularity}</h6>

                <h6 class= "font-monospace">Release date: ${movie.release_date}</h6>
            </div>
        `
        movieContainer.appendChild(movieDiv);

    }
}