import { useEffect, useState } from "react";
import { getCast } from "../../services";
import { People } from "../../types/people";
import { IMAGE_URL } from "../../api/api";
import { Link } from "react-router-dom";
import { TbActivityHeartbeat } from "react-icons/tb";
interface CastProps {
  id: number;
}
const Cast: React.FC<CastProps> = ({ id }) => {
  const [data, setData] = useState<People[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await getCast(Number(id));
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-nunito text-xl font-medium">Top Billed Cast</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((cast, index) => (
          <div
            key={index}
            className="rounded-md py-2 shadow-md transition-shadow duration-300"
          >
            <div className="h-3/4 w-48">
              <img
                src={
                  cast.profile_path
                    ? `${IMAGE_URL}/${cast.profile_path}`
                    : "https://via.placeholder.com/220x330/3F3F3F/FFFFFF/?text=Poster%20N/A"
                }
                alt={cast.name}
                className="h-full w-full rounded object-cover"
              />
            </div>
            <div className="py-4">
              <Link
                to={`/person/${cast.id}`}
                className="text-primary hover:text-primary-dark block cursor-pointer text-sm font-semibold transition-colors duration-300 hover:text-danger"
              >
                {cast.name}
              </Link>

              <p>
                {(cast.character ?? "").length > 18
                  ? `${(cast.character ?? "").substring(0, 21)}...`
                  : cast.character ?? ""}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm">{cast.known_for_department}</p>
                <p className="inline-flex items-center gap-2 text-sm font-semibold">
                  <span className="text-secondary">
                    <TbActivityHeartbeat size={20} />
                  </span>{" "}
                  {cast.popularity} %
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cast;
