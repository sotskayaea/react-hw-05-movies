import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, API_KEY } from 'constants';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
      );
      console.log(response.data.results);

      setMovieReviews(response.data.results);
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews &&
        (movieReviews.length === 0 ? (
          <p>This movie dont have any review</p>
        ) : (
          <ul>
            {movieReviews.map(review => {
              return (
                <li key={nanoid()}>
                  <h3>Author:{review.author}</h3>
                  <p>"{review.content}"</p>
                </li>
              );
            })}
          </ul>
        ))}
    </>
  );
};

export default Reviews;
