export interface MovieType {
    ageRating: number,
    alternativeName: string,
    countries: string[],
    description: string,
    genres: Array<{ name: string }>,
    id: number,
    isSeries: boolean,
    movieLength: number | null,
    name: string,
    rating: {
        kp: number,
        imdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
    },
    poster: {
        previewUrl: string,
        url: string
    },
    ratingMpaa: number | null,
    releaseYears: number[],
    shortDescription: string,
    status: string,
    ticketsOnSale: boolean,
    top10: number,
    top250: number,
    type: string,
    typeNumber: number,
    votes: {
        kp: number,
        imdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
    },
    year: number,
}