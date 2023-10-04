import { fetchMovieCast } from '../../api/fetch-movie-credits';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import myImage from '../../images/logo192.png';
import css from './Cast.module.css';

function Cast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!cast || cast.length === 0) {
    return <p>Cast not found.</p>;
  }

  return (
    <>
      <ul className={css.list}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li className={css.item} key={id}>
            {profile_path === null ? (
              <img src={myImage} alt={name} width="92" height="92" />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                alt={name}
              />
            )}
            <h4 className={css.headlineSmall}>{name}</h4>
            <p className={css.justParagraph}>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cast;
