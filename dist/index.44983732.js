async function fetchMovies() {
    try {
        const response = await fetch(`http://localhost:3000/movies`);
        console.log(response);
        const movies = response.json();
        console.log(movies);
    } catch (error) {
        console.log(error);
    }
}
fetchMovies();
//patch
async function updateMovie(movieId, dataToUpdate) {
    const options = {
        method: 'PATCH',
        body: JSON.stringify(dataToUpdate)
    };
    return fetch(`http://localhost:3000/movies/${movieId}`, options).then((response)=>response.json());
}
updateMovie(1, {
    title: "\u0412\u0435\u043B\u0442\u043A\u0430 \u043D\u043E\u0432\u0430 \u043A\u043D\u0438\u0433\u0430 NODEJS"
}).then((response)=>console.log(response));
updateMovie(1, {
    rating: '9.5 '
}).then((response)=>console.log(response));

//# sourceMappingURL=index.44983732.js.map
