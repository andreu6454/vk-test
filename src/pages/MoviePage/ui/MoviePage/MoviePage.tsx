import cls from './MoviePage.module.css'
import {useEffect, useState} from "react";
import {$api} from "../../../../shared/api/api.ts";
import {MovieType} from "../../../../entities/Catalog/model/types/movieType.ts";
import {Header} from "../../../../widgets/NavBar/ui/Header.tsx";
import {useParams} from "react-router";
import {MovieDescription} from "../MovieDescription/MovieDescription.tsx";
import {AddToFavorite} from "../../../../features/AddToFavorite/";


export const MoviePage = () => {

    const {id} = useParams()

    const [movie, setMovie] = useState<MovieType>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        $api.get(`movie/${id}`).then((resp) => {
            setIsLoading(false)
            setMovie(resp.data)
        })
    }, []);

    if (isLoading) {
        return (
            <div className={cls.MoviePage}>
                LOADING
            </div>
        )
    }
    return (
        <>
            <Header/>
            <div className={cls.MoviePage}>
                <img
                    className={cls.img}
                    alt={"Тут должен быть постер фильма :("}
                    src={movie?.poster.url}
                />
                <MovieDescription
                    name={movie?.name}
                    rating={movie?.rating}
                    genres={movie?.genres}
                    year={movie?.year}
                    description={movie?.description}
                />
            </div>
            <AddToFavorite id={movie?.id}/>
        </>

    );
};
