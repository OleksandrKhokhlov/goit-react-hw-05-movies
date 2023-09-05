import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWVlZWU2MWE5YzQ0ZDg3MDU2MGU5MDk3YWYzOWFiYSIsInN1YiI6IjY0ZWRkZDMzNTI1OGFlMDEyY2E2YzI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DwVyqR8KU5ITMf03TmwDmKexNT2Ro5Hf1FcrLtmXnOE';

export const fetchMovies = async query => {
  return await axios.get('/search/movie', {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
  });
};

export const fetchTrendingMovies = async () =>
  await axios.get('/trending/movie/day', {
    params: {
      language: 'en-US',
      include_adult: false,
    },
  });

export const fetchMovieById = async movieId =>
  await axios.get(`movie/${movieId}`);

export const fetchMovieCredits = async movieId =>
  await axios.get(`/movie/${movieId}/credits`);

export const fetchMovieReviews = async movieId =>
  await axios.get(`/movie/${movieId}/reviews`);
