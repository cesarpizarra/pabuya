import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import BrowseMovies from "../pages/BrowseMovies";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/browse-movies" element={<BrowseMovies />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
