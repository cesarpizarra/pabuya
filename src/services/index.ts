import axios from "axios";
const apikKey = import.meta.env.VITE_API_KEY;

export const getAllPopular = async (): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getUpcoming = async (): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getTrending = async (): Promise<[]> => {
  try {
    const timeWindow = "day";
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};
export const getTopRated = async (): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getPeople = async (): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};
