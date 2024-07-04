import { useEffect, useState } from "react";
import { getTopRated } from "../../services";
import MovieCard from "../card/MovieCard";
import { MovieProps } from "../../types/movie";

const TopRated = () => {
  const [data, setData] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const response = await getTopRated();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTop();
  }, []);
  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-sans text-xl font-medium">Top Rated</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((top) => (
          <MovieCard
            key={top.id}
            title={top.title}
            id={top.id}
            poster_path={top.poster_path}
            release_date={top.release_date}
            vote_average={top.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
