import { useEffect, useState } from "react";
import { getUpcoming } from "../../services";
import MovieCard from "../card/MovieCard";
import { MovieProps } from "../../types/movie";

const Upcoming = () => {
  const [data, setData] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        const response = await getUpcoming();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUpcoming();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-sans text-xl font-medium">Upcoming</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((up) => (
          <MovieCard
            key={up.id}
            title={up.title}
            id={up.id}
            poster_path={up.poster_path}
            release_date={up.release_date}
            vote_average={up.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
