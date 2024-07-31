import { useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
