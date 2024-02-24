import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, API_KEY } from 'constants';
import { nanoid } from 'nanoid';
import image from '../assets/nophotocast.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      console.log(response.data.cast);

      setMovieCast(response.data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(actor => {
            return (
              <li key={nanoid()}>
                {actor.profile_path === null ? (
                  <img src={image} alt="nophoto" width={185} height={278} />
                ) : (
                  <img
                    src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                    alt={actor.name}
                  />
                )}

                <h3>{actor.name}</h3>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
