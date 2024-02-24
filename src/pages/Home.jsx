import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from 'constants';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      const response = await axios.get(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
      );
      console.log(response.data.results);
      return setTrendingMovies(response.data.results);
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      <ul>
        {trendingMovies.map(item => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
