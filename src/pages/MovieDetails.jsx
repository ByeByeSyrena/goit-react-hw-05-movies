import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/fetch-movie-details';

export function MovieDetails() {
  const { movieId } = useParams();
  const movie = fetchMovieDetails(movieId);
  return <div></div>;
}
