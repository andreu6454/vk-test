import cls from './MainPage.module.css'
import {memo, useEffect, useState} from "react";
import {Catalog} from "../../../entities/Catalog/ui/Catalog.tsx";
import {MoviesFilter} from "../../../features/MoviesFilter/";
import {Header} from "../../../widgets/NavBar/ui/Header.tsx";
import {MovieType} from "../../../entities/Catalog/model/types/movieType.ts";
import {getFilters} from "../model/services/getFilters.ts";
import {$api} from "../../../shared/api/api.ts";

export const MainPage = memo(() => {
    const [movies, setMovies] = useState<Array<MovieType>>([])

    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        setIsLoading(true)
        $api.get(`movie?page=${page}&limit=50&sortField=rating.kp&sortType=-1`,).then((resp) => {
            setIsLoading(false)
            setMovies(resp.data.docs)
        })
            .catch((resp) => {
                setError(resp.message)
            })
    }, [page]);

    const onAcceptHandler = () => {
        setIsLoading(true)
        const filters = getFilters()
        $api.get(`movie?page=${page}&limit=50&sortField=rating.kp&sortType=-1` + filters,).then((resp) => {
            setIsLoading(false)
            setMovies(resp.data.docs)
        })
            .catch((resp) => {
                setError(resp.message)
            })
    }

    const decrementPageHandler = () => {
        setPage(page - 1)
    }
    const incrementPageHandler = () => {
        setPage(page + 1)
    }

    return (
        <div className={cls.MainPage}>
            <Header/>
            <div className={cls.container}>
                <Catalog isLoading={isLoading} error={error} movies={movies}/>
                <MoviesFilter onAcceptHandler={onAcceptHandler}/>
            </div>
            {!!movies.length && <div className={cls.btnContainer}>
                <button
                    onClick={decrementPageHandler}
                    className={cls.btn}
                >
                    {"<"}
                </button>
                <div
                    className={cls.Page}
                >
                    {page}
                </div>
                <button
                    onClick={incrementPageHandler}
                    className={cls.btn}
                >
                    {">"}
                </button>
            </div>}
        </div>
    );
});
