import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import BrowseMovies from "../pages/BrowseMovies";
import Genre from "../pages/Genre";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import PersonDetails from "../pages/PersonDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/browse-movies" element={<BrowseMovies />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/person/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
