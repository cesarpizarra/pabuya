import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { getRandomBackgroundImage } from "../utils/getBackground";
import { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import Popular from "../components/sections/Popular";
import TopRated from "../components/sections/TopRated";
import TopPeople from "../components/sections/TopPeople";
import Upcoming from "../components/sections/Upcoming";
import Banner from "../components/Banner";
import Trending from "../components/sections/Trending";
import { IMAGE_URL } from "../api/api";
const Main = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    setBackgroundImage(`${IMAGE_URL}${getRandomBackgroundImage()}`);
  }, []);

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="relative h-screen w-full bg-cover bg-center"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 bg-gradient-to-r from-gradient"></div>
        <div className="relative z-10 p-5 text-white">
          <div className="flex items-center justify-between px-4 py-8 md:px-8">
            <Link to="/">
              <h1 className="font-poppins cursor-pointer text-xl font-semibold">
                PABUYA
              </h1>
            </Link>
            <div className="fixed right-5 rounded-full bg-darkPrimary bg-opacity-50">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>

          <div className="mx-auto mt-52 max-w-6xl text-center">
            <h1 className="text-3xl font-semibold drop-shadow-md md:text-4xl lg:text-5xl">
              The Ultimate{" "}
              <span className="inline-block bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text font-bold text-transparent">
                TMDB
              </span>{" "}
              Alternative for Discovering Thousands of Movies and TV Shows
            </h1>

            <p className="mt-5 text-lg text-grayText md:text-2xl">
              Explore and Discuss Your Favorite Movies and TV Shows.
            </p>

            <div className="relative mt-5 w-full">
              <input
                type="text"
                className="w-full rounded bg-gray-400 bg-opacity-20 bg-clip-padding p-3 outline-none backdrop-blur-none backdrop-filter md:p-5"
              />
              <div className="absolute right-5 top-3 cursor-pointer md:top-5">
                <FiSearch size={25} />
              </div>
            </div>

            <div className="mt-60 flex items-center justify-center">
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
