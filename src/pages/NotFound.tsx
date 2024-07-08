import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-darkPrimary">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-secondary">404</h1>
        <p className="mb-6 text-2xl font-medium text-white">Page Not Found</p>
        <Link
          to="/"
          className="rounded-md bg-indigo-500 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-indigo-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
