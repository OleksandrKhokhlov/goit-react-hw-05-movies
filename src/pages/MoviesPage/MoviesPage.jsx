import { toast } from 'react-hot-toast';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const resp = await fetchMovies(query);
        if (resp.status !== 200) {
          throw new Error();
        }
        setMovies(resp.data.results);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong! Reload the page or try again later');
      }
    };
    if (query !== '') {
      getMovies();
    }
  }, [query]);

  const handlerSubmit = evt => {
    evt.preventDefault();

    const queryCurrent = evt.target.elements.query.value.trim();
    setSearchParams({ query: queryCurrent });
    
    evt.target.reset();
  };

  return (
    <>
      <Searchbar onSubmit={handlerSubmit} />
      <ul>
        {movies.map(({ original_title, id }) => (
          <MovieList key={id} id={id} title={original_title} />
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
