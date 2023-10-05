import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMovies } from '../api/fetch-searching-films';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';
import { MovieList, MovieLi } from './Home.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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

  useEffect(() => {
    if (searchQuery !== '') {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <SearchBar value={searchQuery} onSubmit={updateQueryString} />
      <MovieList>
        {movies.map(({ id, title }) => (
          <MovieLi key={id}>
            <Link
              to={`${id}`}
              state={{
                from: {
                  pathname: `/movies`,
                  search: `?searchQuery=${searchQuery}`,
                },
              }}
            >
              {title}
            </Link>
          </MovieLi>
        ))}
      </MovieList>
    </div>
  );
};

export default Movies;
