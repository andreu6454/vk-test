import cls from './Catalog.module.css'
import {memo} from "react";
import {CatalogItem} from "../../CatalogItem/CatalogItem.tsx";
import {MovieType} from "../model/types/movieType.ts";

interface CatalogProps {
    movies: MovieType[],
    error: string,
    isLoading: boolean,
}

export const Catalog = memo((props: CatalogProps) => {
    const {movies, error, isLoading} = props

    const catalogForRender = movies?.map(el => (
        <CatalogItem
            id={el?.id}
            key={el?.id}
            title={el?.name}
            img={el?.poster?.url}
            rating={el?.rating?.kp}
            year={el?.year}
        />
    ))

    if (error) {
        return (
            <div className={cls.NotFound}>
                <div>{error}</div>
                <div>Возможно закончились запросы :(</div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className={cls.NotFound}>
                <div>LOADING...</div>
            </div>
        );
    }

    if (!movies.length) {
        return (
            <div className={cls.NotFound}>
                <div>Фильмы не найдены</div>
                <div>Возможно закончились запросы :(</div>
            </div>
        );
    }

    return (
        <div className={cls.Catalog}>
            {catalogForRender}
        </div>
    );
});
