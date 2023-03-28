import React from "react";
import { Link, useMatch } from "react-router-dom";

const HeaderItem = ({ Svg, text, to, ActiveSvg, width, onClick = null }) => {
  const match = useMatch(`${to}/*`);

  return (
    <li className="header__item cursor-pointer ">
      <Link to={to} className="header__link">
        {match ? (
          <div className="flex items-center gap-3" onClick={onClick}>
            <img src={ActiveSvg} className={width} alt={text + " icon"} />
            <p className="font-bold header__itemtext capitalize">{text}</p>
          </div>
        ) : (
          <div className="flex items-center gap-3" onClick={onClick}>
            <img src={Svg} className={width} lt={text + " icon"} />
            <p className="font-semibold header__itemtext capitalize">{text}</p>
          </div>
        )}
      </Link>
    </li>
  );
};

export default HeaderItem;
