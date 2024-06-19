import {makeAutoObservable} from "mobx";

class MoviesYearFilter {
    from: number = 1990
    to: number = 2024

    constructor() {
        makeAutoObservable(this)
    }

    changeYearFrom(value: number) {
        this.from = value

    }

    changeYearTo(value: number) {
        this.to = value
    }
}

export const moviesYearFilter = new MoviesYearFilter()