import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { footerSocials } from "../../constant";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-darkPrimary p-5 font-medium text-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center">
          Want to contribute? Find an issue with this page?{" "}
          <Link to="https://github.com/cesarpizarra/naruto/issues">
            <span className="cursor-pointer font-semibold text-danger hover:underline">
              Fix it on GitHub
            </span>
          </Link>
        </h2>

        <div className="flex flex-col items-center py-4">
          <h3 className="inline-flex items-center gap-2">
            Copyright{" "}
            <span>
              <FaRegCopyright />
            </span>{" "}
            2024 Pabuya
          </h3>

          <h3 className="inline-flex items-center gap-2 py-4">
            Created with <FaReact size={25} /> by:{" "}
            <Link to="https://cpizarra.vercel.app/">
              <span className="text-secondary hover:underline">
                Cesar Pizarra
              </span>
            </Link>
          </h3>
        </div>

        <div className="flex items-center gap-4">
          {footerSocials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-white"
            >
              {React.createElement(social.logo, { size: 20 })}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
