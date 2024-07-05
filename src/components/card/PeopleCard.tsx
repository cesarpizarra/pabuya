import React from "react";
import { Link } from "react-router-dom";
import { PeopleProps } from "../../types/people";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IMAGE_URL } from "../../api/api";

const PeopleCard: React.FC<PeopleProps> = ({
  name,
  popularity,
  known_for_department,
  profile_path,
}) => {
  return (
    <div className="h-96 rounded-md py-2 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="h-3/4 w-48 cursor-pointer transition-all hover:rotate-3 hover:scale-105">
        <img
          src={`${IMAGE_URL}/${profile_path}`}
          alt={name}
          className="h-full w-full rounded object-cover"
        />
      </div>
      <div className="py-4">
        <Link
          to={`#`}
          className="text-primary hover:text-primary-dark block cursor-pointer text-sm font-semibold transition-colors duration-300 hover:text-danger"
        >
          {name}
        </Link>
        <div className="flex items-center justify-between">
          <p className="mt-1 text-sm">{known_for_department}</p>
          <p className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-secondary">
              <TbActivityHeartbeat size={20} />
            </span>{" "}
            {popularity} %
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
