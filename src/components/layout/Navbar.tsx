import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { links } from "../../utils";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const handleClick = (link: string) => {
    if (link.includes("/browse-movies")) {
      navigate(link);
      setOpen(false);
    } else {
      alert("This feature is not available yet!");
    }
  };
  return (
    <div>
      <div className="absolute left-5 top-10 z-50 rounded-full bg-opacity-50 text-white">
        <Link to="/">
          <h1 className="font-poppins cursor-pointer text-xl font-semibold">
            PABUYA
          </h1>
        </Link>
      </div>
      <div className="fixed right-5 top-8 z-50 rounded-full bg-darkPrimary bg-opacity-50 text-white">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`fixed left-0 top-0 z-20 h-full w-full bg-darkPrimary text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="mx-auto flex h-screen w-full max-w-md flex-col items-center justify-center p-5 text-center font-medium">
          {links.map((link, i) => (
            <li
              key={i}
              onClick={() => handleClick(link.path)}
              className={`bg-darkSecondary my-2 w-full rounded-md py-4 text-xl font-semibold uppercase hover:bg-danger ${link.title.includes("Watchlist") ? "pointer-events-none text-darkPrimary" : "cursor-pointer"}`}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
