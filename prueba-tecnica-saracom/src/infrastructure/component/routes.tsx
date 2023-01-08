import { Route, Routes } from 'react-router-dom';
import { DetailsEpisode } from '../../features/pages/details.episode';
import { DetailsPodcast } from '../../features/pages/details.podcast';
import { Home } from '../../features/pages/home';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/detailsPodcast" element={<DetailsPodcast />}></Route>
            <Route path="/detailsEpisode" element={<DetailsEpisode />}></Route>

            <Route
                path="*"
                element={<h1>404 No se encontró la ruta</h1>}
            ></Route>
        </Routes>
    );
}
