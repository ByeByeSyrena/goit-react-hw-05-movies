import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovies } from '../api/fetch-searching-films';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const [movies, setMovies] = useState([]);

  const updateQueryString = name => {
    if (name === '') return;
    setSearchParams({ searchQuery: name });
    fetchMovies(name);
  };

  const fetchMovies = async query => {
    try {
      const movies = await findMovies(query);
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  };

  const reset = () => {
    setSearchParams('');
  };

  useEffect(() => {
    if (searchQuery !== '') {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchBar value={searchQuery} onSubmit={updateQueryString} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
