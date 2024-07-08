import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import { People } from "../types/people";
import { getPeopleById, getPeopleCredit } from "../services";
import Loader from "../components/common/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGE_URL } from "../api/api";
import { formatDate } from "../utils";
import { TbActivityHeartbeat } from "react-icons/tb";
import { Movie } from "../types/movie";
import { FaStar } from "react-icons/fa";

const PersonDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<People | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setFullDescription] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        const response = await getPeopleById(Number(id));
        setTimeout(() => {
          setLoading(false);
          setData(response);
        }, 1500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const response = await getPeopleCredit(Number(id));
        setTimeout(() => {
          setLoading(false);
          setMovies(response);
        }, 1500);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? data?.biography
    : data?.biography?.slice(0, 450);

  const dataList = [
    {
      name: data?.popularity ? "Popularity" : "",
      action: data?.popularity ? data.popularity : "",
    },
    {
      name: data?.known_for_department ? "Known For" : "",
      action: data?.known_for_department ? data.known_for_department : "",
    },

    {
      name: data?.birthday ? "Birthday" : "",
      action: data?.birthday ? formatDate(data?.birthday) : "",
    },
    {
      name: data?.place_of_birth ? "Place of Birth" : "",
      action: data?.place_of_birth ? data.place_of_birth : "",
    },
  ];

  return (
    <Layout>
      {data && (
        <div className="relative min-h-screen w-full bg-cover bg-center px-4 font-nunito text-white">
          <div className="relative z-10 mt-40 min-h-screen">
            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="h-96 w-72 flex-shrink-0">
                <LazyLoadImage
                  src={`${IMAGE_URL}/${data.profile_path}`}
                  alt={data.name}
                  className="h-full w-full rounded object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 md:ml-8 md:mt-0">
                <h1 className="text-xl font-bold md:text-5xl">{data.name}</h1>
                <p className="text-md my-4 text-grayText md:text-lg">
                  {description}
                </p>
                {description?.length !== 0 && (
                  <button
                    onClick={showFullDescriptionHandler}
                    className="rounded-md bg-[#1a1a1a] px-4 py-2"
                  >
                    Read {showFullDescription ? "Less" : "More..."}
                  </button>
                )}
                <ul className="mt-8 w-full items-center gap-8 rounded-md p-3 py-4 md:flex">
                  {dataList.map((item, i) => (
                    <li key={i} className="py-2 md:py-0">
                      <p className="text-sm text-grayText">{item.name}</p>
                      {item.name === "Popularity" ? (
                        <p className="inline-flex items-center gap-2">
                          <span className="text-secondary">
                            <TbActivityHeartbeat size={20} />
                          </span>
                          {item.action}
                        </p>
                      ) : (
                        <p>{item.action}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="mt-8 flex w-full flex-col gap-8 rounded-md p-3 py-4">
              <p className="text-lg">{data.name && `${data.name} Movies`}</p>
              {movies.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center rounded-md bg-[#1a1a1a] p-2"
                >
                  <div className="flex h-full w-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-20">
                        <LazyLoadImage
                          src={`${IMAGE_URL}/${item.poster_path}`}
                          alt={item.title}
                          className="h-full w-full rounded object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col text-sm">
                        <h2>{item.title}</h2>
                        <p>{item.release_date.substring(0, 4)}</p>
                        <p className="text-grayText">as {item.character}</p>
                      </div>
                    </div>

                    <p className="inline-flex items-center gap-2 text-sm">
                      <span className="text-secondary">
                        <FaStar />
                      </span>
                      {item.vote_average}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PersonDetails;
