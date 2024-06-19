import cls from './CatalogItem.module.css'
import {memo} from "react";
import {Link} from "react-router-dom";


interface CatalogItemProps {
    id: number,
    title: string,
    rating: number,
    year: number,
    img: string
}

export const CatalogItem = memo((props: CatalogItemProps) => {
    const {title, img, rating, year, id} = props

    return (
        <Link to={`/movie/${id}`} className={cls.CatalogItem}>
            <img
                className={cls.CatalogItemImage}
                src={img}
                alt={"Data"}
            />
            <div className={cls.title}>
                {title}
            </div>
            <div className={cls.container}>
                <div className={cls.year}>
                    {year}
                </div>
                <span className={cls.rating}>
                    {rating}
                </span>
            </div>
        </Link>
    );
});
