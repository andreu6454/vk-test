import cls from './MoviesRatingFilter.module.css'
import {ChangeEvent, useState} from "react";
import {moviesRatingFilter} from "../model/store/moviesRatingFilterStore.ts";
import {observer} from "mobx-react-lite";

export const MoviesRatingFilter = observer(() => {

    const [error, setError] = useState(false)

    const onChangeValue1 = (e: ChangeEvent<HTMLInputElement>) => {
        const rating = Number(e.currentTarget.value)
        if (rating >= 0 && rating <= 10) {
            setError(false)
            moviesRatingFilter.changeRatingFrom(rating)
        } else {
            setError(true)
            moviesRatingFilter.changeRatingFrom(rating)
        }
    }
    const onChangeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        const rating = Number(e.currentTarget.value)
        if (rating >= 0 && rating <= 10) {
            setError(false)
            moviesRatingFilter.changeRatingTo(rating)
        } else {
            setError(true)
            moviesRatingFilter.changeRatingTo(rating)
        }
    }
    return (
        <div className={cls.MoviesRatingFilter}>
            <div className={cls.title}>
                Рейтинг
            </div>
            <div className={cls.inputContainer}>
                от
                <input
                    onChange={onChangeValue1}
                    type={'number'}
                    value={moviesRatingFilter.from}
                    className={cls.input}
                />
                до
                <input
                    onChange={onChangeValue2}
                    type={'number'}
                    value={moviesRatingFilter.to}
                    className={cls.input}
                />
            </div>
            {error &&
                <div className={cls.error}>
                    Рейтинг должен быть от 0 и до 10
                </div>
            }
        </div>
    );
});
