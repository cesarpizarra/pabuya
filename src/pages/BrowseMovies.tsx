import Layout from "../components/layout/Layout";
import { useBackgroundImage } from "../utils/useBackground";
import { useEffect, useState } from "react";
import { searchMovie } from "../services";
import SearchCard from "../components/card/SearchCard";
import Loader from "../components/common/Loader";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../components/Search";

const BrowseMovies = () => {
  const backgroundImage = useBackgroundImage();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const queryParam = queryParams.get("query") || "";
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (query === "") {
      alert("Please enter a movie title");
      return;
    }
    setIsLoading(true);
    try {
      const searchResults = await searchMovie(query);
      setTimeout(() => {
        setIsLoading(false);
        setResults(searchResults);
        // Update query parameter in URL
        navigate(`/browse-movies?query=${encodeURIComponent(query)}`);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    // Always fetch data initially and when query changes
    if (queryParam.trim() !== "") {
      fetchData();
    }
  }, []);

  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="relative min-h-screen w-full bg-cover bg-center px-4"
      >
        <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50 bg-gradient-to-r from-gradient"></div>
        <div className="relative mx-auto mt-40 max-w-7xl text-white">
          <Search onSearch={handleSearch} />
          <div className="mt-2 w-44 rounded bg-darkPrimary bg-opacity-50 px-4 py-3 font-medium">
            Total Results: {results.length}
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {results.map((res, index) => (
                <SearchCard key={index} {...res} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BrowseMovies;
