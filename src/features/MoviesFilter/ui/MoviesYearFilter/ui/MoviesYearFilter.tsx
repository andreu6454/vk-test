import cls from './MoviesYearFilter.module.css'
import {ChangeEvent, useState} from "react";
import {moviesYearFilter} from "../model/store/moviesYearFilterStore.ts";
import {observer} from "mobx-react-lite";


export const MoviesYearFilter = observer(() => {

    const [error, setError] = useState(false)

    const onChangeValue1 = (e: ChangeEvent<HTMLInputElement>) => {
        const year = Number(e.currentTarget.value)
        if (year >= 1990 && year <= 2024) {
            setError(false)
            moviesYearFilter.changeYearFrom(year)
        } else {
            setError(true)
            moviesYearFilter.changeYearFrom(year)
        }
    }

    const onChangeValue2 = (e: ChangeEvent<HTMLInputElement>) => {
        const year = Number(e.currentTarget.value)
        if (year >= 1990 && year <= 2024) {
            setError(false)
            moviesYearFilter.changeYearTo(year)
        } else {
            setError(true)
            moviesYearFilter.changeYearTo(year)
        }
    }

    return (
        <div className={cls.MoviesYearFilter}>
            <div className={cls.title}>
                Год выхода
            </div>
            <div className={cls.inputContainer}>
                от
                <input
                    onChange={onChangeValue1}
                    type={'number'}
                    value={moviesYearFilter.from}
                    className={cls.input}
                />
                до
                <input
                    onChange={onChangeValue2}
                    type={'number'}
                    value={moviesYearFilter.to}
                    className={cls.input}
                />
            </div>
            {error &&
                <div className={cls.error}>
                    Год должен быть от 1990 и до 2024
                </div>
            }
        </div>
    );
});
