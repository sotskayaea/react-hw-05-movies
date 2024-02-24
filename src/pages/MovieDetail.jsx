import { useEffect, useState, useRef, Suspense } from 'react';
import axios from 'axios';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'constants';
import { ColorRing } from 'react-loader-spinner';
// import { nanoid } from 'nanoid';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      console.log(response.data);

      setMovieDetail(response.data);
    };

    fetchMovieDetail();
  }, [movieId]);

  const backRef = useRef(location.state?.from ?? '/movies');

  return (
    <div>
      {movieDetail === null && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {movieDetail && (
        <div>
          <Link to={backRef.current}>Go back</Link>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w185${movieDetail.poster_path}`}
              alt={movieDetail.title}
            />
            <h1>
              {movieDetail.title}
              <span>({new Date(movieDetail.release_date).getFullYear()})</span>
            </h1>
            <p>{movieDetail.overview}</p>

            <p>
              {movieDetail.genres.length === 0 ? (
                <span>Without genres</span>
              ) : (
                movieDetail.genres.map(genre => {
                  return <span>{genre.name} </span>;
                })
              )}
            </p>
          </div>
          <section>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <Suspense
                fallback={
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                      '#e15b64',
                      '#f47e60',
                      '#f8b26a',
                      '#abbd81',
                      '#849b87',
                    ]}
                  />
                }
              >
                <Outlet />
              </Suspense>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
