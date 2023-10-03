import React, { useState, useEffect } from 'react';
import { fetchTrends } from '../api/fetch-trending-now';

import { Link } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        setLoading(true);

        const data = await fetchTrends();
        setTrendingMovies(data);
      } catch (error) {
        console.error('Error fetching trending movies:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
