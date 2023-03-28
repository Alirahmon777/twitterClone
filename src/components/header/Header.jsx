import React from "react";
import Navbar from "./Navbar";
import "../../css/header.css";

const Header = () => {
  return (
    <header className="header !relative">
      <div className="header__content !relative">
        <div className="header__content">
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
