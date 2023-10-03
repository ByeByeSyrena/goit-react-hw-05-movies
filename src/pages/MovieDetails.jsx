import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/fetch-movie-details';

export function MovieDetails() {
  const { id } = useParams();
  const movie = fetchMovieDetails(id);
  return <div></div>;
}
