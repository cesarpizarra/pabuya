import axios from "axios";
const apikKey = import.meta.env.VITE_API_KEY;

export const getPopular = async (): Promise<[]> => {
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

export const getMovieById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apikKey}&page=1`,
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getVideo = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apikKey}&page=1`,
    );
    return response.data.results[0];
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};
export const getGenre = async (page: number): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikKey}&page=${page}`,
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

export const getPeopleById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apikKey}&page=1`,
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};
export const getPeopleCredit = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apikKey}&page=1`,
    );
    return response.data.cast;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const searchMovie = async (query: string): Promise<[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getCast = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikKey}&page=1`,
    );
    return response.data.cast;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getSimilar = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};

export const getRecommendation = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apikKey}&page=1`,
    );
    return response.data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data");
  }
};
