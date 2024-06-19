import cls from './AddToFavorite.module.css'
import {memo} from "react";
import {addToFavorite} from "../model/services/addToFavorite.ts";

interface AddToFavoriteProps {
    id?: number
}

export const AddToFavorite = memo((props: AddToFavoriteProps) => {
    const {id} = props

    if (!id) {
        return
    }
    const addToFavoriteHandle = () => {
        addToFavorite(id)
    }
    return (
        <div className={cls.AddToFavorite}>
            <span className={cls.title}>
                Понравился фильм? Добавьте в избранное!
            </span>
            <button onClick={addToFavoriteHandle} className={cls.btn}>
                Добавить в избранное
            </button>
        </div>
    );
});
