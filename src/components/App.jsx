import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { Movies } from '../pages/Movies';

import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { NotFound } from './NotFound/NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
