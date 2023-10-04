import { fetchMovieReviews } from '../../api/fetch-movie-reviews';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Reviews() {
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

  if (!reviews) {
    return <p>Reviews not found.</p>;
  }

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
