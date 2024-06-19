import cls from './MovieDescription.module.css'
import {memo} from "react";

interface MovieDescriptionProps {
    name?: string,
    year?: number,
    rating?: {
        kp: number,
        imdb: number,
        filmCritics: number,
        russianFilmCritics: number,
        await: number
    },
    genres?: Array<{ name: string }>,
    description?: string,
}

export const MovieDescription = memo((props: MovieDescriptionProps) => {
    const {
        name,
        genres,
        description,
        year,
        rating
    } = props

    return (
        <div className={cls.MovieDescription}>
            <span className={cls.descriptionField}>
                {'Название: ' + name}
            </span>
            <span className={cls.descriptionField}>
                {'Дата выхода: ' + year}
            </span>
            <span className={cls.descriptionField}>
                {'Рейтинг фильма: '}
                <div className={cls.ratingContainer}>
                    {!!rating?.imdb && <span>
                        {'imdb: ' + rating?.imdb}
                    </span>}
                    {!!rating?.kp && <span>
                         {'kp: ' + rating?.kp}
                    </span>}
                    {!!rating?.russianFilmCritics && <span>
                          {'russianFilmCritics: ' + rating?.russianFilmCritics}
                    </span>}
                    {!!rating?.filmCritics && <span>
                        {'filmCritics: ' + rating?.filmCritics}
                    </span>}
                </div>
            </span>
            <span className={cls.descriptionField}>
                {'Жанры: ' + genres?.map(el => ' ' + el.name)}
            </span>
            <span className={cls.descriptionField}>
                {'Описание: ' + description}
            </span>
        </div>
    );
});
