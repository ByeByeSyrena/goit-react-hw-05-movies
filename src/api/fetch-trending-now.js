import axios from 'axios';

const API_KEY = "b77cc87cf8eb75174deef76365295e27";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";

export const fetchTrends = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
      }
    });
    console.log("Response Data:", response.data);
    return response.data.results; 
  } catch (error) {
    console.error("Error:", error.message);
    throw error; 
  }
};




  