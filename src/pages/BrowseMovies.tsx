import { FiSearch } from "react-icons/fi";
import Layout from "../components/layout/Layout";
import { useBackgroundImage } from "../utils/useBackground";

const BrowseMovies = () => {
  const backgroundImage = useBackgroundImage();
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
        className="relative min-h-screen w-full bg-cover bg-center px-4"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 bg-gradient-to-r from-gradient"></div>
        <div className="relative mx-auto mt-40 max-w-7xl text-white">
          <input
            type="text"
            placeholder="Search Movies..."
            className="w-full rounded bg-gray-400 bg-opacity-20 bg-clip-padding p-3 outline-none backdrop-blur-none backdrop-filter md:p-5"
          />
          <div className="absolute right-5 top-3 cursor-pointer md:top-5">
            <FiSearch size={25} />
          </div>
          <div className="mt-2 w-44 rounded bg-darkPrimary bg-opacity-50 px-5 py-3 font-medium">
            Total Pages 0/0
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BrowseMovies;
