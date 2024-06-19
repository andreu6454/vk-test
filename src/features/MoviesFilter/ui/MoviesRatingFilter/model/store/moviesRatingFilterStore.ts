import {makeAutoObservable} from "mobx";

class MoviesRatingFilterStore {
    from: number = 0
    to: number = 10

    constructor() {
        makeAutoObservable(this)
    }

    changeRatingFrom(value: number) {
        this.from = value
    }

    changeRatingTo(value: number) {
        this.to = value
    }
}

export const moviesRatingFilter = new MoviesRatingFilterStore