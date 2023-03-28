import React from "react";
import { Link, useMatch } from "react-router-dom";

const ProfileLinks = ({ to, text, end = "false" }) => {
  const match = useMatch(to);

  return (
    <li className="relative pb-[15px]">
      <Link to={to} end={end} className={match ? "after" : ""}>
        {text}
      </Link>
    </li>
  );
};

export default ProfileLinks;
