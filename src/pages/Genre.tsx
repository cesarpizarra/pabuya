import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { genres } from "../utils";
import { FaCaretDown } from "react-icons/fa";
import GenreCard from "../components/card/GenreCard";
import { getGenre } from "../services";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Movie } from "../types/movie";
import { FiRefreshCw } from "react-icons/fi";
const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState<any>(28);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const fetchTop = async (page: number) => {
    try {
      const response = await getGenre(page);
      setTimeout(() => {
        setIsLoading(false);
        setMovies((prevMovies) => [...prevMovies, ...response]);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTop(currentPage);
  }, [currentPage]);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = parseInt(e.target.value, 10);
    setSelectedGenre(selected);
    setMovies([]); // Reset movies when genre changes
    setCurrentPage(1); // Reset to the first page
  };

  const filteredData = movies.filter((movie) =>
    selectedGenre ? movie.genre_ids.includes(selectedGenre) : movies,
  );

  const handleLoadMore = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <Layout>
      <div className="relative min-h-screen w-full bg-cover bg-center px-4 text-white">
        <div className="mt-28 items-center justify-between md:flex">
          <h1 className="text-lg font-semibold md:text-3xl">
            Popular <span className="text-secondary">Movies</span>
          </h1>

          <div className="text-md items-center gap-5 text-grayText md:flex">
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <p className="text-sm font-semibold md:text-lg">Choose Genre:</p>
              <div className="relative">
                <select
                  onChange={handleGenreChange}
                  className="relative appearance-none rounded border-none bg-neutral-800 bg-transparent px-8 py-1 pr-10 shadow-xl outline-none md:py-2"
                >
                  {genres.map((genre) => (
                    <option
                      key={genre.id}
                      value={genre.id}
                      className="border-none bg-darkPrimary outline-none"
                    >
                      {genre.name}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <FaCaretDown />
                </span>
              </div>
            </div>
            {/* <div className="mt-4 flex items-center gap-2 md:mt-0">
              <p className="text-sm font-semibold md:text-lg">Sorted By:</p>
              <div className="relative">
                <select className="relative appearance-none rounded border-none bg-neutral-800 bg-transparent px-8 py-1 pr-10 shadow-xl outline-none md:py-2">
                  <option className="border-none bg-darkPrimary outline-none">
                    Popularity
                  </option>
                  <option className="border-none bg-darkPrimary outline-none">
                    Released Date
                  </option>
                  <option className="border-none bg-darkPrimary outline-none">
                    Rating
                  </option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <FaCaretDown />
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {isLoading && currentPage === 1 ? (
          <div className="grid grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="w-full">
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <Skeleton height={300} />
                  <Skeleton count={2} style={{ marginTop: 10 }} />
                </SkeletonTheme>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-6">
            {filteredData.map((res, index) => (
              <GenreCard key={index} index={index} {...res} />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center font-bold">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-4 py-2 text-secondary shadow-lg"
          >
            <span className={`${isLoading ? "animate-spin" : ""}`}>
              {" "}
              <FiRefreshCw />{" "}
            </span>
            {isLoading ? "LOADING..." : "LOAD MORE"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Genre;
