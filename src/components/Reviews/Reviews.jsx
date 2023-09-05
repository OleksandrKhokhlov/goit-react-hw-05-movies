import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const resp = await fetchMovieReviews(movieId);

        if (resp.status !== 200) {
          throw new Error();
        }
        setReviews(resp.data.results);
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong! Reload the page or try again later');
      }
    };

    getMovieReviews();
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 ? (
        reviews.map(({ author, content, id }) => (
          <div key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </div>
  );
};

export default Reviews;
