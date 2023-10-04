import { fetchMovieReviews } from '../../api/fetch-movie-reviews';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!reviews || reviews.length === 0) {
    return <p>Reviews not found.</p>;
  }

  return (
    <>
      <ul className={css.list}>
        {reviews.map(({ id, author, content }) => (
          <li className={css.item} key={id}>
            <h4 className={css.headlineSmall}>Author: {author}</h4>
            <p className={css.justParagraph}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Reviews;
