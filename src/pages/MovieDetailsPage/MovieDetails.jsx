import toast from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'api';
import { GoBackBtn, MovieDetailsWrap } from './MovieDetails.styled';
import { Conteiner } from 'components/Conteiner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const resp = await fetchMovieById(movieId);
        if (resp.status !== 200) {
          throw new Error();
        }
        setMovie(resp.data);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong! Reload the page or try again later');
      }
    };
    getMovieById();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    original_title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  } = movie;
  const currentGenres = genres.map(genre => genre.name).join(' ');
  const yearRelise = release_date.split('-')[0];
  const userScore = Math.round(vote_average * 10);

  return (
    <Conteiner>
      <GoBackBtn to={state.from}>
        <BiArrowBack /> Go back
      </GoBackBtn>
      <MovieDetailsWrap>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <div>
          <h2>
            {original_title}({yearRelise})
          </h2>
          <p>User score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p> {currentGenres}</p>
        </div>
      </MovieDetailsWrap>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};
export default MovieDetails;
