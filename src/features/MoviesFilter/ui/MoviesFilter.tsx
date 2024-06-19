import cls from './MoviesFilter.module.css'
import {memo} from "react";
import {MoviesGenreTabs} from "./MoviesGenreTabs/ui/MoviesGenreTabs.tsx";
import {MoviesYearFilter} from "./MoviesYearFilter/ui/MoviesYearFilter.tsx";
import {MoviesRatingFilter} from "./MoviesRatingFilter/ui/MoviesRatingFilter.tsx";

interface MoviesFilter {
    onAcceptHandler: () => void
}

export const MoviesFilter = memo((props: MoviesFilter) => {

    const {onAcceptHandler} = props

    return (
        <div className={cls.MoviesFilter}>
            <div className={cls.title}>
                Фильтры
            </div>
            <MoviesGenreTabs/>
            <MoviesYearFilter/>
            <MoviesRatingFilter/>
            <button
                onClick={onAcceptHandler}
                className={cls.btn}
            >
                Применить
            </button>
        </div>
    );
});
