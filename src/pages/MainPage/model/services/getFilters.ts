import {moviesYearFilter} from "../../../../features/MoviesFilter/ui/MoviesYearFilter/model/store/moviesYearFilterStore.ts";
import {moviesRatingFilter} from "../../../../features/MoviesFilter/ui/MoviesRatingFilter/model/store/moviesRatingFilterStore.ts";
import {moviesGenreFilter} from "../../../../features/MoviesFilter/ui/MoviesGenreTabs/model/MoviesGenreFilter.ts";

export const getFilters = () => {
    const year = "&year=" + moviesYearFilter.from + '-' + moviesYearFilter.to
    const rating = "&rating.kp=" + moviesRatingFilter.from + '-' + moviesRatingFilter.to
    const genres =
        moviesGenreFilter.genres
            .map(el => '&genres.name=' + el.value)
            .toString()
            .replace(',', '')
    return year + rating + genres
}