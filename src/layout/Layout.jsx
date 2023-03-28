import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
  return (
    <div className="container">
      <div className="flex h-full">
        <Header />
        <main className="main flex justify-around">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
