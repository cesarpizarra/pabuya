import { useEffect, useState } from "react";
import { getPopular } from "../../services";
import MovieCard from "../card/MovieCard";
import { Movie } from "../../types/movie";

const Popular = () => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await getPopular();
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
        {data.map((popular, index) => (
          <MovieCard key={index} {...popular} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
