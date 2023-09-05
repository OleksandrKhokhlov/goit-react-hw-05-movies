import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../api';
import notFoundImage from '../../img/notfound.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const resp = await fetchMovieCredits(movieId);

        if (resp.status !== 200) {
          throw new Error();
        }
        setCast(resp.data.cast);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong! Reload the page or try again later');
      }
    };

    getMovieCredits();
  }, [movieId]);
  return (
    <div>
      {cast.map(({ original_name, profile_path, character, id }) => {
        return (
          <div key={id}>
            <img
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${notFoundImage}`
              }
              alt={original_name}
              width={200}
            />
            <h3>{original_name}</h3>
            <p>Character: {character !== '' ? character : 'no data'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cast;
