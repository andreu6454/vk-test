export const getFavoriteMoviesIds = () => {
    const storedId = localStorage.getItem('favoriteMovies')

    if (storedId) {
        return JSON.parse(storedId)
    }

    return []
}