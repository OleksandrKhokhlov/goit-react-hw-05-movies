import { lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetails from 'pages/MovieDetailsPage/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
