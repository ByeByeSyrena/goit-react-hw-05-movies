import axios from 'axios';

const API_KEY = "b77cc87cf8eb75174deef76365295e27";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const fetchMovieReviews = async (movie_id) => {
  try {
    const response = await axios.get(`${BASE_URL}${movie_id}/reviews`, {
        params: {
        api_key: API_KEY,
      }
    });
      
      const { results } = response.data;
    return results; 
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};