import { useEffect, useState } from "react";
import MovieCard from "../card/MovieCard";
import { MovieProps } from "../../types/movie";
import { getTrending } from "../../services";

const Trending = () => {
  const [data, setData] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await getTrending();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-sans text-xl font-medium">What's Trending?</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((latest) => (
          <MovieCard key={latest.id} {...latest} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
