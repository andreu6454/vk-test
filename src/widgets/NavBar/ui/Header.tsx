import cls from './Header.module.css'
import {Link} from "react-router-dom";

export const Header = () => {

    return (
        <header className={cls.Header}>
            <Link to={"/"} className={cls.title}>
                VMovies
            </Link>
            <nav className={cls.Navbar}>
                <Link to={"/"} className={cls.Link}>Главная</Link>
                <Link to={"/favorites"} className={cls.Link}>Избранное</Link>
            </nav>
        </header>
    );
};
