import cls from './MoviesGenreTabs.module.css'
import {ReactNode, useCallback, useMemo} from "react";
import {moviesGenreFilter} from "../model/MoviesGenreFilter.ts";
import {observer} from "mobx-react-lite";

export interface TabItem {
    value: string,
    content: ReactNode
}

export const MoviesGenreTabs = observer(() => {

    const genreOptions = useMemo(() => [
        {
            value: 'драма',
            content: 'Драма'
        },
        {
            value: 'комедия',
            content: 'Комедия'
        },
        {
            value: 'фантастика',
            content: 'Фантастика'
        },
        {
            value: 'детектив',
            content: 'Детектив'
        },
        {
            value: 'мультфильм',
            content: 'Мультфильм'
        },

    ], [])


    const addGenreHandler = useCallback((tab: TabItem) => {
        moviesGenreFilter.addGenre(tab)
    }, [])

    const removeGenreHandler = useCallback((tab: TabItem) => {
        moviesGenreFilter.removeGenre(tab)
    }, [])


    const tabs = genreOptions.map(el => {
        const isActive = moviesGenreFilter.genres.filter(element => el.value === element.value)

        return (
            <div
                onClick={() => {
                    if (isActive.length) {
                        removeGenreHandler(el)
                    } else {
                        addGenreHandler(el)
                    }
                }}
                className={isActive.length ? cls.ActiveTab : cls.Tab}
                key={el.value}
            >
                {el.content}
            </div>)
    })

    return (
        <div>
            <div className={cls.title}>
                Жанры
            </div>
            <div className={cls.Tabs}>
                {tabs}
            </div>
        </div>
    );
});
