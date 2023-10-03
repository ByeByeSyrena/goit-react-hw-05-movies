import axios from 'axios';

const API_KEY = "b77cc87cf8eb75174deef76365295e27";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const findMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        query,
      }
    });
    return response.data.results; 
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};