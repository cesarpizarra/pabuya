export const johnWick = [
  {
    adult: false,
    backdrop_path: "/ipyxbPJrLB1g9AfHq4xH5nLWmew.jpg",
    genre_ids: [28, 53],
    id: 245891,
    original_language: "en",
    original_title: "John Wick",
    overview:
      "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    popularity: 90.504,
    poster_path: "/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    release_date: "2014-10-22",
    title: "John Wick",
    video: false,
    vote_average: 7.432,
    vote_count: 18766,
  },
  {
    adult: false,
    backdrop_path: "/tHkujDqdPC9VQoFpEWU0QgWIZyM.jpg",
    genre_ids: [28, 53, 80],
    id: 324552,
    original_language: "en",
    original_title: "John Wick: Chapter 2",
    overview:
      "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    popularity: 105.19,
    poster_path: "/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    release_date: "2017-02-08",
    title: "John Wick: Chapter 2",
    video: false,
    vote_average: 7.328,
    vote_count: 12707,
  },
  {
    adult: false,
    backdrop_path: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    genre_ids: [28, 53, 80],
    id: 458156,
    original_language: "en",
    original_title: "John Wick: Chapter 3 - Parabellum",
    overview:
      "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
    popularity: 110.25,
    poster_path: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    release_date: "2019-05-15",
    title: "John Wick: Chapter 3 - Parabellum",
    video: false,
    vote_average: 7.444,
    vote_count: 10307,
  },
  {
    adult: false,
    backdrop_path: "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
    genre_ids: [28, 53, 80],
    id: 603692,
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 252.838,
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    release_date: "2023-03-22",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 7.741,
    vote_count: 6044,
  },
];

export const links = [
  {
    title: "Movie Genres",
    path: "/genre",
  },
  {
    title: "Browse Movies",
    path: "/browse-movies",
  },
  {
    title: "Signin/Signup",
    path: "/movie-genres",
  },
  {
    title: "TV",
    path: "/tv",
  },
  {
    title: "My Watchlist",
    path: "/watchlist",
  },
];

export const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// Function to get genre names based on IDs
export const getGenreNames = (genreIds: any) => {
  return genreIds
    .map((genreId: any) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : ""; // Return empty string if genre is not found
    })
    .join(", ");
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
