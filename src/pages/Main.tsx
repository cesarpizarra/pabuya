import Layout from "../components/layout/Layout";
import { FaAngleDown } from "react-icons/fa6";
import Popular from "../components/sections/Popular";
import TopRated from "../components/sections/TopRated";
import TopPeople from "../components/sections/TopPeople";
import Upcoming from "../components/sections/Upcoming";
import Banner from "../components/Banner";
import Trending from "../components/sections/Trending";
import { useBackgroundImage } from "../utils/useBackground";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";
const Main = () => {
  const backgroundImage = useBackgroundImage();
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/browse-movies?query=${encodeURIComponent(query)}`);
  };
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="relative min-h-screen w-full bg-cover bg-center"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 bg-gradient-to-r from-gradient"></div>
        <div className="relative z-10 p-5 text-white">
          <div className="mx-auto mt-72 max-w-6xl text-center">
            <h1 className="text-2xl font-semibold drop-shadow-md md:text-4xl lg:text-5xl">
              The Ultimate{" "}
              <span className="inline-block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text font-bold text-transparent">
                TMDB
              </span>{" "}
              &{" "}
              <span className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text font-bold text-transparent">
                IMDB
              </span>{" "}
              Alternative for Discovering Thousands of Movies and TV Shows
            </h1>

            <p className="text-md mt-5 text-grayText md:text-2xl">
              Explore and Discuss Your Favorite Movies and TV Shows.
            </p>

            <div className="relative mt-5 w-full">
              <Search onSearch={handleSearch} />
            </div>

            <div className="mt-32 flex animate-bounce items-center justify-center md:mt-60">
              <FaAngleDown size={40} />
            </div>
          </div>
        </div>
      </div>
      <Popular />
      <TopRated />
      <Trending />
      <Upcoming />
      <Banner />
      <TopPeople />
    </Layout>
  );
};

export default Main;
