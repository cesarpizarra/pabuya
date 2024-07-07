import { useEffect, useState } from "react";
import { getTopRated } from "../../services";
import MovieCard from "../card/MovieCard";
import { Movie } from "../../types/movie";

const TopRated = () => {
  const [data, setData] = useState<Movie[]>([]);

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
        {data.map((top, index) => (
          <MovieCard key={index} {...top} />
        ))}
      </div>
    </section>
  );
};

export default TopRated;
