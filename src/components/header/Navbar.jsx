import React from "react";
import {
  bookmark,
  bookmarkFill,
  explore,
  exploreFill,
  home,
  homeFill,
  list,
  listFill,
  messages,
  messagesFill,
  notification,
  notificationFill,
  profile,
  profileFill,
  logo,
  more,
  threeDots,
  nounLogin,
} from "../../assets/svg";
import { avatar } from "../../assets/images";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
const Navbar = () => {
  const remove = () => localStorage.removeItem("token");
  return (
    <>
      <nav className="header__nav">
        <div className="header__wrapper">
          <Link to={"/home"} className="header__img">
            <img src={logo} alt="logo" width={35} />
          </Link>
          <ul className="header__list">
            <HeaderItem
              Svg={home}
              ActiveSvg={homeFill}
              text="home"
              to={"/home"}
              width={"w-5"}
            />
            <HeaderItem
              Svg={explore}
              ActiveSvg={exploreFill}
              text="explore"
              to={"/explore"}
              width={"w-5"}
            />
            <HeaderItem
              Svg={notification}
              ActiveSvg={notificationFill}
              text="notification"
              to={"/notification"}
              width={"w-5"}
            />
            <HeaderItem
              Svg={messages}
              ActiveSvg={messagesFill}
              text="messages"
              width={"w-5"}
              to={"/messages"}
            />
            <HeaderItem
              Svg={bookmark}
              ActiveSvg={bookmarkFill}
              text="bookmarks"
              width={"w-5"}
              to={"/bookmarks"}
            />
            <HeaderItem
              Svg={list}
              ActiveSvg={listFill}
              text="lists"
              width={"w-5"}
              to={"/lists"}
            />
            <HeaderItem
              Svg={profile}
              width={"w-5"}
              ActiveSvg={profileFill}
              text="profile"
              to={"/profile"}
            />
            <HeaderItem
              Svg={nounLogin}
              width={"w-5"}
              ActiveSvg={nounLogin}
              text="Logout"
              onClick={remove()}
              to={"/"}
            />
            <HeaderItem
              Svg={more}
              ActiveSvg={more}
              width={"w-5"}
              text="more"
              to={"/more"}
            />
          </ul>
        </div>
        <button className="header__btn" id="tweet">
          Tweet
        </button>
      </nav>
      <div className="header__user">
        <div className="header__box">
          <img src={avatar} width="50" height="50" alt="" />
          <div className="header__profile">
            <h3 className="header__name">Bobur</h3>
            <p className="header__email">@bobur_mavlonov</p>
          </div>
        </div>
        <button>
          <img src={threeDots} alt="more" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
