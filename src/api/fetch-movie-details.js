import axios from 'axios';

const API_KEY = "b77cc87cf8eb75174deef76365295e27";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const fetchMovieDetails = async (movie_id) => {
  try {
    const response = await axios.get(BASE_URL, {
        params: {
        movie_id,
        api_key: API_KEY,
      }
    });
    return response.data.results; 
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};