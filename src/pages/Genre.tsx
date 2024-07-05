import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { genres } from "../utils";
import { FaCaretDown } from "react-icons/fa";
import { SearchProps } from "../types/search";
import GenreCard from "../components/card/GenreCard";
import { getGenre } from "../services";

const Genre = () => {
  const [data, setData] = useState<SearchProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<any>(28);
  // const now = new Date().getUTCFullYear();
  // const years = Array(now - (now - 20))
  //   .fill("")
  //   .map((v, idx) => now - idx);
  // console.log(years);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const response = await getGenre();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTop();
  }, []);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = parseInt(e.target.value, 10);
    setSelectedGenre(selected);
  };
  const filteredData = data.filter((movie) =>
    selectedGenre ? movie.genre_ids.includes(selectedGenre) : null,
  );
  return (
    <Layout>
      <div className="relative min-h-screen w-full bg-cover bg-center px-4 text-white">
        <div className="mt-28 items-center justify-between md:flex">
          <h1 className="text-lg font-semibold md:text-3xl">
            Popular <span className="text-secondary">Comedy</span> Movies
          </h1>

          <div className="text-md items-center gap-5 text-grayText md:flex">
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <p className="text-sm font-semibold md:text-lg">Choose Genre:</p>
              <div className="relative">
                <select
                  onChange={handleGenreChange}
                  className="relative appearance-none rounded border-none bg-stone-800 bg-transparent px-8 py-1 pr-10 shadow-xl outline-none md:py-2"
                >
                  {genres.map((genre) => (
                    <option
                      key={genre.id}
                      value={genre.id}
                      className="border-none bg-darkPrimary outline-none"
                    >
                      {genre.name}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <FaCaretDown />
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 md:mt-0">
              <p className="text-sm font-semibold md:text-lg">Sorted By:</p>
              <div className="relative">
                <select className="relative appearance-none rounded border-none bg-stone-800 bg-transparent px-8 py-1 pr-10 shadow-xl outline-none md:py-2">
                  <option className="border-none bg-darkPrimary outline-none">
                    Popularity
                  </option>
                  <option className="border-none bg-darkPrimary outline-none">
                    Released Date
                  </option>
                  <option className="border-none bg-darkPrimary outline-none">
                    Rating
                  </option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <FaCaretDown />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 py-12 sm:grid-cols-3 md:grid-cols-6">
          {filteredData.map((res, index) => (
            <GenreCard key={index} index={index} {...res} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Genre;
