import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL } from "../../api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SearchProps } from "../../types/search";
import { FaHeart } from "react-icons/fa";
const SearchCard: React.FC<SearchProps> = ({
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
}) => {
  return (
    <div className="w-full rounded-md py-2 duration-300">
      <div className="relative h-96 w-full cursor-pointer transition-all hover:rotate-3 hover:scale-105">
        <LazyLoadImage
          src={
            poster_path
              ? `${IMAGE_URL}/${poster_path}`
              : "https://via.placeholder.com/220x330/3F3F3F/FFFFFF/?text=Poster%20N/A"
          }
          alt={title}
          className="inset-0 h-full w-full rounded object-cover transition-transform hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="py-4">
        <Link
          to={`#`}
          className="text-primary hover:text-primary-dark block text-sm font-semibold transition-colors duration-300 hover:text-danger"
        >
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Link>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-white">{release_date?.substring(0, 4)}</p>

          <div className="flex items-center gap-1 text-sm text-secondary">
            <FaStar />
            <span className="text-white">{vote_average}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-danger">
            <FaHeart />
            <span className="text-white">{(vote_count / 100).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
