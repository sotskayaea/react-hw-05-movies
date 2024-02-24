import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL, API_KEY } from 'constants';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();
  console.log(location);

  const onHandleSubmit = e => {
    e.preventDefault();
    const currentValue = e.target.elements.search.value.toLowerCase();
    setSearchValue(currentValue);
    e.currentTarget.reset();
  };

  useEffect(() => {
    console.log('Search value:', searchValue);
    const fetchSearchMovie = async () => {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchValue}`
      );
      console.log(response.data.results);
      setSearchMovies(response.data.results);
    };
    if (searchValue === '') {
      return;
    }

    fetchSearchMovie();

    return () => {
      setSearchValue('');
    };
  }, [searchValue]);

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" name="search" placeholder="Enter movie name" />
        <button type="submit">Look for</button>
      </form>

      <ul>
        {searchMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
