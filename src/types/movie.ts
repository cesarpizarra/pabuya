export type Movie = {
  id?: any;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count?: number;
  backdrop_path: string;
  overview: string;
  genre_ids: number[];
};

export type MovieDetails = {
  id?: any;
  title: string;
  status: string;
  poster_path: string;
  popularity: number;
  budget: number;
  homepage: string;
  original_language: string;
  release_date: string;
  vote_average: number;
  vote_count?: number;
  backdrop_path: string;
  overview: string;
  revenue: number;
  belongs_to_collection: {
    backdrop_path: string;
    id: any;
    name: string;
    poster_path: string;
  };
  genres: {
    id: number;
    name: string;
  }[];
};
