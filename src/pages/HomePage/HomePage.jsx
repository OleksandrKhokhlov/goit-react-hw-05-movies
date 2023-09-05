import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api';
import MovieList from 'components/MovieList/MovieList';
import { Title } from './HomePage.styled';

const HomePage = () => {
  const [trendingMovies, settrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const resp = await fetchTrendingMovies();
        if (resp.status !== 200) {
          throw new Error();
        }
        settrendingMovies(resp.data.results);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong! Reload the page or try again later');
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {trendingMovies.map(({ id, original_title }) => (
          <MovieList key={id} id={id} title={original_title} />
        ))}
      </ul>
    </>
  );
};

export default HomePage;
