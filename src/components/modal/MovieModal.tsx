import React from "react";
import { FiX } from "react-icons/fi";
import { BACKGROUND_URL } from "../../api/api";
import { getGenreNames } from "../../utils";
import { Movie } from "../../types/movie";

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const { title, release_date, backdrop_path, overview, genre_ids } = movie;

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to right, #000, transparent), url(${BACKGROUND_URL}/${backdrop_path})`,
    backgroundSize: "cover",
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 backdrop-contrast-100 backdrop-grayscale backdrop-filter">
          <div
            style={backgroundImageStyle}
            className="relative h-96 w-full max-w-3xl rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center justify-between pb-3">
              <div>
                <h1 className="font-sans text-lg font-semibold">
                  {title} ({release_date.substring(0, 4)})
                </h1>
                <p className="text-xs">
                  {" "}
                  <span>EN</span> | {getGenreNames(genre_ids)}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full bg-darkPrimary bg-opacity-50 p-1 transition duration-300 hover:bg-danger"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="max-w-md">
              <div className="mb-4 flex items-center gap-4">
                <img src="/imdb_logo.svg" alt="IMDB logo" />
                <img src="/tmdb.svg" alt="tmdb logo" className="w-24" />
              </div>

              <p className="text-justify text-xs tracking-wide">{overview}</p>
            </div>

            <div className="absolute bottom-4 rounded-md bg-darkPrimary px-4 py-2 text-sm shadow-md shadow-darkSecondary">
              <button>View More</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieModal;
