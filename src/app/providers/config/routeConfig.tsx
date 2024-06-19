import {RouteProps} from "react-router";
import {MainPage} from "../../../pages/MainPage";
import {MoviePage} from "../../../pages/MoviePage/";
import {FavoritesPage} from "../../../pages/FavoritesPage/";

export enum AppRoutes {
    MAIN = 'main',
    MOVIE = 'movie',
    FAVORITES = ' favorites'
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.MOVIE]: "/movie/:id",
    [AppRoutes.FAVORITES]: "/favorites",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage/>
    },
    [AppRoutes.MOVIE]: {
        path: RoutesPath.movie,
        element: <MoviePage/>
    },
    [AppRoutes.FAVORITES]: {
        path: RoutesPath[" favorites"],
        element: <FavoritesPage/>
    },
}