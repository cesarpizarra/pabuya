import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (query.trim() !== "") {
        onSearch(query.trim());
      } else {
        alert("Please enter a movie title");
      }
    }
  };

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      onSearch(query.trim());
    } else {
      alert("Please enter a movie title");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full rounded bg-gray-400 bg-opacity-20 bg-clip-padding p-3 outline-none backdrop-blur-none backdrop-filter md:p-5"
      />
      <div
        onClick={handleSearchClick}
        className="absolute right-5 top-3 cursor-pointer md:top-5"
      >
        <FiSearch size={25} />
      </div>
    </div>
  );
};

export default Search;
