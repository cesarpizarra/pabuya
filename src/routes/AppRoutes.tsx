import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
