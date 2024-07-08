import { useEffect, useState } from "react";
import { getSimilar } from "../../services";
import { Movie } from "../../types/movie";
import { IMAGE_URL } from "../../api/api";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaStar } from "react-icons/fa";
interface SimilarProps {
  id: number;
}
const Similar: React.FC<SimilarProps> = ({ id }) => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const response = await getSimilar(Number(id));
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSimilar();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      {data.length !== 0 && (
        <>
          <h2 className="font-nunito text-xl font-medium">Similar Movies</h2>

          <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
            {data.map((item, index) => (
              <div key={index} className="h-96 rounded-md py-2 duration-300">
                <div className="h-3/4 w-48">
                  <LazyLoadImage
                    src={`${IMAGE_URL}/${item.poster_path}`}
                    alt={item.title}
                    className="h-full w-full rounded object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="py-4">
                  <Link
                    to={`/movie/${item.id}`}
                    className="text-primary hover:text-primary-dark block cursor-pointer text-sm font-semibold transition-colors duration-300 hover:text-danger"
                  >
                    {item.title.length > 20
                      ? `${item.title.substring(0, 21)}...`
                      : item.title}
                  </Link>
                  <div className="flex items-center justify-between">
                    <p className="mt-1 text-sm text-white">
                      {item.release_date.substring(0, 4)}
                    </p>
                    <p className="inline-flex items-center gap-2 text-sm">
                      <span className="text-secondary">
                        <FaStar />
                      </span>{" "}
                      {item.vote_average}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Similar;
