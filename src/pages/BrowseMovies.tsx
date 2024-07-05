import { FiSearch } from "react-icons/fi";
import Layout from "../components/layout/Layout";
import { useBackgroundImage } from "../utils/useBackground";
import { useEffect, useState } from "react";
import { searchMovie } from "../services";
import SearchCard from "../components/card/SearchCard";
import Loader from "../components/common/Loader";
import { useLocation } from "react-router-dom";

const BrowseMovies = () => {
  const backgroundImage = useBackgroundImage();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParam = queryParams.get("query") || "";
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const searchResults = await searchMovie(query);
      setTimeout(() => {
        setIsLoading(false);
        setResults(searchResults);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const searchResults = await searchMovie(queryParam);
        setTimeout(() => {
          setIsLoading(false);
          setResults(searchResults);
        }, 1500);
      } catch (error) {
        console.error(error);
      }
    };

    // Always fetch data initially and when query changes
    fetchData();
  }, []);

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
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search Movies..."
            className="w-full rounded bg-gray-400 bg-opacity-20 bg-clip-padding p-3 outline-none backdrop-blur-none backdrop-filter md:p-5"
          />
          <div
            onClick={handleSearch}
            className="absolute right-5 top-3 cursor-pointer md:top-5"
          >
            <FiSearch size={25} />
          </div>
          <div className="mt-2 w-44 rounded bg-darkPrimary bg-opacity-50 px-4 py-3 font-medium">
            Total Results: {results.length}
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {results.map((res) => (
                <SearchCard key={res.id} {...res} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BrowseMovies;
