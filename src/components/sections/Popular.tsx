import { useEffect, useState } from "react";
import { getAllPopular } from "../../services";
import MovieCard from "../card/MovieCard";
import { MovieProps } from "../../types/movie";

const Popular = () => {
  const [data, setData] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await getAllPopular();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPopular();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-sans text-xl font-medium">What's Popular?</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((popular) => (
          <MovieCard
            key={popular.id}
            title={popular.title}
            id={popular.id}
            poster_path={popular.poster_path}
            release_date={popular.release_date}
            vote_average={popular.vote_average}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
