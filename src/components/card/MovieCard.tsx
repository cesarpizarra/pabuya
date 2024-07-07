import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL } from "../../api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MovieModal from "../modal/MovieModal";
import { Movie } from "../../types/movie";

interface MovieCardProps extends Movie {
  onImageClick?: (movie: Movie) => void;
}
const MovieCard: React.FC<MovieCardProps> = ({
  poster_path,
  title,
  release_date,
  vote_average,
  onImageClick,
  backdrop_path,
  overview,
  genre_ids,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    const movie = {
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
    <div className="h-96 rounded-md py-2 duration-300">
      <div
        onClick={handleClick}
        className="h-3/4 w-48 cursor-pointer transition-all hover:rotate-3 hover:scale-105"
      >
        <LazyLoadImage
          src={`${IMAGE_URL}/${poster_path}`}
          alt={title}
          className="h-full w-full rounded object-cover"
          loading="lazy"
        />
      </div>
      <div className="py-4">
        <Link
          to={`#`}
          className="text-primary hover:text-primary-dark block cursor-pointer text-sm font-semibold transition-colors duration-300 hover:text-danger"
        >
          {title.length > 30 ? `${title.substring(0, 21)}...` : title}
        </Link>
        <div className="flex items-center justify-between">
          <p className="mt-1 text-sm text-white">
            {release_date.substring(0, 4)}
          </p>
          <p className="inline-flex items-center gap-2 text-sm">
            <span className="text-secondary">
              <FaStar />
            </span>{" "}
            {vote_average}
          </p>
        </div>
      </div>
      <MovieModal
        movie={{
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

export default MovieCard;
