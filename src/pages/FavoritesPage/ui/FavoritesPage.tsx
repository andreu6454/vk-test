import cls from './FavoritesPage.module.css'
import {memo, useEffect, useState} from "react";
import {Header} from "../../../widgets/NavBar/ui/Header.tsx";
import {getFavoriteMoviesIds} from "../model/services/getFavoriteMoviesIds.ts";
import {$api} from "../../../shared/api/api.ts";
import {CatalogItem} from "../../../entities/CatalogItem/CatalogItem.tsx";
import {MovieType} from "../../../entities/Catalog/model/types/movieType.ts";

export const FavoritesPage = memo(() => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const [favoriteIds, setFavoriteIds] = useState([])
    const [movies, setMovies] = useState<MovieType[]>([])

    useEffect(() => {
        setFavoriteIds(getFavoriteMoviesIds)
    }, []);

    const ids = favoriteIds
        .map(el => ("id=" + el + "&"))
        .toString()
        .replace(/,/g, "")

    useEffect(() => {
        if (ids) {
            setIsLoading(true)
            $api.get(`movie?${ids}`).then((resp) => {
                setIsLoading(false)
                setMovies(resp.data.docs)
            }).catch((resp) => {
                setIsLoading(false)
                setError(resp.message)
            })
        }
    }, [ids]);

    const moviesForRender = movies?.map(el => (
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
            <>
                <Header></Header>
                <div className={cls.FavoritesPage}>
                    <div>{error}</div>
                    <div>Возможно закончились запросы :(</div>
                </div>
            </>
        )
    }
    if (isLoading) {
        return (
            <>
                <Header></Header>
                <div className={cls.FavoritesPage}>
                    LOADING...
                </div>
            </>
        )
    }
    return (
        <>
            <Header></Header>
            <div className={cls.FavoritesPage}>
                <div className={cls.title}>
                    Избранное
                </div>
                <div className={cls.moviesContainer}>
                    {moviesForRender}
                </div>
            </div>
        </>
    );
});
