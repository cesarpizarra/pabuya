import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { getMovieById, getVideo } from "../services";
import { useEffect, useState } from "react";
import { MovieDetails as MovieData } from "../types/movie";
import Loader from "../components/common/Loader";
import { BACKGROUND_URL } from "../api/api";
import { FaHeart } from "react-icons/fa";
import { formatDate } from "../utils";
import { FaPlay } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import Video from "../components/modal/Video";
import Cast from "../components/sections/Cast";
import Similar from "../components/sections/Similar";
import Suggested from "../components/sections/Suggested";
const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [query, setQuery] = useState("");
  const [videoKey, setVideoKey] = useState("");
  const navigate = useNavigate();
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const getDetails = async () => {
    setLoading(true);
    try {
      const response = await getMovieById(Number(id));
      setTimeout(() => {
        setLoading(false);
        setData(response);
      }, 1500);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right, #000, transparent), url(${BACKGROUND_URL}/${isMdDevice ? data?.backdrop_path : data?.poster_path})`,
    backgroundSize: "cover",
  };

  const dataList = [
    {
      name: "Status",
      action: data?.status,
    },
    {
      name: "Release Date",
      action: data?.release_date && formatDate(data?.release_date),
    },
    {
      name: data?.original_language === "en" ? "Language" : "",
      action: data?.original_language === "en" ? "English" : "",
    },
    {
      name: "Budget",
      action: data?.budget,
    },
    {
      name: "Revenue",
      action: data?.revenue,
    },
    {
      name: "Popularity",
      action: data?.popularity,
    },
    {
      name: "Vote Count",
      action: data?.vote_count,
    },
  ];

  const handleShowTrailer = async () => {
    try {
      const video = await getVideo(Number(id));
      if (video === undefined) {
        return alert("Video not found");
      }
      setVideoKey(video.key);
      setShowVideo(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/browse-movies?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Layout>
      {data && (
        <div
          style={backgroundImageStyle}
          className="relative min-h-screen w-full bg-cover bg-center px-4 font-nunito text-white"
        >
          <div className="relative z-10 flex min-h-screen flex-col justify-center">
            <div className="absolute right-20 top-8 hidden lg:block">
              <input
                type="text"
                placeholder="Search movie..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="rounded-full border-none bg-darkPrimary bg-opacity-50 px-4 py-2 placeholder-gray-50 outline-none"
              />
            </div>
            <div className="max-w-5xl">
              <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl">
                {data.title}
              </h1>
              <div className="flex items-center gap-4 py-3">
                <h2 className="text-grayText">
                  {data.release_date.substring(0, 4)}
                </h2>{" "}
                |<p> {data.genres.map((gen) => gen.name).join(" ◦ ")}</p>
              </div>
              <div className="flex flex-col justify-center gap-2 text-grayText">
                <p className="text-md">{data.overview}</p>

                <div className="flex flex-wrap items-center gap-5">
                  <div className="inline-flex items-center gap-2">
                    <img src="/tmdb.svg" alt="tmdb logo" className="w-24" />
                    <span>{data.vote_average}</span>
                  </div>
                  <p className="inline-flex items-center gap-2">
                    <span className="text-danger">
                      <FaHeart />
                    </span>
                    {data.vote_count}
                  </p>

                  <button
                    onClick={handleShowTrailer}
                    className="inline-flex items-center gap-2 font-bold text-white transition duration-300 hover:text-danger"
                  >
                    <FaPlay />
                    Random Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul className="relative z-10 w-full items-center gap-8 rounded-md bg-neutral-900 p-3 py-8 shadow-lg shadow-zinc-900 md:flex">
            {dataList.map((item, i) => (
              <li key={i} className="py-2 md:py-0">
                <p className="text-sm text-grayText">{item.name}</p>
                <p>{item.action}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Cast id={Number(id)} />
      <Similar id={Number(id)} />
      <Suggested id={Number(id)} />
      {showVideo && <Video videoKey={videoKey} onClose={handleClose} />}
    </Layout>
  );
};

export default MovieDetails;
