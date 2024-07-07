import { johnWick } from "../utils";
import MovieCard from "./card/MovieCard";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/ipyxbPJrLB1g9AfHq4xH5nLWmew.jpg)",
        backgroundSize: "cover",
      }}
      className="w-full px-5 py-8"
    >
      <div className="flex gap-5">
        <div className="hidden w-80 lg:block">
          <img
            src="https://image.tmdb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
            alt="john wick"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div className="flex w-full flex-col text-white">
          <h1 className="font-sans text-xl font-bold drop-shadow-lg md:text-4xl">
            John Wick
          </h1>
          <p className="font-sans text-sm md:text-xl">
            Ex-hitman John Wick comes out of retirement to track down the
            gangsters that took everything from him.
          </p>

          <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
            {johnWick.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
