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
