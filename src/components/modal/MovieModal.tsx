import React from "react";
import { FiX } from "react-icons/fi";
import { MODAL_URL } from "../../api/api";
import { getGenreNames } from "../../utils";
import { Movie } from "../../types/movie";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const { title, release_date, backdrop_path, overview, genre_ids, id } = movie;

  const backgroundImageStyle = backdrop_path
    ? {
        backgroundImage: `linear-gradient(to right, #000, transparent), url(${MODAL_URL}/${backdrop_path})`,
        backgroundSize: "cover",
      }
    : {
        backgroundColor: "#222",
      };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5 font-sans backdrop-contrast-100 backdrop-grayscale backdrop-filter">
          <motion.div
            initial={{ x: "100vw", y: "100vh", scale: 1 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={backgroundImageStyle}
            className="relative w-full max-w-4xl rounded-lg p-12 shadow-lg shadow-gray-800"
          >
            <div className="absolute right-2 top-2">
              <button
                onClick={onClose}
                className="rounded-full bg-darkPrimary bg-opacity-50 p-1 transition duration-300 hover:bg-danger"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="mt-12 max-w-md">
              <div>
                <h1 className="text-lg font-semibold">
                  {title} ({release_date.substring(0, 4)})
                </h1>
                <p className="text-xs">
                  <span>EN</span> | {getGenreNames(genre_ids)}
                </p>
              </div>
              <div className="flex items-center gap-4 py-4">
                <img src="/tmdb.svg" alt="tmdb logo" className="w-24" />
              </div>

              <p className="text-justify text-sm tracking-wide">{overview}</p>
              <div className="mt-4">
                <Link to={`/movie/${id}`}>
                  <button className="rounded-md bg-darkPrimary px-4 py-2 text-sm shadow-md shadow-darkSecondary hover:text-secondary">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default MovieModal;
