import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL } from "../../api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaHeart } from "react-icons/fa";
import MovieModal from "../modal/MovieModal";
import { Movie } from "../../types/movie";

interface SearchCardProps extends Movie {
  onImageClick?: (movie: Movie) => void;
}

const SearchCard: React.FC<SearchCardProps> = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
  vote_count,
  backdrop_path,
  overview,
  genre_ids,
  onImageClick,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    const movie = {
      id,
      poster_path,
      title,
      release_date,
      vote_average,
      backdrop_path,
      overview,
      genre_ids,
    };
    if (typeof onImageClick === "function") {
      onImageClick(movie);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full rounded-md py-2 duration-300">
      <div
        onClick={handleClick}
        className="relative h-96 w-full cursor-pointer overflow-hidden transition-all hover:rotate-3 hover:scale-105"
      >
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
            <span className="text-white">
              {vote_count ? (vote_count / 100).toFixed(2) : "N/A"}
            </span>
          </div>
        </div>
      </div>

      <MovieModal
        movie={{
          id,
          poster_path,
          title,
          release_date,
          vote_average,
          backdrop_path,
          overview,
          genre_ids,
        }}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default SearchCard;
