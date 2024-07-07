import { useEffect, useState } from "react";
import { getUpcoming } from "../../services";
import MovieCard from "../card/MovieCard";
import { Movie } from "../../types/movie";

const Upcoming = () => {
  const [data, setData] = useState<Movie[]>([]);

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
      <h2 className="font-nunito text-xl font-medium">Upcoming</h2>
      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((up, index) => (
          <MovieCard key={index} {...up} />
        ))}
      </div>
    </section>
  );
};

export default Upcoming;
