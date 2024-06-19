import {Suspense} from "react";
import {Route, Routes} from "react-router";
import {routeConfig} from "../config/routeConfig.tsx";

export const AppRouter = () => {

    return (
        <Suspense
            fallback={<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};