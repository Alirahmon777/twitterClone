import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = ({ user, redirectPath = "/api/signup" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
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
