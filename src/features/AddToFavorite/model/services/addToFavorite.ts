export const addToFavorite = (id: number) => {
    const storedId = localStorage.getItem('favoriteMovies')

    if (storedId) {
        const favoriteMovies = JSON.parse(storedId)
        if (favoriteMovies.includes(id)) {
            return
        }
        favoriteMovies.push(id)
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    } else {
        const favoriteMovies = []
        favoriteMovies.push(id)
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    }
}