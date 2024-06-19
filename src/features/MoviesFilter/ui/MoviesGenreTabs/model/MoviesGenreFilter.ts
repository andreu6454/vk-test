import {makeAutoObservable} from "mobx";
import {TabItem} from "../../../../../shared/ui/Tabs/Tabs.tsx";

class MoviesGenreFilter {
    genres: Array<TabItem> = []

    constructor() {
        makeAutoObservable(this)
    }

    addGenre(genre: TabItem) {
        this.genres.push(genre)
    }

    removeGenre(genre: TabItem) {
        this.genres = this.genres.filter(el => el.value != genre.value)
    }
}

export const moviesGenreFilter = new MoviesGenreFilter()