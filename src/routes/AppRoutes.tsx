import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import BrowseMovies from "../pages/BrowseMovies";
import Genre from "../pages/Genre";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/browse-movies" element={<BrowseMovies />} />
        <Route path="/genre" element={<Genre />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
